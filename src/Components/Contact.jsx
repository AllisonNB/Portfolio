import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Contact.css';


export default function Contact() {
    return (
        <div className='contact'>
            <h1>Connect with Me</h1>
            <p>Thanks for stopping by! Feel free to reach out via email or another social below.</p>
            <div className='icons'>
                <a href="mailto: allison.brown@hotmail.com">
                    <MdOutlineEmail />
                </a>
                <a href="https://github.com/AllisonNB">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/allison-brown-49210889">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}
