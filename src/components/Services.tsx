import Service from "./Service"
import WebImage from "./../../public/images/design.png"
import Image from "next/image"
import MobileImage from "./../../public/images/mobile.png"
import MaintenanceImage from "./../../public/images/maintenance.png"
import FrontenImage from "./../../public/images/design.png"
import BackendImage from "./../../public/images/backend.png"
import OthersImage from "./../../public/images/others.png"
import Link from "next/link"

const Services = () => {
  return (
    <div id="services">
      <div className="head"><h2 className="title">Services</h2></div>
      <div className="content">
        <div className="section">
          <h3 className="section-title">My <span>Services</span></h3>
          <div className="services">
            <Service title="Web development" description="I can create any kind of website or web application, from the graphic design to the development of functionalities." image={<Image placeholder="blur" src={WebImage} alt="web development illustration" />} />
            <Service title="Mobile Development" description="I can also create any kind of mobile application, from the graphic design, functionalities development and deployment." image={<Image placeholder="blur" src={MobileImage} alt="Mobile development illustration" />} />
            <Service title="Application maintenance" description="For an application that already exists, I provide maintenance and add new features" image={<Image src={MaintenanceImage} alt="Maintenance illustration" placeholder="blur" />} />
          </div>
        </div>
        <div className="section">
          <h3 className="section-title">My <span>Skills</span></h3>
          <div className="services">
            <Service image={<Image src={FrontenImage} alt="Frontend illustration" placeholder="blur" />} title="Frontend" description="Html, Css, Sass, React, Jquery, Angular, Next Js" />
            <Service image={<Image src={BackendImage} alt="Backend illustration" placeholder="blur" />} title="Backend" description="Php, Node(Express), Nest Js, Laravel, " />
            <Service image={<Image src={OthersImage} alt="Others illustration" placeholder="blur" />} title="Others" description="Flutter(Dart), React Native, Python" />
          </div>
        </div>
        {/* <div className="contact-link"><p>Want my services? Let's discuss <Link href="#contact">here</Link></p></div> */}
      </div>
    </div>
  )
}

export default Services