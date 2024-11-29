import Image from "next/image";
import profileImage from "../../../../Assets/sabbirProfile.png";

const Banner = () => {
  return (
    <div className="flex items-center h-[400px] border justify-between">
      <div>
        <h1 className="text-4xl">
          Hii There! <span className="text-5xl">👋</span>
        </h1>
        <h1 className="text-5xl">
          <span className="text-4xl">I am</span> Mahmud Hasan Sabbir
        </h1>
      </div>
      <div>
        <Image src={profileImage} height={100} width={100} alt="profileImage" />
      </div>
    </div>
  );
};

export default Banner;
