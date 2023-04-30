import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    icon: <FaGithub color="#cbd5e0"/>,
    link: "https://github.com/shivam-os",
  },
  {
    icon: <FaLinkedinIn color="#cbd5e0"/>,
    link: "https://linkedin.com/shivam",
  },
  {
    icon: <FaPhoneAlt color="#cbd5e0"/>,
    link: "tel:+919999999999",
  },
  {
    icon: <HiOutlineMail color="#cbd5e0"/>,
    link: "mailto:shivam@gmail.com",
  },
];

export default function Contact() {
  return (
    <div className="container d-section" id="contact">
      <div className="">
        <div className="second-font s-title">04. Contact Me</div>
        <h2 className="bold d-gray">Get In Touch</h2>
        <p>
          I'm currently looking for opportunities actively. So, my inbox is open
          at the moment.
          <br /> If you have any question or just want to say hi, send me a
          mail. I'll try my best to get back to you!
        </p>
        <div className="social-box">
          {socialLinks.map((item, index) => (
            <div className="social-icon">
              <a href={item.link}>{item.icon}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
