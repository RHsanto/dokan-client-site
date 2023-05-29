import HeroSection from '../common/HeroSection'
import Discover from '../../components/Home/Discover'
import NewArrivals from '../../components/Home/NewArrivals'
import Allstep from '../../components/Home/AllStep'
const HomePage = () => {
  return (
    <div>
     <HeroSection/>
     <Discover/>
     <NewArrivals/>
     <Allstep/>
    </div>
  );
};

export default HomePage;