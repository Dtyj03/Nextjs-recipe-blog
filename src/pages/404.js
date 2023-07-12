import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()
  
    useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 5000)
    }, [])
  
    return ( 
        <div className="p-8 mt-24 text-5xl leading-loose text-center text-red-600">
            <h1 className=" text-9xl">Error 404.........</h1>
            <h1>Ooopss! That page cannot be found</h1>
            <p>Go back to the <Link href="/" className="text-green-500 underline underline-offset-4">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;