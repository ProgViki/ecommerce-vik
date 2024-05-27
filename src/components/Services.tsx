import {MdSupportAgent, MdDiscount } from "react-icons/md"
import { ImTruck } from "react-icons/im"
import { SiMoneygram } from "react-icons/si"
import FeaturedCard from "./FeaturedCard"
// import {} from "react-icons/ai" 

type Props = {}

const Services = (props: Props) => {

    const data = [
        {
            icon: <ImTruck className="text-4xl"/>,
            title: "Free Delivery",
            desc: "Orders from all item"
        },
        {
            icon: <SiMoneygram className="text-4xl"/>,
            title: "Free Delivery",
            desc: "Orders from all item"
        },
        {
            icon: <MdDiscount className="text-4xl"/>,
            title: "Free Delivery",
            desc: "Orders from all item"
        },
        {
            icon: <MdSupportAgent className="text-4xl"/>,
            title: "Free Delivery",
            desc: "Orders from all item"
        },
    ]



  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {data.map(item=>(
            <FeaturedCard
            key={item.title}
            icon={item.icon}
            desc={item.desc}
            title={item.title}
            />
        ))}
    </div>
  )
}

export default Services