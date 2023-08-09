
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  // FaFacebookF,
  // FaTwitter,
  // FaYoutube,
  // FaDribble,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi'
import './contact.css'
const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className="section__title">Get In <span>Touch</span></h2>
      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>otro pirobo titulo</h3>

          <p className='contact__description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit in placeat repudiandae ex est laboriosam quasi, at molestiae
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <span className='info__desc'>emial@gmail.com</span>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <span className='info__desc'>+57 3228369024</span>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact