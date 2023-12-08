import { setGlobalDispatcher, ProxyAgent } from "undici";
import { fetchTmdb } from "../../../../utils";

if (process.env.HTTP_PROXY) {
  setGlobalDispatcher(new ProxyAgent(process.env.HTTP_PROXY));
}
export async function GET(request: Request, { params }: { params: { endpoint: string[] } }) {
  const endpoint = params.endpoint.join("/");
  const { searchParams } = new URL(request.url);
  const data = await fetchTmdb(endpoint, searchParams);
  return Response.json(data);
}
