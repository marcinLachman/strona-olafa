import { Link, useLoaderData } from "react-router-dom";

import type { Crests } from "../../models/CrestModels";

interface LoaderCrests {
  crests: Crests[];
}

export const Home = () => {
  const { crests } = useLoaderData() as LoaderCrests;
  console.log(crests);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 m-4">
      {crests.map((crest: Crests) => (
        <Link
          to={`${crest.crestName}/${crest.id}`}
          className="overflow-hidden bg-transparent cursor-pointer rounded-xl relative group"
          key={crest.id}
        >
          <div className="rounded-xl w-full z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute -bottom-2 pt-30 text-white from-black/100 to-transparent bg-gradient-to-t flex items-end">
            <div>
              <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold text-white">{crest.crestName}</div>
              </div>
            </div>
          </div>

          <img
            alt=""
            className="object-cover max-w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            // src={`http://heraldry.design/node/${crest.imagesSmall}`}
            src={`http://localhost:8080/static/${crest.imagesSmall}`}
            // src="http://localhost:8080/static/imagesSmall/1711468578449.jpg"
          />
        </Link>
      ))}
    </div>
  );
};
