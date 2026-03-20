import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import ChefService from "./ChefService";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
        </div>
    );
};

export default Home;