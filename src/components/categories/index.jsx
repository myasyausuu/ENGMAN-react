import './style.css';
import {Link} from 'react-router-dom';

export const Categories = ()=>{
    return <div className="categories">
        <h3>Categories</h3>
        <ul>
            <li><Link to="/books">Books</Link></li>
            <li><a href="#">Youtube Channels</a></li>
            <li><a href="#">Tests</a></li>
            <li><a href="#">Dictionaries</a></li>
            <li><a href="#">Phrase of the Day</a></li>
        </ul>
    </div>
}