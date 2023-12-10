import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function projects() {
    return (
<div class="min-h-screen py-12 flex items-center justify-center md:flex-row flex-col">
      
        {/* box 1 */}
      <div className="py-6 px-4 bg-[#545d68] text-[#ADBAC7] m-5"> 
        {/* Header text */}
        <div className="left-0 top-0 text-lg"> 
        arduino_I2C_LCD
        </div>
        {/* About text */}
        <div className="pt-5 max-w-[325px] text-sm">
          This is a Arduino project. The project was about learning how the arduino I2C LCD display works. We also conected a Ultrasonic distance sensor and displayed its output on the lcd screen 
        </div>
        {/* Buttons */}
        <div className="pt-4">
        <Link target="_blank" href="https://github.com/Jepbe/HTX-repo/blob/main/robottek/arduino_I2C_LCD/HelloWorld/HelloWorld.ino">
          <button className="border rounded border-[#ADBAC7] hover:bg-[#666f7a] bg- text-sm p-1 font-semibold inline-flex items-center"><FaGithub className="text-sm mr-[0.1rem]"/>Github</button>
        </Link>
        </div>
      </div>

      {/* box 2 */}
      <div className="py-6 px-4 bg-[#545d68] text-[#ADBAC7] m-5"> 
      {/* Header text */}
      <div className="left-0 top-0 text-lg"> 
      arduino_I2C_LCD
      </div>
      {/* About text */}
      <div className="pt-5 max-w-[325px] text-sm">
        This is a Arduino project. The project was about learning how the arduino I2C LCD display works. We also conected a Ultrasonic distance sensor and displayed its output on the lcd screen 
      </div>
      {/* Buttons */}
      <div className="pt-4">
      <Link target="_blank" href="https://github.com/Jepbe/HTX-repo/blob/main/robottek/arduino_I2C_LCD/HelloWorld/HelloWorld.ino">
        <button className="border rounded border-[#ADBAC7] hover:bg-[#666f7a] bg- text-sm p-1 font-semibold inline-flex items-center"><FaGithub className="text-sm mr-[0.1rem]"/>Github</button>
      </Link>
      </div>
    </div>

</div>
    );
}