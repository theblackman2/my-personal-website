import { HiLocationMarker } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { AiFillCheckSquare, AiFillMessage } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { AiFillInstagram, AiOutlineLoading3Quarters } from "react-icons/ai"
import Link from 'next/link';
import { BsFillPersonFill } from "react-icons/bs"
import axios, { AxiosError } from "axios"
import Swal from "sweetalert2"
import { useState } from "react"
import { contactFormData } from "@/utils/types"
import { toast, ToastContainer } from 'react-toastify';
import { IoIosSend } from "react-icons/io"
import makeToast from "@/utils/toast"

const Contact = () => {
  const [formData, setFormData] = useState<contactFormData>({
    names: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState<boolean>(false)

  const handleInputChange = (e: any) => {
    const name: string = e.target.name
    const value: string = e.target.value
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (!formData.email || !formData.names || !formData.message) {
      return makeToast("warning", "You must fill all fields")
    }
    setLoading(true)
    try {
      await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_EMAIL_URL,
        data: {
          service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
          template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
          user_id: process.env.NEXT_PUBLIC_EMAIL_USER,
          template_params: formData,
        }
      })
      makeToast("success", "Your message has been sent successfully")
    } catch (error) {
      console.log(error)
      makeToast("error", "Oups... Somethingwent wrong, please try again!!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="contact">
      <div className="head"><h2 className="title">Contact</h2></div>
      <div className="content">
        <div className="personal-infos">
          <h3 className="title">Get in <span>Touch</span></h3>
          <div className="infos">
            <div className="info">
              <HiLocationMarker /><span>Kinshasa, DRC</span>
            </div>
            <div className="info">
              <MdEmail /><span><a href="mailto:paskasonga@gmail.com">paskasonga@gmail.com</a></span>
            </div>
            <div className="info">
              <AiFillCheckSquare /><span>Freelance Available</span>
            </div>
          </div>
          <h3 className="title">Also <span>Available On</span></h3>
          <div className="social-icons">
            <Link target="_blank" href="https://github.com/theblackman2"><BsGithub /></Link>
            <Link href="https://instagram.com/pascallushimba?igshid=YmMyMTA2M2Y=" target="_blank"><AiFillInstagram /></Link>
            <Link href="https://www.linkedin.com/in/pascal-kasonga-310b071ba" target="_blank"><FaLinkedin /></Link>
          </div>
        </div>
        <div className="contact-form">
          <h2 className="title">Contact <span>Form</span></h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <BsFillPersonFill /><input onChange={handleInputChange} placeholder="Full Name" type="text" value={formData.names} name="names" className="form-controll" />
            </div>
            <div className="form-group">
              <MdEmail /><input type="email" onChange={handleInputChange} placeholder="E-mail" value={formData.email} name="email" className="form-controll" />
            </div>
            <div className="form-group">
              <AiFillMessage /><textarea value={formData.message} onChange={handleInputChange} placeholder="Your message here" name="message" cols={30} ></textarea>
            </div>
            <button className="btn" type="submit"> <span className={loading ? "loading" : ""}>{
              loading ? <AiOutlineLoading3Quarters /> : <IoIosSend />
            }</span> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact