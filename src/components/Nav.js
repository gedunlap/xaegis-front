import React from 'react';
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return <header>
        <div className="row twelve columns">
            <nav className="navbar">
                <Link to="/"><img src="https://i.imgur.com/Nuqv0mY.png" alt="XAegis" className="navlogo" /></Link>
                <Link to="/" style={{textDecoration: "none"}}><div>Home</div></Link>
                <Link to="/auth/signup" style={{textDecoration: "none"}}><div>Signup</div></Link>
                <Link to="/auth/login" style={{textDecoration: "none"}}><div>Login</div></Link>
            </nav>
        </div>
    </header>
}

export default Nav