
import DrinkCard from '../drinkcard/DrinkCard.jsx';
import { useEffect, useState, useRef } from 'react';
import MenuNavigator from './MenuNavigator.jsx';

export default function MenuLayout() {

    const [dotCount, setDotCount] = useState(0);
    const scrollRef = useRef();

    useEffect(() => {
        const menuBody = document.querySelector('.menu-body');
        if(menuBody) {
            const tempDotCount = Math.ceil(menuBody.scrollWidth / window.innerWidth);
            setDotCount(tempDotCount);
        }
    }, [])

    const drinkList = [{
        name: 'Beer - Heineken',
        ingredients: 'Water, malted barley, hops, Heineken A-yeast',
        description: 'A world-famous lager with a crisp, balanced taste and mild bitterness. Smooth and refreshing—perfect for any occasion.',
        img: './src/assets/beerImg.jpg',
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
    }, {
        name: 'Aperol Spritz',
        ingredients: 'Aperol, prosecco, soda water, orange slice',
        description: 'A refreshing blend of bitter orange, herbs, and sparkling prosecco. Light, bubbly, and perfect for sunny moments.',
        img: './src/assets/aperolSpritz.jpg',
    }, {
        name: 'Negroni',
        ingredients: 'Gin, Campari, sweet vermouth, orange garnish',
        description: 'Bold and bitter-sweet, with herbal depth and a smooth finish. A true classic for the refined palate.',
        img: './src/assets/negroni.jpg',
    }, {
        name: 'Mojito',
        ingredients: 'White rum, fresh mint, lime juice, sugar, soda water',
        description: 'Light, minty, and citrusy—this Cuban classic is as refreshing as it gets. A summer favorite.',
        img: './src/assets/mojito.jpg',
    }, {
        name: 'Old Fashioned',
        ingredients: 'Bourbon or rye whiskey, sugar, Angostura bitters, orange peel',
        description: 'Rich, smooth, and spirit-forward. A timeless blend of whiskey, sugar, and bitters with a citrus twist.',
        img: './src/assets/oldFashioned.jpg',
    }]

    return(
        <>
        <div className='menu-layout-container h-fit w-full pt-25 relative'>
            <div className='menu-header w-full h-fit relative'>
                <div className='menu-header-content pl-5 top-[15%] left-[20%] w-[100%] h-[90%] text-white 
                xl:w-[35%] xl:absolute xl:pl-0'>
                    <h3 className='text-2xl'>Our Drinks</h3>
                    <p className='text-sm pt-4'>Discover our handcrafted cocktails: a blend of timeless classics and bold new flavors.
                        Whether you're here to unwind or celebrate, there's a drink waiting just for you.</p>
                </div>
            </div>
            <div className='menu-body flex flex-1 gap-40 mt-10 overflow-hidden ml-5
            xl:mt-50 xl:ml-25 xl:gap-120' ref={scrollRef}>
                {drinkList.map((drink, index) => {
                    return <DrinkCard key={index} drink={ {...drink, index:index} } />
                })}
            </div>
        </div>
        <MenuNavigator dotCount={dotCount} scrollRef={scrollRef} />
        </>
    );
}