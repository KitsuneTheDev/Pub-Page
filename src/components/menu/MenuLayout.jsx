
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
        name: 'Whiskey Sour',
        ingredients: 'Bourbon whiskey, fresh lemon juice, simple syrup, egg white (optional), Angostura bitters',
        description: 'A perfectly balanced cocktail combining the boldness of bourbon with the brightness of lemon and a silky smooth finish. Classic, refreshing, and timeless.',
        img: '/src/assets/whiskeySourImg.webp',
    }, {
        name: 'Tom Collins',
        ingredients: 'Gin, fresh lemon juice, simple syrup, soda water, lemon wheel, cherry',
        description: 'A tall, bubbly classic that’s citrusy, crisp, and endlessly refreshing. Perfect for sunny afternoons or a light evening sip.',
        img: '/src/assets/tomCollinsImg.jpg',
    }, {
        name: 'Mai Tai',
        ingredients: 'White rum, dark rum, lime juice, orange curaçao, orgeat syrup',
        description: 'A tropical classic bursting with citrus, almond, and rich rum flavors. Refreshing, vibrant, and perfect for a taste of island paradise.',
        img: '/src/assets/maiTaiImg.jpg',
    }, {
        name: 'Gin - Beefeater',
        ingredients: 'Juniper, coriander, angelica root, citrus peel, and other botanicals',
        description: 'Classic London Dry gin with bold juniper, citrus, and subtle spice. Ideal for timeless cocktails like the Gin & Tonic.',
        img: '/src/assets/ginImg.jpg',
    }, {
        name: 'Aperol Spritz',
        ingredients: 'Aperol, prosecco, soda water, orange slice',
        description: 'A refreshing blend of bitter orange, herbs, and sparkling prosecco. Light, bubbly, and perfect for sunny moments.',
        img: '/src/assets/aperolSpritz.jpg',
    }, {
        name: 'Negroni',
        ingredients: 'Gin, Campari, sweet vermouth, orange garnish',
        description: 'Bold and bitter-sweet, with herbal depth and a smooth finish. A true classic for the refined palate.',
        img: '/src/assets/negroni.jpg',
    }, {
        name: 'Mojito',
        ingredients: 'White rum, fresh mint, lime juice, sugar, soda water',
        description: 'Light, minty, and citrusy—this Cuban classic is as refreshing as it gets. A summer favorite.',
        img: '/src/assets/mojito.jpg',
    }, {
        name: 'Old Fashioned',
        ingredients: 'Bourbon or rye whiskey, sugar, Angostura bitters, orange peel',
        description: 'Rich, smooth, and spirit-forward. A timeless blend of whiskey, sugar, and bitters with a citrus twist.',
        img: '/src/assets/oldFashioned.jpg',
    }]

    return(
        <>
        <div className='menu-layout-container h-fit w-full pt-25 relative'>
            <div className='menu-header w-full h-fit relative'>
                <div className='menu-header-content pl-5 top-[15%] left-[20%] w-[100%] h-[90%] text-white 
                xl:w-[35%] xl:absolute xl:pl-0'>
                    <h3 className='text-5xl font-c-source'>Our Drinks</h3>
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