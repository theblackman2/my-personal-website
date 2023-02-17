import Image from "next/image"
import AvatarImage from "./../../public/images/avatar.png"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import Link from 'next/link';



const Resume = () => {
  return (
    <div id="resume">
      <div className="top">
        <div className="avatar">
          <Image src={AvatarImage} alt="Avatart" />
        </div>
        <div className="personal-infos">
          <h2 className="name">Pascal Kasonga</h2>
          <h4 className="title">Web developer</h4>
          <div className="social-links">
            {/* <span className="social-link"><FaTwitter /></span> */}
            <span className="social-link">
              <Link target="_blank" href="https://github.com/theblackman2"><BsGithub /></Link>
            </span>
            <span className="social-link">
              <Link href="https://instagram.com/pascallushimba?igshid=YmMyMTA2M2Y=" target="_blank"><AiFillInstagram /></Link>
            </span>
            <span className="social-link">
              <Link href="https://www.linkedin.com/in/pascal-kasonga-310b071ba" target="_blank"><FaLinkedin /></Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2 className="title">
            About <span>Me</span>
          </h2>
          <p className="presentation">Hello! I'm Pascal Kasonga, an enthusiastic Congolese web and mobile developer. I like big challenges and learning new things, I'm always open to collaboration as a freelancer.</p>
          <button className="download-resume">Download Resume</button>
        </div>
        <div className="right">
          <div className="infos">
            <span className="info">Residence</span>
            <span className="info">e-mail</span>
            <span className="info">Freelance</span>
          </div>
          <div className="values">
            <span className="value">DRC, Kinshasa</span>
            <span className="value"><a href="mailto:paskasonga@gmail.com">paskasonga@gmail.com</a></span>
            <span className="value">Available</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume