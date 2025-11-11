import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an AI assistant for Abderrahmen Ebdelli's portfolio website. 
You have detailed knowledge about his background, skills, and projects.

BACKGROUND:
- Third-year Software Engineering student at Faculty of Sciences of Gabès
- Specializing in Web Development, IoT, and Intelligent Systems
- Expected graduation: 2026
- Location: Medenine, Tunisia
- Contact: abderrahmenebdelli18@gmail.com, +216 58 730 950

TECHNICAL SKILLS:
- Languages: C, C++, C#, Python, JavaScript, PHP
- Web & Frameworks: React, Django, ASP.NET, Bootstrap
- Mobile: Android development, hybrid applications
- Databases: MySQL, PostgreSQL, PL/SQL, Big Data
- AI/ML: Machine Learning, NLP, chatbot development
- IoT: Arduino, connected sensors, embedded applications
- Networks: Packet Tracer, Cisco equipment
- Tools: Docker, Git

MAJOR PROJECTS:
1. Recruithub (2025) - Intelligent HR platform with candidate pre-selection engine using React, PHP, MySQL
2. MedicalAIService (2025) - Medical AI assistant analyzing symptoms using Python, NLP, PostgreSQL
3. TalkBridge (2025) - Conversational chatbot for customer support using Node.js, NLP API
4. Wasalni eBooking (2025) - Car rental platform in Tunisia using React, PHP, MySQL

EDUCATION:
- Bachelor's in Software Engineering (LGLSI3)
- Main courses: Computer Networks, Databases, Big Data, Machine Learning, ASP.NET, Mobile Development
- Specializations: Web Development, IoT, Intelligent Systems, Connected Systems

OBJECTIVE:
Seeking an end-of-study internship in Medenine to apply technical skills in innovative projects.

You should:
- Answer questions about Abderrahmen's experience, skills, and projects
- Provide details about his education and technical capabilities
- Be helpful and professional
- If asked about opportunities, mention he's seeking an internship
- Keep responses concise and informative`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
