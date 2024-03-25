import { Link } from "react-router-dom";

export default function AnilistCard({ cardItem }: any) {
  return (
    <main className=" border border-cyan-500 p-4 rounded-md hover:scale-95 duration-300 ">
      <div>
        <h1 className=" text-2xl font-semibold uppercase">
          {cardItem.title.english || "No Title"}
        </h1>
        <div className=" py-2 flex gap-2 text-[18px]">
          <h2 className=" font-bold"> NLan: </h2>
          <p>{cardItem.title.native}</p>
        </div>

        <div className="mb-5">
          <p>{cardItem.description.substring(0, 300)}...</p>
        </div>

        <div className=" mt-8 mb-4 ">
          <Link
            className=" px-6 py-4 bg-cyan-500 rounded-md text-white "
            to={cardItem?.siteUrl}
          >
            View More
          </Link>
        </div>
      </div>
    </main>
  );
}
