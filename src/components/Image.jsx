import Logo from '../assets/Abhishek.jpeg'
import Linkedin from "../assets/linkedin.png"
import Instagram from "../assets/instagram.png"
import Github from "../assets/github.png"
// import Design from './Design.jsx'
function Image() {
  return (
    <div className='imageContainer'>
      {/* <Design /> */}
      <div class="image">
        <img src={Logo} alt="image logo" />
      </div>
      <div class="info">
        <h2 class="info-name">Abhishek Verma</h2>
        <p class="designation-name">Software Engineer</p>
        <p class="company-name">ABC Company</p>
      </div>
      <div class="socialInfo">
        <span><a href="https://www.linkedin.com/in/1-abhishek-verma/"><img src={Linkedin} alt="" className='linkedin' /></a></span>
        <span><a href="https://www.instagram.com/abhi_verma_630/"><img src={Instagram} alt="" className='instagram' /></a></span>
        <span><a href="https://github.com/Pseudo-iitian"><img src={Github} alt="" className='github' /></a></span>
      </div>
    </div>
  )
}

export default Image;