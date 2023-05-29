import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav>
                 <ul>
                      <li>
                          <Link to="/">Movies</Link>
                      </li>
                      <li>
                          <Link to="/add">Add Movie</Link>
                      </li>
                </ul>
            </nav>        
        </>
    );
}

export default Header;
