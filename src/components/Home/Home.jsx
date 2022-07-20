import Navigationbar from './Navigationbar'
import Intro from '../Home/Intro'
import Price from '../Home/Price'
import ManfaatCronos from './ManfaatCronos'
import Footbar from '../Home/Footbar'

const Home = () => {
  return (
    <>
    <div className="header border">
    <Navigationbar />
    <Intro />
    </div>
    <ManfaatCronos/>
    <Price />
    <Footbar />
    </>
  )
}

export default Home