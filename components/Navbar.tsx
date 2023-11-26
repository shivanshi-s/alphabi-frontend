import Link from "next/link";
import Image from "next/image";
import acc_logo from "../public/acc_logo.png"
import search from "../public/download.png"


export default function Navbar() {
    return (
       <div className="flex">
         <nav className="shadow w-full bg-black m-0 p-0 text-white flex flex-row justify-around">
            <div className="flex flex-row p-4 m-4">
                {/* Logo */}
                <div className="flex cursor-pointer">
                    <Image width={150} height={150} src={acc_logo} alt="logo"></Image>
                </div>
            </div>

            <div className=" flex justify-center self-center items-center">
                <ul className="flex flex-row p-4 m-4">
                    <li className="p-4 m-4">
                        <Link href="/">Insights</Link>
                    </li>
                    <li className="p-4 m-4">
                        <Link href="/">Services</Link>
                    </li>
                    <li className="p-4 m-4">
                        <Link href="/">Industries</Link>
                    </li>
                    <li className="p-4 m-4">
                        <Link href="/">Careers</Link>
                    </li>
                    <li className="p-4 m-4">
                        <Link href="/">About</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row">
                <Image width={60} height={40} src={search} className="p-4 m-10" alt="search"></Image>
            </div>
         </nav>
       </div>
    );
}
