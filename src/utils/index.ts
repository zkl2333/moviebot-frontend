import { setGlobalDispatcher, ProxyAgent } from "undici";

if (process.env.HTTP_PROXY) {
  setGlobalDispatcher(new ProxyAgent(process.env.HTTP_PROXY));
}

export const fetchTmdb = async (
  endpoint: string,
  search: string | URLSearchParams | string[][] | Record<string, string>
) => {
  const searchParams = new URLSearchParams(search);
  searchParams.append("api_key", process.env.TMDB_API_KEY);
  const origin = new URL(`https://api.themoviedb.org/3/${endpoint}`);
  origin.search = searchParams.toString();

  try {
    const res = await fetch(origin);
    const data = await res.json();
    if (data.success == false) {
      console.log(data);
      throw new Error(data?.status_message || "Something went wrong");
    }
    return { origin, data };
  } catch (error) {
    throw new Error(error.message);
  }
};
