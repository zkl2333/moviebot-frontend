import BigPoster from "../../../components/BigBackdrop";
import { fetchTmdb } from "../../../utils";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data } = await fetchTmdb(`/movie/${id}`, {
    append_to_response: "images,credits",
    language: "zh-CN",
    include_image_language: "zh,null",
  });

  return (
    <div className="">
      <BigPoster movieId={id} />
      <pre className="text-sm mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-32 text-gray-200 mb-8 p-4 border border-gray-800 rounded-md whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
