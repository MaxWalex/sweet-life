import React from 'react'
import {Link} from 'react-router-dom'

// images
import star from '../../assets/images/stars.png'
import keks1 from '../../assets/images/footer-keks1.png'
import keks2 from '../../assets/images/footer-keks2.png'
import keks3 from '../../assets/images/footer-keks3.png'
import insta from '../../assets/images/insta.png'
import twitter from '../../assets/images/twitter.png'


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_top-bg">
          <img src={star} alt="" />
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 353.684 336.37" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.684 336.37" role="presentation" aria-hidden="true">
            <path d="M176.842 0l54.634 110.714 122.208 17.77-88.432 86.194 20.877 121.692-109.287-57.449L67.535 336.37l20.876-121.692L0 128.484l122.189-17.77L176.842 0z"></path>
          </svg>
          <img src={star} alt="" />
        </div>

        <div className="footer_inner">
          <div className="footer_items">

            <div className="footer_item">
              <img src={keks1} alt="" />
              <h4>Смачні Новини</h4>
              <div className="footer_item-bot">
                <Link to="#"><img src={insta} alt="" /></Link>
                <Link to="#"><img src={twitter} alt="" /></Link>
              </div>
            </div>

            <div className="footer_item">
              <img src={keks2} alt="" />
              <h4>Онлайн-замовлення</h4>
              <div className="footer_item-bot">
                <Link to="#">Замовити</Link>
              </div>
            </div>

            <div className="footer_item">
              <img src={keks3} alt="" />
              <h4>Чекаємо у гості</h4>
              <div className="footer_item-bot">
                <Link to="#">Взнати адресу</Link>
              </div>
            </div>

          </div>
        </div>
        
        <div className="footer_bot-bg">
        <img src={star} alt="" />
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 353.684 336.37" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.684 336.37" role="presentation" aria-hidden="true">
            <path d="M176.842 0l54.634 110.714 122.208 17.77-88.432 86.194 20.877 121.692-109.287-57.449L67.535 336.37l20.876-121.692L0 128.484l122.189-17.77L176.842 0z"></path>
          </svg>  
          <img src={star} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer