import HeroSection from '../common/HeroSection'
import Discover from '../../components/Home/Discover'
import NewArrivals from '../../components/Home/NewArrivals'
const HomePage = () => {
  return (
    <div>
     <HeroSection/>
     <Discover/>
     <NewArrivals/>
    </div>
  );
};

export default HomePage;