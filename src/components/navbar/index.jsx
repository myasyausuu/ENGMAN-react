import booksIcon from "../../assets/images/books.png"
import youtubeIcon from "../../assets/images/YouTube.png"
import testIcon from "../../assets/images/TestPassed.png"
import glossaryIcon from "../../assets/images/Glossary.png"
import brainIcon from "../../assets/images/Brain.png"
import "./style.css"
import {Link} from "react-router-dom";

//тут мы создали массив с объектами внутри
const links = [
    {image: booksIcon, link: "books", text: "Books"},
    {image: youtubeIcon, link: "youtube", text: "YouTube channels"},
    {image: testIcon, link: "test", text: "Tests"},
    {image: glossaryIcon, link: "glossary", text: "Dictionary"},
    {image: brainIcon, link: "brain", text: "Phrase of the Day"},
]
// тут треш, какой-то мэппинг который создает переменную автоматически
export const Navbar = () => {
    return <div className="navbar">
        <ul>
            {links.map((link)=>{
                return <li><Link to={"/"+link.link}>{link.text} <img src={link.image} alt={link.link}/></Link></li>
            })}
        </ul>
    </div>
}