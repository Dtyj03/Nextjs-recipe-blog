import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="text-5xl text-center text-red-600">
            <h1>Ooopsie........</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/" className="text-green-500 underline">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound ;