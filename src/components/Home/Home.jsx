import NavigationBar from '../Home/NavigationBar/Navigationbar'
import Intro from '../Home/Intro/Intro'
import Price from '../Home/Price/Price'

const Home = () => {
  return (
    <>
    <div className="header border">
    <NavigationBar />
    <Intro />
    </div>
    <Price />
    </>
  )
}

export default Home