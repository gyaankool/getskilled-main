# AI Backend

This is the AI backend server for the GET SKILLED platform, handling AI-powered features like course suggestions and roadmap generation.

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file in the AI_Backend directory with your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## Running the Server

Start the AI backend server:
```bash
python app.py
```

The server will run on `http://localhost:5001`

## API Endpoints

- `POST /api/ai_suggestions` - Get AI-powered learning suggestions
  - Body: `{ "goal": "string", "topics": "string", "level": "string" }`
  - Returns: `{ "suggestions": "string" }`

- `POST /api/search_roadmap` - Search for existing roadmaps
  - Body: `{ "query": "string" }`
  - Returns: `{ "success": boolean, "roadmap": object }`

## CORS

CORS is enabled to allow requests from the frontend running on different ports. 