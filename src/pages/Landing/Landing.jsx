import { Wrapper } from './Landing-styles.js'
import hero_photo from '../images/Hero_Photo.png';





const Landing = ({ user }) => {
  return (
    <Wrapper>
    <main>
      <h1>
        Keep track of split costs with ease
      </h1>
      <img src={hero_photo} alt='calculator'/>
      
      <button>Start</button>
      
    </main>
    </Wrapper>
  )
}

export default Landing