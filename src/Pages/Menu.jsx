import { Helmet } from "react-helmet-async";
import Cover from "../Components/Shared/Cover";
import bgImg from "../assets/home/banner.jpg";
import SectionTile from "../Components/Shared/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import desserBg from "../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../assets/menu/pizza-bg.jpg"
import saladBg from "../assets/menu/salad-bg.jpg"
import soupBg from "../assets/menu/soup-bg.jpg"
import { useNavigate } from "react-router";
const Menu = () => {

  const navigate = useNavigate();
  const [menu] = useMenu();
  const Offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
      isParalax={true}
        img={bgImg}
        title={"OUR MENU"}
        subTitle={"Would You Like To Try This"}
      ></Cover>

      {/* Today offred section */}
      <section className="mb-28">
        <SectionTile
          subHeading={"---Don't miss---"}
          heading={"TODAY'S OFFER"}
        ></SectionTile>
        <MenuCategory items={Offered}></MenuCategory>

        {/* btn */}
        <div className="flex justify-center mt-10">
          <button onClick={() => navigate("/order", { state: { tabIndex: 4 } })} className="btn bg-orange-500 hover:bg-orange-600">
           ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>

      {/* dessert Section */}
       <section className="mb-20">
        {/* bg Img */}
        <Cover img={desserBg} title={"Desserts"} subTitle={"Indulge in our finest selection of handcrafted sweets and pastries, made fresh every day"}></Cover>
        {/* Filter a Category and send props for MeneCategory*/}
        <MenuCategory items={desserts}></MenuCategory>
        {/* btn */}
        <div className="flex justify-center mt-10">
          <button onClick={() => navigate("/order", { state: { tabIndex: 3 }})} className="btn bg-orange-500 hover:bg-orange-600">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>

      {/* Pizza Section */}
       <section className="mb-20">
        {/* bg Img */}
        <Cover img={pizzaBg} title={"Pizza"} subTitle={"From classic Margherita to loaded BBQ chicken—discover your perfect slice today"}></Cover>
        {/* Filter a Category and send props for MeneCategory*/}
        <MenuCategory items={pizza}></MenuCategory>
        {/* btn */}
        <div className="flex justify-center mt-10">
          <button onClick={() => navigate("/order", { state: { tabIndex: 1 } })} className="btn bg-orange-500 hover:bg-orange-600">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>

    {/* Salad Section */}
     <section className="mb-20">
        {/* bg Img */}
        <Cover img={saladBg} title={"Salad"} subTitle={"Crisp, fresh, and bursting with flavor—our salads are the perfect healthy delight"}></Cover>
        {/* Filter a Category and send props for MeneCategory*/}
        <MenuCategory items={salad}></MenuCategory>
        {/* btn */}
        <div className="flex justify-center mt-10">
          <button onClick={() => navigate("/order", { state: { tabIndex: 0 } })} className="btn bg-orange-500 hover:bg-orange-600">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>
    
    {/* Soups Section */}
     <section className="mb-20">
        {/* bg Img */}
        <Cover img={soupBg} title={"Soups"} subTitle={"A perfect blend of aromatic herbs and fresh vegetables in every spoonful"}></Cover>
        {/* Filter a Category and send props for MeneCategory*/}
        <MenuCategory items={soup}></MenuCategory>
        {/* btn */}
        <div className="flex justify-center mt-10">
          <button onClick={() => navigate("/order", { state: { tabIndex: 2 } })} className="btn bg-orange-500 hover:bg-orange-600">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>

    </div>
  );
};

export default Menu;
