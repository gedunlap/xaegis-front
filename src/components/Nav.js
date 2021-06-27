import React from 'react';
import {Link} from 'react-router-dom'
import {useAppState} from "../AppState"

const Nav = (props) => {

    const {state, dispatch} = useAppState()

    return <header>
        <div className="row twelve columns">
            <nav className="navbar">
                <Link to="/"><img src="https://i.imgur.com/Nuqv0mY.png" alt="XAegis" className="navlogo" /></Link>
                <Link to="/" style={{textDecoration: "none"}}><div>Home</div></Link>
                <Link to="/posts" style={{textDecoration: "none"}}><div>Gallery</div></Link>
                {!state.token ? (<><Link to="/auth/signup" style={{textDecoration: "none"}}><div>Signup</div></Link>
                <Link to="/auth/login" style={{textDecoration: "none"}}><div>Login</div></Link></>) : null}
                {state.token ? <div onClick={() => {
                    dispatch({type: "logout"})
                    props.history.push("/")
                    }} 
                    style={{color: "red"}}>
                    Logout
                </div> : null}
            </nav>
        </div>
    </header>
}

export default Nav