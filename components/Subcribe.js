const Subscribe=()=>{
    return(
        <div className="bg-primary text-white mt-20 flex justify-center items-center pb-16">
            <div className="pt-28">
                <p className="text-5xl font-black m-auto">Xena at your fingertips</p>
                <p className="pt-20 w-7/12 m-auto text-xl font-black">
                    Subscribe to our Newsletter
                </p>
                <p className="pt-5 w-8/12 m-auto text-lg pb-7">
                    Available Exclusively on Xena Intelligence
                </p>
                <input placeholder="Your Email" className="block m-auto rounded-3xl py-3 px-7 w-7/12 placeholder:text-black"/>
                <button className="bg-blue-700 hover:bg-blue-800 text-white  py-3 px-7 w-7/12  rounded-3xl text-base block m-auto mt-2.5">Subscribe</button>
            </div>
        </div>
    )
}
export default Subscribe;