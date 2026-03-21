import { useEffect, useState } from "react";
import SectionTile from "../Components/Shared/SectionTile";
import MenuItem from "./MenuItem";

const PopulerItem = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItems = data.filter((item) => item.category === "popular");
        setMenu(populerItems);
      });
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-16">
      <SectionTile
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTile>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      {/* btn */}
      <div className="flex justify-center mt-10">
        <button className="btn bg-orange-500 hover:bg-orange-600">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopulerItem;
