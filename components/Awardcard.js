const Awardcard=({src,para})=>{
    return (
        <div className="p-5 shadow-lg shadow-gray-400 mr-10 flex flex-col relative">
            <img src={src} className="w-11/12 justify-center items-center "/>
            <p className="text-primary absolute top-3/4 text-center">{para}</p>
        </div>
    )
}
export default Awardcard;