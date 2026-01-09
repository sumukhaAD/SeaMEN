// ✅ 1. YOUR API KEY (Keep this here for the demo)
const apiKey = "AIzaSyDsySKMuQXxvKKJ9y8w2ptIAG9xSDR5qlw";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// ✅ 2. Use "Deno.serve" (No imports needed = No crashes)
Deno.serve(async (req) => {
  // Handle CORS (Browser security)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    // Call Google Gemini
    const googleResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ 
            parts: [{ 
              text: `You are a helpful, enthusiastic student counselor for NMIT college clubs. 
                     Keep answers short (max 2 sentences). 
                     User asks: "${message}"` 
            }] 
          }]
        })
      }
    );

    const data = await googleResponse.json();

    // Check for Google Errors
    if (data.error) {
      throw new Error(data.error.message);
    }

    // Extract the text
    const aiText = data.candidates[0].content.parts[0].text;

    // ✅ 3. RETURN "response" (Matches your AICompass.tsx line 63!)
    return new Response(JSON.stringify({ response: aiText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});