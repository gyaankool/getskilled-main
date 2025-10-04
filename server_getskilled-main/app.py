from flask import Flask, jsonify, request
import os
import json
from difflib import SequenceMatcher
from dotenv import load_dotenv
from openai import OpenAI
from flask_cors import CORS

load_dotenv()     

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=OPENAI_API_KEY)

@app.route('/api/ai_suggestions', methods=['POST'])
def ai_suggestions():
    data = request.json or {}
    goal   = data.get('goal')
    topics = data.get('topics', '')
    level  = data.get('level')
    if not goal or not level:
        return jsonify({"error": "missing parameters"}), 400

    prompt = (
        f"I want to learn {goal} with focus on {topics or 'general'}. "
        f"I am at {level} level. Please suggest a learning roadmap "
        "with specific courses and resources."
    )

    # ← this is the new v1.x call
    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )

    # extract the content
    suggestion = resp.choices[0].message.content.strip()
    return jsonify({"suggestions": suggestion})

def load_roadmaps():
    # Updated path to look for roadmap.json in the parent directory
    roadmap_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Frontend', 'views', 'roadmap.json')
    with open(roadmap_path, 'r') as f:
        return json.load(f)

def find_best_match(query, roadmaps):
    best_match = None
    highest_score = 0
    
    for roadmap in roadmaps['roadmaps']:
        for keyword in roadmap['keywords']:
            score = SequenceMatcher(None, query.lower(), keyword.lower()).ratio()
            if score > highest_score:
                highest_score = score
                best_match = roadmap
    
    return best_match if highest_score > 0.6 else None

@app.route('/api/search_roadmap', methods=['POST'])
def search_roadmap():
    query = request.json.get('query', '').lower()
    roadmaps = load_roadmaps()
    best_match = find_best_match(query, roadmaps)
    
    if best_match:
        return jsonify({
            'success': True,
            'roadmap': best_match
        })
    return jsonify({
        'success': False,
        'message': 'No matching roadmap found'
    })

if __name__ == '__main__':
    import os
    port = int(os.environ.get("PORT", 5001))  # Changed port to 5001 to avoid conflicts
    # Listen on 0.0.0.0 so Render's health checks can hit your server
    app.run(host="0.0.0.0", port=port, debug=True)
