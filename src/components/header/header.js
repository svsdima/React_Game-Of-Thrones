import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header_block">
            <div className="header_title">
                <Link to="/">
                    База данных Игры Престолов
                </Link>
            </div>
            <div className="header_links">
                <li>
                    <Link to="/characters/">Персонажи</Link>
                </li>
                <li>
                    <Link to="/houses/">Дома</Link>
                </li>
                <li>
                    <Link to="/books/">Книги</Link>
                </li>
            </div>
        </div>
    );
}

export default Header;