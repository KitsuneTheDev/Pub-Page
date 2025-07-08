import './hero.css';

export default function Hero() {

    return(
        <div 
        className="hero-container h-ht-sm relative">
            <p className='text-white/70 text-sm font-c-source font-c-light w-[80%] absolute left-[11%] bottom-[20%]
            md:w-[70%] md:bottom-[20%]
            lg:w-[40%] lg:bottom-[14%]
            xl:w-[30%] xl:bottom-[5%]'>
                Nestled in Tepebaşı, our pub is the perfect place to unwind, whether you're catching up with friends or enjoying a drink solo.
                Great vibes, solid drink prices, and real Eskişehir spirit with good music and better company.
            </p>
        </div>
    );
}