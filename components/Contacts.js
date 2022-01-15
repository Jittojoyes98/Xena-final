const Contacts=()=>{
    return(
        <div className="pt-10 pl-20 pr-5 bg-primary pb-10 flex">
            <div className="w-1/2 pt-20">
                <p className="text-white text-5xl w-2/4 font-black">Boost Your Sales</p>
                <div className="mt-16">
                    <button className="bg-white text-primary  py-5 px-3 w-4/12 inline-block rounded-3xl text-xl  drop-shadow-2xl font-black mt-2.5 mr-6">Try for Free</button>
                    <button className="bg-white text-primary  py-5 px-3 w-4/12 inline-block  rounded-3xl text-xl drop-shadow-2xl font-black  mt-2.5">Contact Sales</button>

                </div>

                <p className="text-white font-black text-3xl mt-10">
                    Join  Our  Community
                </p>

                <div className="flex gap-6 mt-5">
                    <img src="facebook-logo.svg"/>
                    <img src="telegram-logo.svg"/>
                    <img src="discord-logo.svg"/>
                    <img src="circle-logo.svg"/>
                </div>

                
            </div>
            <div className="w-5/12 pt-5">
                <p className="text-white text-5xl  font-black">Contact Us</p>
                <div className="shadow-2xl w-8/12 mt-10">
                    <form className="bg-white  rounded-xl px-6 pt-6 pb-8 mb-4 ">
                    <input className="shadow appearance-none border  rounded-2xl bg-gray-100 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:placeholder:text-transparent focus:shadow-outline placeholder:text-black" id="username" type="text" placeholder="Your Name"></input>
                    <input className="shadow appearance-none border mt-7 rounded-2xl bg-gray-100 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:placeholder:text-transparent focus:shadow-outline placeholder:text-black" id="username" type="text" placeholder="Your Email"></input>
                    <textarea className="shadow appearance-none border mt-7  rounded-2xl bg-gray-100 w-full pt-2 pl-3 h-40 text-black  focus:outline-none focus:placeholder:text-transparent focus:shadow-outline placeholder:text-black resize-none" id="username" type="text" placeholder="Your Message"></textarea>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white font-sans py-2 px-5 rounded-3xl text-base  mt-2.5">Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Contacts;