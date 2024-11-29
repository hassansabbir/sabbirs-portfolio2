import Banner from "./ui/HomePage/Banner/Banner";
import Navbar from "./ui/Shared/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
