import './about.css';

export default function About() {

    return(
        <div className="about-container h-fit w-full mt-4 bg-black 
        md:mt-15
        lg:mt-25
        xl:mt-25
        2xl:mt-25">
            <div className='about-header h-fit w-full'>
                <div className='pub-info w-full h-full pl-4
                xl:right-0 xl:w-[50%] xl:h-full xl:pr-[15%] xl:absolute'>
                    <h2 className='text-4xl font-c-source text-white/90
                    xl:text-end xl:text-6xl'>The best pub in town</h2>
                    <p className='text-md font-c-source text-white/70
                    xl:text-end xl:text-xl'>At the heart of the city, we’re more than just a pub, we’re your second living room.
                        Whether you're here for a cold pint, a good laugh, or a night of great music, you’ll always find friendly faces and a warm atmosphere.
                        That’s why locals keep coming back, and why you’ll feel right at home from your very first visit.</p>
                </div>
            </div>
            <div className='gallery-container top-80 h-fit w-[90%] left-[5%] grid grid-cols-2 pl-15
            lg:h-250
            xl:relative xl:h-350 xl:block'>
                <div className='image-container w-full h-100
                lg:w-100
                xl:relative xl:w-150 xl:h-150'
                    style={{
                    backgroundImage: `radial-gradient(circle at 50%,rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
                    linear-gradient(rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    linear-gradient(90deg, rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    url('/gallery_bar_inside.jpeg')`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat, no-repeat`,
                    backgroundPosition: `center, center`,
                }}>
                    <div className='border-container w-30 h-30 absolute border-l-[2px] border-t-[2px] -left-5 -top-5 border-gold-1/70'></div>
                </div>
                <div className='image-container -top-50 left-100 w-full h-100
                lg:w-100
                xl:relative xl:w-100 xl:h-100'
                    style={{
                    backgroundImage: `radial-gradient(circle at 50%,rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
                    linear-gradient(rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    linear-gradient(90deg, rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    url('/gallery_people_inside.webp')`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat, no-repeat`,
                    backgroundPosition: `center, center`,
                }}>
                    <div className='border-container w-30 h-30 absolute border-l-[2px] border-t-[2px] -left-5 -top-5 border-gold-1/70'></div>
                </div>
                <div className='image-container -top-250 left-250 w-full h-100
                lg:w-100
                xl:relative xl:w-100 xl:h-100'
                    style={{
                    backgroundImage: `radial-gradient(circle at 50%,rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
                    linear-gradient(rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    linear-gradient(90deg, rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    url('/gallery_bar_inside.webp')`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat, no-repeat`,
                    backgroundPosition: `center, center`,
                }}>
                    <div className='border-container w-30 h-30 absolute border-l-[2px] border-t-[2px] -left-5 -top-5 border-gold-1/70'></div>
                </div>
                <div className='image-container -top-200 left-250 w-full h-100
                lg:w-100
                xl:relative xl:w-100'
                    style={{
                    backgroundImage: `radial-gradient(circle at 50%,rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
                    linear-gradient(rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    linear-gradient(90deg, rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                    url('/gallery_door.webp')`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat, no-repeat`,
                    backgroundPosition: `center, center`,
                }}>
                    <div className='border-container w-30 h-30 absolute border-l-[2px] border-t-[2px] -left-5 -top-5 border-gold-1/70'></div>
                </div>
            </div>
        </div>
    );
}