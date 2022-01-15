import CreateFeature from "./CreateFeature";

const Features=()=>{
    
    return(
        <div className="pt-28 pl-40 pr-40 pb-20">

            <h1 className="text-5xl font-black">Discover the key features</h1>
            <div className="flex pt-20">

                <CreateFeature src="ppc.svg" header="PPC Optimization" paraInitial="Outrank competitors and make potential buyers click your ads, 
                by optimizing your PPC ..." paraAfter="Outrank competitors and make potential buyers click your ads, 
                by optimizing your PPC ads with Xena's automated system. 
                PPC can earn space for yourself in search results for keywords 
                that value the most to your business."/>
                    
                
                
                <CreateFeature src="ad.svg" header="Ad Automation" paraInitial="Xena predicts the acute number of days required to run your ads to reach ...    " paraAfter="Xena predicts the acute number of days required to run
                 your ads to reach your targets. Thus, helping you to cut down on unnecessary ad expenses."/>

                
            
                <CreateFeature src="keyword.svg" header="Keyword Analysis" paraInitial="With the help of Xena's automated inventory management, you will ..." paraAfter="With the help of Xena's automated inventory management, you will be 
                alerted about your inventory requirements as there is constant automatic 
                monitoring of your inventory. Thus, helping you to manage your inventory efficiently."/>

            </div>

            {/* second layer here */}

            <div className="flex pt-24">

                <CreateFeature src="inventory.svg" header="Inventory Management" paraInitial="With the help of Xena's automated inventory management, 
                you will... " paraAfter="With the help of Xena's automated inventory management, 
                you will be alerted about your inventory requirements as there is constant automatic monitoring of your 
                inventory. Thus, helping you to manage your inventory efficiently."/>
                    

                <CreateFeature src="review.svg" header="Review Request Automation" paraInitial="Xena allows users to send review requests for all 
                orders automatically. This ..." paraAfter="Xena allows users to send review requests for all orders automatically. 
                This feature gives sellers the chance to eliminate the endless task of manually requesting customers for feedback 
                and allows sellers to invest more time into their businesses."/>

                <CreateFeature src="review-classification.svg" header="Review Classification " paraInitial="Xena has optimized an automated review classification process..."
                paraAfter="Xena has optimized an automated review classification process where each review of an individual product will be 
                classified depending on its content into different categories. This program will ensure that a rough experience with delivery
                 or seller will not affect the product's reputation at any cost."/>

            </div>


        </div>
    )
}
export default Features;