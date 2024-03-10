import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const goToProfile= () =>{
    console.log('going');
    navigate("/profile")
  }

  
  const handleButtonClick = () => {
    alert('Button clicked!')
  }
  return (
    <>
      <div className='navbar'>
        <span className="logo">QViq Internship</span>
        <div className="user">
          <img src={currentUser.photoURL} alt="" onClick={goToProfile} />
          <span>{currentUser.displayName}</span>
          <button onClick={()=>signOut(auth)}>logout</button>
        </div>
      </div>
      <div class="home-content">
        <div class="container">
          <div class="content">
            <h1>Join the Conversation on Our Social Media Platform</h1>
            <p>
              Our platform is a space where you can connect with friends, family, and like-minded individuals. Share your thoughts, ideas, and experiences with our community.
            </p>
            <img
              src="https://picsum.photos/id/1015/1000/400"
              alt="Interactive"
              class="interactive-image"
            />
            <button class="interactive-button" onClick={handleButtonClick}>
              Join the Conversation
            </button>
            <p>
              Our platform is a place where you can discover new content and perspectives. From politics to entertainment, there's something for everyone.
            </p>
            <img
              src="https://picsum.photos/id/1016/1000/400"
              alt="Interactive"
              class="interactive-image"
            />
            <button class="interactive-button" onClick={handleButtonClick}>
              Explore New Content
            </button>
            <p>
              Our platform is also a great place to learn new things. Follow experts in various fields and expand your knowledge.
            </p>
            <img
              src="https://picsum.photos/id/1019/1000/400"
              alt="Interactive"
              class="interactive-image"
            />
            <button class="interactive-button" onClick={handleButtonClick}>
              Learn Something New
            </button>

            <p>
              Our platform is also a great place to learn new things. Follow experts in various fields and expand your knowledge.
            </p>
            <img
              src="https://picsum.photos/id/1020/1000/400"
              alt="Interactive"
              class="interactive-image"
            />
            <button class="interactive-button" onClick={handleButtonClick}>
              Learn Something New
            </button>

            <p>
              Our platform is also a great place to learn new things. Follow experts in various fields and expand your knowledge.
            </p>
            <img
              src="https://picsum.photos/id/1021/1000/400"
              alt="Interactive"
              class="interactive-image"
            />
            <button class="interactive-button" onClick={handleButtonClick}>
              Learn Something New
            </button>

            <p>
              Our platform is also a great place to learn new things. Follow experts in various fields and expand your knowledge.
            </p>
            <img
              src="https://picsum.photos/id/1022/1000/400"
              alt="Interactive"
              class="interactive-image"
            />
            <button class="interactive-button" onClick={handleButtonClick}>
              Learn Something New
            </button>



            <hr />
            {/* for scroll bar functionality */}

            <p>Explore some  of the following sceneries and click on "Learn something new" to see how they are implemented:</p>

            <div className="scroll-page" id='10'>
              <div className="image-scroll-wrapper">
                
                <img
                  src="https://picsum.photos/id/1036/1000/400" alt='1'
                />
                <img
                  src="https://picsum.photos/id/1037/1000/400" alt='2'
                />
                <img
                  src="https://picsum.photos/id/1038/1000/400" alt='3'
                />
                <img
                  src="https://picsum.photos/id/1039/1000/400" alt='3'
                />
                <img
                  src="https://picsum.photos/id/1040/1000/400" alt='3'
                />
                <img
                  src="https://picsum.photos/id/1041/1000/400" alt='3'
                />
                <img
                  src="https://picsum.photos/id/1042/1000/400" alt='3'
                />
                <img
                  src="https://picsum.photos/id/1035/1000/400" alt='3'
                />

              </div>

              <button class="interactive-button" onClick={handleButtonClick}>
                Try this now
              </button>
            </div>
          </div>
        </div>
      </div>


      <footer class="footer">
        <p class="footer-text">
          &copy; 2023 My Social Media Platform. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default Navbar