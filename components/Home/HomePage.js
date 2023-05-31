import HeroSection from '../common/HeroSection'
import Discover from '../../components/Home/Discover'
import NewArrivals from '../../components/Home/NewArrivals'
import Allstep from '../../components/Home/AllStep'
import Money from '../../components/Home/Money/Money'
import Explore from '../../components/Home/Exploring/Explore'
const HomePage = () => {
  return (
    <div>
     <HeroSection/>
     <Discover/>
     <NewArrivals/>
     <Allstep/>
     <Money/>
     <Explore/>
    </div>
  );
};

export default HomePage;