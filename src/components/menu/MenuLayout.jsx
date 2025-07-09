
import DrinkCard from '../drinkcard/DrinkCard.jsx';

export default function MenuLayout() {

    const drinkList = [{
        name: 'Beer - Heineken',
        ingredients: 'Water, malted barley, hops, Heineken A-yeast',
        description: 'A world-famous lager with a crisp, balanced taste and mild bitterness. Smooth and refreshing—perfect for any occasion.',
        img: './src/assets/beerImg.webp',
    }, {
        name: 'Whiskey - Jack Daniels',
        ingredients: 'Corn, rye, malted barley, pure spring water',
        description: 'Smooth, charcoal-mellowed whiskey with notes of vanilla, oak, and a hint of caramel. A classic American spirit.',
        img: './src/assets/whiskeyImg.jpg',
    }, {
        name: 'Vodka - Absolute',
        ingredients: 'Water, winter wheat',
        description: 'Clean and smooth with subtle grain notes. Perfect for cocktails or straight-up enjoyment.',
        img: './src/assets/vodkaImg.jpg',
    }, {
        name: 'Gin - Beefeater',
        ingredients: 'Juniper, coriander, angelica root, citrus peel, and other botanicals',
        description: 'Classic London Dry gin with bold juniper, citrus, and subtle spice. Ideal for timeless cocktails like the Gin & Tonic.',
        img: './src/assets/ginImg.jpg',
    }]

    return(
        <div className="menu-layout-container flex w-full h-full mt-10">
            <div className="menu-layout-left w-[5%] h-full flex items-center justify-center">
                <div className="left-arrow-container w-full aspect-square rounded-full pt-[25%] relative hidden">
                    <div className="arrow-label-container text-gold-4 w-full absolute top-[-4px] left-1/2 -translate-x-1/4 text-lg font-c-source font-c-light">Food</div>
                    <div className="arrow-shape-container relative">
                        <span className="arrow-head absolute w-[15px] h-[2px] bg-gold-1 rotate-225 translate-y-[6px] left-[calc(30%-16px)] "></span>
                        <span className="arrow-head absolute w-[60px] h-[2px] bg-gold-1 left-[calc(30%-15px)] "></span>
                    </div>
                </div>
            </div>
            <div className="menu-layout-main w-[90%] h-full">
                <div className="menu-header w-full h-[10%] flex">
                    <div className="left-deco w-[45%] h-full relative ">
                        <div className="absolute h-[2px] w-full bg-gold-1 bottom-0 "></div>
                    </div>
                    <div className="mid-deco bg-black w-[10%] h-full flex items-end justify-center relative overflow-hidden ">
                        <div className="absolute h-[2px] w-[16%] bottom-0 left-0 bg-gold-1 " ></div>
                        <div className="absolute h-[2px] w-[16%] bottom-0 right-0 bg-gold-1 " ></div>
                        <div className="absolute w-[50%] aspect-square border-[2px] border-gold-1 rotate-45 "></div>
                        <div className="absolute w-[50%] aspect-square border-[2px] border-gold-1 translate-y-[50%] rotate-45 " ></div>
                        <div className="absolute w-[2px] h-full bg-gold-1 "></div>
                    </div>
                    <div className="right-deco relative w-[45%] h-full ">
                        <div className="absolute h-[2px] w-full bg-gold-1 bottom-0 "></div>
                    </div>
                </div>
                <div className="menu-body w-full h-[90%] flex">
                    <div className="menu-seperator-container absolute h-full w-[10%] left-1/2 -translate-x-[50%] hidden
                    md:hidden
                    lg:block
                    xl:block
                    2xl:block">
                        <div className="absolute h-full w-[2px] bg-gold-1 left-1/2 bottom-0 -translate-x-[1px] "></div>
                    </div>
                    <div className="menu-element-container h-fit w-full flex flex-wrap gap-[10%] items-center justify-center ">
                        {drinkList.map((drink, index) => {
                            return <DrinkCard key={index} drink={ drink } />
                        })}
                    </div>
                </div>
            </div>
            <div className="menu-layout-right w-[5%] h-full flex items-center justify-center">
                <div className="right-arrow-container w-full aspect-square rounded-full pt-[25%] relative hidden ">
                    <div className="arrow-label-container text-gold-4 w-full absolute top-[-4px] left-1/2 -translate-x-1/5 text-lg font-c-source font-c-light">Food</div>
                    <div className="arrow-shape-container relative">
                        <span className="arrow-head absolute w-[15px] h-[2px] bg-gold-1 rotate-135 translate-y-[6px] right-[calc(30%-16px)] "></span>
                        <span className="arrow-head absolute w-[60px] h-[2px] bg-gold-1 right-[calc(30%-15px)] "></span>
                    </div>
                </div>
            </div>
        </div>
    );
}