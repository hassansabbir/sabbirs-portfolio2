import Link from "next/link";
import logo from "../../../../Assets/sabbir Logo.png";
import Image from "next/image";

const Navbar = () => {
  const navOptions = (
    <>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact Me</li>
      <li>Blogs</li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link href={"/"}>
          {" "}
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
