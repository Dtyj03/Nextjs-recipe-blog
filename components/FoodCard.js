import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function FoodCard({ cookingRecipes }) {
  const { title, cookingTime, slug, thumbnail } = cookingRecipes.fields;

  return (
    <div className="transform card -rotate-1">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt="thumbnail of the image"
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
            <Link href={"/food/" + slug}>Cook this</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
