const Records=()=>{
    return(
        <>
        <div className="pt-28 pl-40 pr-40 pb-20 bg-primary text-white">
            <p className="text-5xl font-black  pb-10">Proven Track Record</p>
            <div className="flex">
                <div className="pr-10 w-1/3">
                    <img src="01.svg"/>
                    
                    <h1 className="pt-3 pb-2 text-2xl">High growth</h1>
                    <p className="text-lg">
                        40% Month-over-month average growth for our client seller accounts
                    </p>
                    <button className="pt-3">Know more <img src="right-arrow.svg"className="inline-block"/></button>

                </div>
                <div className="pr-10 w-1/3">
                    <img src="02.svg"/>
                    <h1 className="pt-3 pb-2 text-2xl">500+ KSUs</h1>
                    <p className="text-lg">
                        More than 500 SKUs under management with total yearly sales of over $500,000
                    </p>
                    <button className="pt-3">Know more <img src="right-arrow.svg"className="inline-block"/></button>
                    
                </div>
                <div className="pr-10 w-1/3">
                    <img src="03.svg"/>
                    <h1 className="pt-3 pb-2 text-2xl">ACOS 30%
                        <img src="acos.svg" className="inline-block pl-1"/>
            
                    </h1>
                    <p className="text-lg">
                        Consistent monthly reduction of Amazon cost of sales(ACOS) by over 30%
                    </p>
                    <button className="pt-3">Know more <img src="right-arrow.svg"className="inline-block"/></button>
                </div>
            </div>
            <div className="pt-20">
                <p className="text-5xl font-black">Some Count that Matters</p>
                <p className="pt-5 text-lg">Our achievement in the journey depicted in numbers</p>
            </div>
        </div>
        <div className="flex pl-40 pr-40 bg-primary">
            <img src="Count 1.svg"/>
            <img src="Count 2.svg"/>
            <img src="Count 3.svg"/>
            <img src="Count 4.svg"/>
        </div>
        </>
    )
}
export default Records;