import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Skeleton from "../../../components/Skeleton";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "recipe" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

  export async function getStaticProps({ params }) {
    const {items} = await client.getEntries({
      content_type: "recipe",
      "fields.slug": params.slug,
  
    });

    if (!items.length){
      return {
        redirect:{
          destination: "/recipes",
          permanent: false
        }
      }
    }

    return {
      props: { recipe: items[0] },
      revalidate: 1
    };
  }
 

  export default function RecipeDetails({recipe}) {
    if (!recipe) return <Skeleton />
          
    const { featuredImage, title, ingredients ,cookingTime, method} = recipe.fields

    return (
      <>
      <div>
        <Link href='/blog'><button className="px-6 py-2 m-0 mt-8 ml-8 font-bold text-black bg-orange-400 rounded-full hover:text-neutral-500 hover:bg-orange-300">Back</button></Link>
      </div>
      <div className="flex flex-col items-center leading-8 text-black"> 
        <div className="flex flex-col items-center">
          <Image 
          src ={ 'https:' + featuredImage.fields.file.url} alt="Description" width={600} height={100}
          // width={featuredImage.fields.file.details.image.width}
          // height={featuredImage.fields.file.details.image.height}
          className="mt-2 rounded-2xl -rotate-2"/>
          <h1 className="relative inline-block p-8 m-auto -mt-12 text-4xl font-bold bg-orange-400 rotate-2"> {title}</h1>
        </div>

        <div className=" text-neutral-700">
          <p>(Approx {cookingTime} minutes to cook) </p>
          <h2 className="mb-4 text-3xl underline underline-offset-8">Ingredients</h2>
          {ingredients.map((ing, index) => (
  <ol key={index} >
    <li className="before:content-['✔️'] mt-4">{ing}</li>
  </ol>
))}

        </div>

          <div className="flex flex-col items-center mt-12 method">
            <h3 className="text-2xl font-semibold">Instructions:</h3>
            <div className="w-3/4 ">{documentToReactComponents(method)}</div>
          </div>
      </div>
    </>
       );
      }
    

 
