import './About.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


export default function About() {
    return (
        <div className='layout'>
            <h1>About Me</h1>
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
                <a href="">
                    <CgFileDocument />
                </a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error expedita beatae deserunt voluptatibus pariatur sint doloremque quia, soluta rerum dolorem culpa eum officia veniam ratione. Facere rerum numquam tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nulla nemo porro est quibusdam minima. Modi, suscipit, iusto repellendus quia blanditiis omnis rem dolorem ut ea fuga nobis exercitationem. Libero!</p>
        </div>
    )
}
