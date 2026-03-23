import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import ChefRecomended from "./ChefRecomended";
import ChefService from "./ChefService";
import Featured from "./Featured";
import PopulerItem from "./PopulerItem";
import Testimonils from "./Testimonils";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopulerItem></PopulerItem>
      <ChefRecomended></ChefRecomended>
      <Featured></Featured>
      <Testimonils></Testimonils>
    </div>
  );
};

export default Home;
