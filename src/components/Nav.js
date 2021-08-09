import React, { useEffect, useState } from 'react'
import "../css/nav.css"

function Nav() {

    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 50){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }


    useEffect(() => {

        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }

    }, []);

    return (
        <div className ={`nav ${show && "nav-black"}`}>
            <div className ="nav-content">
                <img className ="nav-logo" src="http://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo"/>
                <img className = "nav-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar"/>
            </div>
        </div>
    )
}

export default Nav