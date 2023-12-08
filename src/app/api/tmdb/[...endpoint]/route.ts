import { fetchTmdb } from "../../../../utils";

export async function GET(request: Request, { params }: { params: { endpoint: string[] } }) {
  const endpoint = params.endpoint.join("/");
  const { searchParams } = new URL(request.url);
  const data = await fetchTmdb(endpoint, searchParams);
  return Response.json(data);
}
