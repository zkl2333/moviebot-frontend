export const fetchTmdb = async (
  endpoint: string,
  search: string | URLSearchParams | string[][] | Record<string, string>
) => {
  const searchParams = new URLSearchParams(search);
  const origin = new URL(`https://api.themoviedb.org/3/${endpoint}`);
  origin.search = searchParams.toString();

  try {
    const res = await fetch(origin, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    });
    const data = await res.json();
    return { origin, data };
  } catch (error) {
    return { origin, error };
  }
};
