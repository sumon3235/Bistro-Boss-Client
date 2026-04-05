import { useEffect, useState } from "react";
import ChefMenuItem from "./ChefMenuItem";
import SectionTile from "../Components/Shared/SectionTitle";


const ChefRecomended = () => {

    const [menu, setMenu] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            const OfferedItem = data.slice(0, 4);
            setMenu(OfferedItem);
        })
    },[])

    return (
        <section className="my-20">
            {/* Title Section */}
            <SectionTile subHeading={"---Should Try---"} heading={'CHEF RECOMMENDS'}/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 md:gap-7 max-w-[1350px] mx-auto px-5 md:px-9 lg:px-3">
                {
                    menu.map(item => <ChefMenuItem key={item._id} item={item}></ChefMenuItem>)
                }
            </div>
        </section>
    );
};

export default ChefRecomended;