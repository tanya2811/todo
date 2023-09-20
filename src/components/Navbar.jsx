import React from 'react'
import { user, useAuth0 } from "@auth0/auth0-react";
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
    const { logout,isAuthenticated, loginWithRedirect ,user} = useAuth0();

  return (
    <>


    <div className="navbar">
        <ul>
            <li ><Link to='/' className='Link'>Home</Link> </li>
            <li><Link to='/weather' className='Link'>Weather App</Link></li>
            <li><Link to='/calculator' className='Link'>Calculator</Link></li>
            <li>{
                isAuthenticated && <p className='p'>
                <p>Welcome</p>
                    {user.name}
                </p>
            }

            </li>
            {
                isAuthenticated ? <li>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
                </li>
                :
                <li><button onClick={() => loginWithRedirect()}>Log In / Register</button></li>
            }
        </ul>
    </div>
    </>
  )
}

export default Navbar