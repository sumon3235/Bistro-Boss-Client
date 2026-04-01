import { Helmet } from "react-helmet-async";
import orderBg from "../assets/shop/banner2.jpg";
import Cover from "../Components/Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import ChefMenuItem from "./ChefMenuItem";
import { useLocation } from "react-router";
import { useState } from "react";

const Order = () => {
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(location?.state?.tabIndex || 0);
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  const gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";

  return (
    <div className="max-w-[1350px] mx-auto mb-16 px-6 md:px-8 lg:px-5">
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>

      <Cover img={orderBg} title="OUR SHOP" subTitle="Would You Like To Try Dish?" />

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="mt-20 mb-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Offered</Tab>
          </TabList>

          <TabPanel>
            <div className={gridClass}>
              {salad.map((item) => <ChefMenuItem key={item._id} item={item} />)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className={gridClass}>
              {pizza.map((item) => <ChefMenuItem key={item._id} item={item} />)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className={gridClass}>
              {soup.map((item) => <ChefMenuItem key={item._id} item={item} />)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className={gridClass}>
              {desserts.map((item) => <ChefMenuItem key={item._id} item={item} />)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className={gridClass}>
              {offered.map((item) => <ChefMenuItem key={item._id} item={item} />)}
            </div>
          </TabPanel>

        </Tabs>
      </div>
  );
};

export default Order;