const Cards=({para,name,designation})=>{
    return (
        <div className="rounded-3xl bg-primary w-1/3  mr-20 mt-10">
            <div className="bg-white mt-9 text-center w-10/12 m-auto rounded-xl drop-shadow-xl  h-3/5">
                <p className="text-3xl text-center pt-4 ">Efficient Collabrating</p>
                <div className="flex ">
                    <p className="p-4">
                        "{para}"
                    </p>
                </div>
                
            </div>
            <div className=" text-center mt-4 text-white pb-5">
                
                    <img src="client-image.svg" className="m-auto w-1/4 mb-2.5"/>
                    <p className="text-lg font-black">{name}</p>
                    <p>{designation}</p>
                
            </div>
        </div>
    )
}
export default Cards;