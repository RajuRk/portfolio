import React from 'react'
import Typical from 'react-typical'
import profilePhoto from "./images/profile.jpeg";

function Portfolio() {
  return (
    <div className='profile-container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 top-section'>
            <div className='portfile-parent'>
            <div className='portfile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href="#">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-google-plus-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-youtube-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Rajkumar</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <div className="primary-text">
                        {" "}
                        <h1>
                            <Typical 
                              loop={Infinity}
                              steps={[
                                  "Ethusiastic Dev 💻",
                                  1500,
                                  "Full Stack Developer 😎",
                                  1500,
                                  "MERN Dev 📱",
                                  1500,
                                  "React 🌐",
                                  1500,
                                  "Cross Platform Dev 🔴",
                                  1500,
                              ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                        Knack of building applications with front and back end operations.
                        </span>
                    </div>
                    <div className="profile-options">
                       <button className="btn primary-btn">
                          {""}
                          Hire Me{" "}
                        </button>
                        <a href="#" download="">
                          <button className="btn highlighted-btn">Get Resume</button> 
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                        
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className="col-lg-4 col-md-4 profile-section">
                <div className="profile-photo">
                    <img src={profilePhoto} alt="Profile Photo"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio