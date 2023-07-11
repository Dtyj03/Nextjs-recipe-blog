import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
    <nav>
        <div>
            <Link href="/">
            <Image src="/guybakijng.png" alt="Description" width={100} height={100} className="p-2 ml-12 -mb-12 "/>
            </Link>
         </div>
         <div className="flex justify-end p-2 font-mono text-2xl border-b-2 border-black border-solid ">
        <Link href="/" className="ml-4 font-bold text-black hover:text-orange-400" >Home</Link>
        <Link href="/about"className="ml-12 font-bold text-black hover:text-orange-400" >About</Link>
        <Link href="/blog/chefs" className="ml-12 mr-12 font-bold text-black hover:text-orange-400">Chefs</Link>
        <div className="text-xl"> 
            <input type="text" placeholder="Search" class="px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-orange-400 focus:border-orange-400 flex-1" />
            <button class="px-2 py-1 bg-orange-400 text-black rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500">Search</button>
</div>
        </div>
    </nav>
     );
}
 
export default Navbar;