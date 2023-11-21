'use client'

import { useRouter } from "next/navigation";

export default function navbar(navbar) {
const router = useRouter();
    return(
        <nav className="w-screen h-20 shadow-md bg-white">
            <div className="w-screen flex justify-center items-center h-20">
                <ul className="flex flex-row gap-5">
                    <li onClick={() => router.push('/about')}>{navbar.text1}</li>
                    <li>{navbar.text2}</li>
                    <li>{navbar.text3}</li>
                    <li>{navbar.text4}</li>
                    <li>{navbar.text5}</li>
                </ul>
            </div>
        </nav>
    );
}