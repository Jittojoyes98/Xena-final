import { useState } from "react";

const CreateFeature=({src,header,paraInitial,paraAfter})=>{

    let [para,setPara]=useState(paraInitial);
    let [styling,setStyling]=useState(true);
    const styles={divClass: 'absolute w-fit left-3/4'};

    return(
        
        <div className="w-1/3 pr-16 relative">
            <div className="flex">
                <img src={src}/>
                <p className="text-3xl  pl-3 pt-2">{header}</p>
            </div>
            <div className="pt-10 text-lg pr-7">
                <p className="text-xl">{para}
                <button className={`${styles.divClass} ${styling ? 'inline-block' : 'invisible'}`} onClick={() =>{
                    setPara(paraAfter);
                    setStyling(!styling);
                }}>
                    <img src="v-background.svg"></img>
                    <img src="Vector.svg" className="absolute  top-1/4 left-1/4 "></img>
                    </button>
                </p>
            </div>

        </div >
    )
}
export default CreateFeature;