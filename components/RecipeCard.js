import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  const { title, cookingTime, slug, thumbnail } = recipe.fields;

  return (
    <div className="transform card -rotate-1">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt="thumbnail pictures"
          width={300}
          height={400}
          className="object-fill w-64 h-64 rounded-lg"
        />
      </div>
      <div className="relative m-auto -mt-10 -mr-6 bg-orange-400 rounded-md shadow-sm content shadow-slate-950">
        {/*content */}
        <div className="p-4 text-black -pb-4 ">
          {/*info */}
          <h2 className="text-3xl ">{title}</h2>
          <p className="text-gray-600">Estimated cooking time ( {cookingTime} minutes )</p>
        </div>

        <div className="flex justify-end ">
          <div className="px-6 py-2 text-blue-600 underline bg-black rounded-md hover:text-slate-200">
            <Link href={"/recipes/" + slug}>Cook this</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }*/
