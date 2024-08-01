import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul className='navlist'>
                <li className='link'>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={false}
                    >
                        Home
                    </Link>
                </li>
                <li className='link'>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={false}
                    >
                        About
                    </Link>
                </li>
                <li className='link'>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={false}
                    >
                        Projects
                    </Link>
                </li>
                <li className='link'>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={false}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
