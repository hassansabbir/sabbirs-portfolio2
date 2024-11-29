import Image from "next/image";
import profileImage from "../../../../Assets/sabbirProfile.png";
import Link from "next/link";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex items-center px-10 mt-2 h-[700px] border-y-2 rounded-2xl justify-between">
      <div>
        <h1 className="text-3xl">
          Hii There! <span className="text-5xl">👋</span>
        </h1>
        <h1 className="text-3xl">
          I am{" "}
          <span className="text-4xl text-[#7a04ad] font-bold">
            Mahmud Hasan Sabbir
          </span>
        </h1>
        <h1 className="text-5xl">Junior Web Developer</h1>
        <h1 className="w-4/6 my-5 text-gray-700">
          Passionate about crafting responsive, user-friendly web experiences
          with a focus on clean design and modern technologies.
        </h1>
        <div className="h-24 flex items-center gap-5">
          <Link href={""}>
            <FaGithub className="size-16 border border-[#7a04ad] bg-violet-200 rounded-2xl shadow-lg hover:shadow-[#7a04ad] hover:mb-4 p-2" />
          </Link>
          <Link href={""}>
            <FaLinkedin className="size-16 border border-[#7a04ad] bg-violet-200 rounded-2xl shadow-lg hover:shadow-[#7a04ad] hover:mb-4 p-2" />
          </Link>
          <Link href={""}>
            <FaFacebook className="size-16 border border-[#7a04ad] bg-violet-200 rounded-2xl shadow-lg hover:shadow-[#7a04ad] hover:mb-4 p-2" />
          </Link>
        </div>
        <div className="my-5">
          <a href="sabbirsResume.pdf" download="sabbirsResume.pdf">
            <button className="group relative">
              <div
                className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
        bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] 
         bg-transparent px-6 font-medium dark:text-white text-black  transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 gap-1"
              >
                Resume <FaFileDownload />
              </div>
              <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3  group-hover:[box-shadow:5px_5px_#394481,10px_10px_#5766be]"></div>
            </button>
          </a>
        </div>
      </div>
      <div>
        <Image
          className=" object-cover"
          src={profileImage}
          height={400}
          width={400}
          alt="profileImage"
        />
      </div>
    </div>
  );
};

export default Banner;
