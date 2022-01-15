import Company from "./Companies";
import Marquee from "react-fast-marquee";
const Brands=()=>{
    return(
        <>
        <div className="bg-primary text-white">
            <p className="p-28 pb-10 text-sm md:text-5xl font-black ">Trusted by Superior Brands</p>
        </div>
        <Marquee className="bg-primary -z-5">
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        </Marquee>
        </>
    )
}
export default Brands;