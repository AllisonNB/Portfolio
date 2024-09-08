import { Link } from "react-scroll";
import './ProjectCard.css';


export default function ProjectCard({ title, image, description, github, live }) {
    return (
        <figure>
            <div className='frame'>
                <img src={image} alt="" />
            </div>
            <figcaption className='cap'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='links'>
                    <a className='link' href={live} target="_blank">Live</a>
                    <a className='link' href={github} target="_blank">Github</a>
                </div>
            </figcaption>
        </figure>
    )
}
