import React from 'react';
import { Link } from 'react-router-dom';

import { AreaHeader } from './styled';

function Header(){
    return (
        <>
            <AreaHeader>
                <div className="container">
                    <div className="logo">
                        <img src="../../../logo.hollow.JPG"/>
                    </div>

                    <nav>
                        <ul>
                            <li><Link to="/">Login</Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </AreaHeader>
        </>

    );
}

export default Header;