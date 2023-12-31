import { personalInfo } from '../data/data'
const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className='info__item' key={index}>
            <span className='info__title'>{title}</span>
            <span className='info__desription'>{description}</span>
          </li>
        );
      })}
    </>
  )
}

export default Info