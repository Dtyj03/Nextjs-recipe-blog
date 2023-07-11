import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";
import RecipeCard from "../../../components/RecipeCard";


export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: 'recipe'})

  return{
    props:{
      recipe: res.items
    }
  }
}

export default function RecipePage({recipe}) {
  console.log(recipe)
  return (
    <>
      <Head>
        <title>Recipe Blog | Home</title>
      </Head>

      
      <div className="flex items-center justify-center gap-24 mt-24 text-center flex-col-4">
        {recipe.map(recipe =>(
          <RecipeCard key={recipe.sys.id} recipe={recipe}/>
        ))}
      </div>
    </>
  );
}
