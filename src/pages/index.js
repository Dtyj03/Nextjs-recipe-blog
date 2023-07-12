import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";

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
    },
    revalidate: 1
  }
}



export default function Home({recipe}) {
  console.log(recipe)
  
  return (
    <>
      <Head>
        <title>Recipe Blog | Home</title>
      </Head>
      <div>
        <div className="flex flex-col items-center justify-center mt-24">
        <Image src="/guybakijng.png" alt="Description of the image" width={128} height={96} className="p-4 -mb-12 " />
          <h1 className="mt-24 text-5xl font-bold text-center text-black hover:text-orange-400">
            {" "}
            Hello, Welcome to my recipe blog
          </h1>
          {/* <p className="box-content flex content-center w-3/4 p-6 text-xl text-center border-4 h-30">
            All the recipes here are homemade .
            Enjoy
          </p> */}
          <div className="grid grid-cols-2 ">
          <Link href="/blog">
            <button class="  mr-6 mt-24 bg-orange-400 hover:bg-blue-600 text-black font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-blue-800 rounded">
              Baking
            </button>
          </Link>

          <Link href="/cook">
            <button class=" ml-6 mt-24 bg-orange-400 hover:bg-blue-600 text-black font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-blue-800 rounded">
              Cooking
            </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
