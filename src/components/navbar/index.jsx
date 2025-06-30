import booksIcon from "../../assets/images/books.png"
import youtubeIcon from "../../assets/images/YouTube.png"
import testIcon from "../../assets/images/TestPassed.png"
import glossaryIcon from "../../assets/images/Glossary.png"
import brainIcon from "../../assets/images/Brain.png"
import "./style.css"
import {Link} from "react-router-dom";

export const Navbar = () => {
    return <div className="navbar">
        <ul>
            <li><Link to="/books">Books <img src={booksIcon} alt="books"/></Link></li>
            <li><Link to="/youtube">YouTube channels <img src={youtubeIcon} alt="youtube"/></Link></li>
            <li><Link to="/test">Tests <img src={testIcon} alt="test"/></Link></li>
            <li><Link to="/glossary">Dictionaries <img src={glossaryIcon} alt="glossary"/></Link></li>
            <li><Link to="/brain">Phrase of the Day <img src={brainIcon} alt="brain"/></Link></li>
        </ul>
    </div>
}