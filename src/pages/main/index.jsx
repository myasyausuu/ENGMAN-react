import "./style.css"
import openBookIcon from "../../assets/images/open-book.png"

export const Main = () => {
    return <div className="main-content">
        <div className="container">
            <h2>Start your way to success with us!</h2>
            <p>Here you can find useful resources such as books, websites, tests and many others</p>
            <button>Test your knowledge</button>
        </div>
        <img className="book" src={openBookIcon} alt="Book"/>
    </div>

}
