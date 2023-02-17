import { navBarProps } from "@/utils/types";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const NavBar = ({ showLinks, setShowLinks }: navBarProps) => {
  const router: NextRouter = useRouter();
  const [activeLink, setActiveLink] = useState<string>("resume");

  const toggleLinks = () => {
    setShowLinks((prev: boolean) => !prev)
  }

  useEffect(() => {
    const currentSection: string = router.asPath.substring(2);
    setActiveLink(currentSection || "resume")
    setShowLinks(false);
  }, [router, setShowLinks]);

  return (
    <div id="nav-bar">
      <div className="content">
        <span className="logo">
          <Link href="#resume">The <span>Black Man</span></Link>
        </span>
        <nav className={`links ${showLinks ? "show" : "hide"}`}>
          <Link className={activeLink == "resume" ? "active" : ""} href="#resume">Resume</Link>
          <Link className={activeLink == "services" ? "active" : ""} href="#services">Services</Link>
          <Link className={activeLink == "portfolio" ? "active" : ""} href="#portfolio">Portfolio</Link>
          <Link className={activeLink == "contact" ? "active" : ""} href="#contact">Contact</Link>
        </nav>
      </div>
      <span onClick={toggleLinks} className="icon">{
        showLinks ? <AiOutlineClose /> : <AiOutlineMenu />
      }</span>
    </div>
  )
}

export default NavBar;