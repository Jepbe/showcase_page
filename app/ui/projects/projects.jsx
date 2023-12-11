import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { promises as fs } from 'fs';

export default async function projects() {
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const data = JSON.parse(file);

    return (
<div className="min-h-screen py-12 flex items-center justify-center md:flex-row flex-col">
      {data.map((data) => {
        return (
          <div key={data.id} className="py-6 px-4 bg-[#545d68] text-[#ADBAC7] m-5"> 
            <div className="left-0 top-0 text-lg"> 
              {data.title}
            </div>
            <div className="pt-5 max-w-[325px] text-sm">
              {data.content}
            </div>
            <div className="pt-4">
              <Link target="_blank" href={data.GitHub}>
                <button className="border rounded border-[#ADBAC7] hover:bg-[#666f7a] bg- text-sm p-1 font-semibold inline-flex items-center"><FaGithub className="text-sm mr-[0.1rem]"/>Github</button>
              </Link>
            </div>
          </div>
        );
      })}
</div>
    );
}