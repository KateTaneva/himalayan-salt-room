import { Link } from 'react-router-dom';
import './BookSaltRoom.css';

const BookSaltRoom = () => {
    return (
        <div className='book-salt-room-div'>
            <h1>Запазване на час</h1>
            <section className="book-salt-room-wrapper">

                <Link to="/book-room-for-adults" className="book-adults-room">
                    <ul>
                        <li><span>Възрастни</span></li>
                        <li><img src='https://cdn0.iconfinder.com/data/icons/man-actions/234/mother-son-growing-old-together-007-512.png' /></li>
                    </ul>
                </Link>
                <Link to="/book-room-for-children" className='book-childrens-room'>
                    <ul>
                    <li><span>Деца</span></li>
                        <li><img src="https://static.thenounproject.com/png/11573-200.png" /></li>
                    </ul>

                </Link>
            </section>
        </div>
    )

}
export default BookSaltRoom;