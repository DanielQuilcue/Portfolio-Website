import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import profile from '../../assets/profile.png'
import './home.css'
const Home = () => {
  return (
    <section className='home section grid'>
      <img src={profile} alt='' className="home__img" />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'><span>Daniel Quilcue </span>Web Designer</h1>
          <p className='home__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit in placeat repudiandae ex est laboriosam quasi, at molestiae</p>
          <Link to='/about' className='button'> More about me <span className='button__icon'><FaArrowRight /></span></Link>
        </div>
      </div>
      <div className='color__block'></div>
    </section>
  )
}

export default Home