export async function GET(req) {
  return Response.json({
    ok: true,
  });
}

export async function POST(req) {
  req.cookies.get("");
  const data = await req.json();
  return Response.json(data);
}
