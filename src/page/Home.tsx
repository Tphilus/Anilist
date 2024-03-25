import { useState } from "react";
import AnilistCard from "../components/card/AnilistCard";
import SearchBox from "../components/search/SearchBox";
import useGetData from "../hook/useGetData";

export default function Home() {
  const { data, loading, error } = useGetData();
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (error) return <div>Error ...</div>;

  const searchData = data?.Page?.media?.filter(
    (media: any) =>
      media.title.english &&
      media.title.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="px-2 w-full md:w-[80%] mx-auto">
      <div className="py-8">
        <SearchBox setSearchTerm={setSearchTerm} />
      </div>

      {/* Content */}
      <div>
        {loading ? (
          <div className="loading loading-bars loading-lg flex items-center justify-center text-center md:h-[65vh] m-auto "></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 md:mb-16">
            {searchData?.length ? (
              searchData.map((cardItem: any, index: any) => (
                <AnilistCard key={index} cardItem={cardItem} />
              ))
            ) : (
              <div className="flex justify-center items-center text-center md:h-[65vh]  text-4xl  ">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
