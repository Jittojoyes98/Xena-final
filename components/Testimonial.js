import Cards from "./Testimonial-cards";

const Testimonial=()=>{
    return(
        <div className="pt-28 pl-40 pr-40 pb-20">
            <p className="text-5xl font-black">
                Client and Partner Testimonials
            </p>
            <p className="text-lg pt-5">
                We have been working with clients around the world
            </p>
            <div className="flex">
                <Cards para=" We are lucky enough to be a part of Xena during its early stages
                        and have observed the phenomenal rise of the power of its algorithm
                        and the real world impact it could create.Such a wonder! " 
                        name="Steve Silverstein" designation="Founder of Tree Free"
                        />
                <Cards para="Xena has helped us not only survive the dip in sales due 
                to pandemic but also thrive better than ever before"name="Paul Dubois" designation="Founder of Go2Kits"/>
                <Cards para="The market research Xena was able to provide was phenomenal-we were able to sucessfully launch new
                products all thanks to Xena's recommendations." name="Adam Goldstein" designation="Founder of Rafi Nova"/>
            </div>
            <div className="pt-10 w-11/12 ">
                <img src="slide.svg"className="m-auto"/>
            </div>

        </div>
    )
}
export default Testimonial;