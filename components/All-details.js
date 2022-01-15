import Link from "next/link";
const Alldetails=()=>{
    return(
        <div className="mt-20  flex  pl-40 pb-24">
            <div className="w-1/2 flex">
                <div className="mr-20 text-2xl ">
                    <p>Services</p>
                </div>
                <div className="mr-20 text-2xl ">
                    <p className="text-2xl ">Pricing</p>
                </div>
                <div className="mr-20">
                    <p className="text-2xl ">Company</p>
                    <p className="mt-2.5">About Us</p>
                    <p className="mt-2.5">Careers</p>
                </div>
                <div className=" ">
                    <p className="text-2xl ">Resources</p>
                    <p className="mt-2.5">Company</p>
                    <p className="mt-2.5">About Us</p>
                    <p className="mt-2.5">Careers</p>
                    <p className="mt-2.5">FAQ</p>
                    <p className="mt-2.5">Feed back</p>
                </div>
            </div>
            <div className="w-1/2 pl-52 text-sm font-black">
                <div>
                    <div className="flex gap-4">
                        <img src="location-bottom-logo.svg"/>
                        <p>San francisco Georgia 1247 United States</p>
                    </div>
                    <div className="flex gap-4 mt-7">
                        <img src="mobile-bottom-logo.svg"/>
                        <p>(843)-55-0103</p>
                    </div>
                    <div className="flex gap-4 mt-7">
                        <img src="email-bottom-logo.svg"/>
                        <p>willie.jennings.example@gmail.com</p>
                    </div>
                    <div className="flex mt-10 gap-3">
                        <img src="twitter-bottom-logo.svg"/>
                        <img src="facebook-bottom-logo.svg"/>
                        <img src="linkedin-bottom-logo.svg"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Alldetails;