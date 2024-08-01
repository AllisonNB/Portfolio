import { Link } from 'react-scroll';
import imgArray from "../assets/ImgArray";
import { HiArrowCircleDown } from "react-icons/hi";
import './Header.css';


const Header = () => {

    return (
        <>
            <div className='background'>
                {imgArray.map((img, index) => (
                    <div
                        key={index}
                        style={{ background: `url(${img}) no-repeat center/cover` }}
                        className='backgroundImage'
                    />
                ))}
                <h1>Allison Brown</h1>
                <Link
                    className='down'
                    to="about"
                >
                    <HiArrowCircleDown />
                </Link>
            </div>
        </>
    )
}

export default Header;
