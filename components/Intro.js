const Intro = () => {
  return (
    <div className="bg-primary h-screen flex justify-center items-center p-10 md:p-40 text-white z-20 w-screen">
      <div className="w-full md:w-6/12">
        <div className="font-sans p-20 pl-1 pr-16 pb-4">
          <h1 className="text-sm md:text-6xl font-black w-3/4 ">
            One click E&#8209;commerce Boost{" "}
          </h1>
          <p className="text-sm md:text-base font-black leading-10 break-normal mt-2.5 pr-24">
            Setup your eCommerce game through a proven algorithm powered by
            state-of-the-art-intelligent data analytics. Xena uses AI and
            automation to make eCommerce store management effortless and bring
            the best version of your eCommerce business.
          </p>
        </div>
        <div className="m-0">
          <button className="bg-white text-primary font-black rounded-3xl text-2xl py-4 px-10">
            Try For Free
          </button>
          <button className="sm:m-0 md:ml-5 bg-white text-primary font-black rounded-3xl text-2xl py-4 px-10">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="hidden md:block w-6/12  mt-40">
        <div className="w-full">
          <img className="w-full max-w-lg" src="hero-section-image.svg" />
        </div>
      </div>
    </div>
  );
};
export default Intro;
