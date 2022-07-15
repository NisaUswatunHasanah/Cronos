import NavigationBar from '../Home/NavigationBar/Navigationbar'
import Intro from '../Home/Intro/Intro'
import Price from '../Home/Price/Price'
import ManfaatCronos from './ManfaatCronos/ManfaatCronos'

const Home = () => {
  return (
    <>
    <div className="header border">
    <NavigationBar />
    <Intro />
    </div>
    <ManfaatCronos/>
    <Price />
    </>
  )
}

export default Home