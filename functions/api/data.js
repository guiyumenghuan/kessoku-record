
// This function runs on the server side (Edge)
// It handles GET (fetch data) and POST (save/delete data)
// Compatible with Cloudflare Pages Functions and EdgeOne Pages Functions

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // 1. Identify the KV Binding
  // Ensure you bind your KV Namespace to the variable 'KESSOKU_KV' in your dashboard
  const KV = env.KESSOKU_KV;

  // 2. Identify the Admin Secret for security
  // Ensure you set 'ADMIN_SECRET' in your Environment Variables
  const ADMIN_SECRET = env.ADMIN_SECRET;

  if (!KV) {
    return new Response(JSON.stringify({ error: 'KV binding not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const DB_KEY = 'videos_data_v1';

  try {
    // --- GET: Fetch all videos ---
    if (request.method === 'GET') {
      const data = await KV.get(DB_KEY);
      // If KV is empty, return null (client will use defaults)
      return new Response(data || 'null', {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // --- POST: Save or Delete (Update List) ---
    if (request.method === 'POST') {
      // Security Check
      const authHeader = request.headers.get('Authorization');
      if (!ADMIN_SECRET || authHeader !== `Bearer ${ADMIN_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
      }

      const body = await request.json();
      
      // Validation: Ensure body is an array
      if (!Array.isArray(body)) {
        return new Response('Invalid data format: Expected array', { status: 400 });
      }

      // Save to KV
      await KV.put(DB_KEY, JSON.stringify(body));

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Method not allowed', { status: 405 });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
