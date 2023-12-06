import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export default function Overlayiccons() {
    return (
        <div className="absolute left-3 bottom-3">
            <Link href="https://github.com/Jepbe">
                <button className="w-10 h-10">
                    <FaGithubSquare className="text-[2.2rem]"/>
                </button>
            </Link>
            <Link href="https://www.linkedin.com/in/jeppe-b%C3%B8geskov/">
                <button className="w-10 h-10">
                    <FaLinkedin className="text-[2.2rem]"/>
                </button>
            </Link>
        </div>
    );
}