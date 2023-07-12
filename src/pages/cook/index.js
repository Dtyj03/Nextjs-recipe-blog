import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";
import FoodCard from "../../../components/FoodCard";


export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const food = await client.getEntries({ content_type:'cookingRecipes'})

  return{
    props:{
     cookingRecipes: food.items
    },
    revalidate:1
  }
}

export default function FoodPage({cookingRecipes}) {
  console.log(cookingRecipes)
  return (
    <>
      <Head>
        <title>food Blog | Home</title>
      </Head>

      
      <div className="grid items-center justify-center grid-cols-4 gap-24 mt-24 text-center">
        {cookingRecipes.map(cookingRecipes =>(
          <FoodCard key={cookingRecipes.sys.id} cookingRecipes={cookingRecipes}/>
        ))}
      </div>
    </>
  );
}
