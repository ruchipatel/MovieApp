import React from 'react'
import profile from '../assets/img/profile.jpg'
const NavBar = () => {
  return (
     <div className="navbar">
        <div className="navbar-container">
            <div className="logo-container">
                <h1 className="logo">flakes</h1>
            </div>
            <div className="menu-container">
                <ul className="menu-list">
                    <li className="menu-list-item active">Home</li>
                    <li className="menu-list-item">Movies</li>
                    <li className="menu-list-item">Series</li>
                    <li className="menu-list-item">Popular</li>
                    <li className="menu-list-item">Trends</li>

                </ul>
            </div>
            <div className="profile-container">
                <img className="profile-picture" src={profile} alt="/"/>
                <div className="profile-text-container">
                    <span className="profile-text">Profile</span>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar