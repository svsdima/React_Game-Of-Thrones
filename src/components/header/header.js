import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header_block">
            <div className="header_title">
                <a href="#">
                    База данных Игры Престолов
                </a>
            </div>
            <div className="header_links">
                <li>
                    <a href="#">Персонажи</a>
                </li>
                <li>
                    <a href="#">Дома</a>
                </li>
                <li>
                    <a href="#">Книги</a>
                </li>
            </div>
        </div>
    );
}

export default Header;