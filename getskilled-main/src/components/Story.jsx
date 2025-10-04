import React from 'react';

const Story = () => (
  <section className="flex flex-col lg:flex-row items-center gap-8 md:gap-28 py-20 px-4 md:px-28">
    <div className="flex-1 max-w-sm h-96 rounded-xl overflow-hidden bg-gray-100 relative shadow-2xl">
      <img src="../public/assets/working-businessman.jpg" alt="Founder" className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
        <div className="text-5xl mb-2">"</div>
        <p className="text-sm">We didn't want to build just another edtech platform. We wanted to create a place where learning feels alive.</p>
        <p className="text-xs opacity-90 mt-2">- Rahul Sharma, Founder</p>
      </div>
    </div>
    <div className="flex-1">
      <span className="inline-block bg-green-100 text-green-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">Our Story</span>
      <h2 className="text-3xl font-bold mb-6">
        What If Learning <span className="text-green-500">Evolved</span> With the World?
      </h2>
      {[
        "When the founders of GetSkilled reflected on their own journeys through education, a common frustration echoed — too many classrooms felt like memory tests, not skill-building grounds.",
        "Students were cramming for grades, not crafting real solutions. Curriculums were outdated. Projects were theoretical. And when the degree was done, most were still asking, 'Now what?'",
        "In a fast-moving world, why was education stuck in the past?",
        "That's when they decided to build something different. A place where learning is research-driven, hands-on, and truly prepares you for the real world — not just the exam hall.",
        "GetSkilled isn't just another edtech platform. It's where learning comes alive."
      ].map((text, index) => (
        <p key={index} className="text-lg mb-5">{text}</p>
      ))}
    </div>
  </section>
);

export default Story;