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
                <a href="https://github.com/AllisonNB" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/allisonbrown492" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <CgFileDocument />
                </a>
            </div>
            <p>As a passionate and detail-oriented software developer, I bring a unique blend of skills and experiences from my background in education and healthcare. My journey into web development was sparked by my role at the University of Toronto Scarborough (UTSC), where I utilized Learning Management Systems (LMS) to create engaging and effective learning resources for students. This experience ignited my passion for web development and making creative projects, leading me to pursue further education and training in this field.</p>
        </div>
    )
}
