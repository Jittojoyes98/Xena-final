
import Awardcard from "./Awardcard";
const Awards=()=>{
    return(
        <>
            <div className="pt-24 pl-40 pr-40 pb-24">
                <p className="text-5xl font-black">Awards</p>
            </div>
            <div className="flex mt-20 pl-16 mb-20">
                <Awardcard src="award-1.svg" para=""/>
                <Awardcard src="award-2.svg" para="Tech Innovation Award Winner 2021"/>
                <Awardcard src="award-3.svg" para="Prepare4VC Accelerator Cohot 2021"/>
                <Awardcard src="award-4.svg" para="Forbes Under 30 Summit 2019"/>
            </div>
        </>
    )
}
export default Awards;