import './contact.css';

export default function Contact() {
    return(
        <div className="contact-container bg-black h-ht-md flex flex-col">
            <div className='contact-header flex flex-col items-start h-[20%] pl-5
            md:pl-20 md:pt-15
            xl:pl-50 xl:pt-15'>
                <h1 className='text-4xl text-white/90 font-c-source
                lg:text-6xl
                xl:text-9xl'>Visit Us</h1>
                <p className='text-sm text-white/70 font-c-source w-[100%]
                lg:text-lg lg:w-[70%]
                xl:text-xl xl:w-[50%]'>A cozy corner with warm lights, brick walls, and the hum of good music spilling onto the street.
                    You’ll spot the wooden doors, welcoming glow, and the laughter before you even step inside.</p>
            </div>
            <div className='contact-body flex h-[80%]'>
                <div className='body-left text-white/70 flex flex-col justify-center items-start pl-5 gap-5 w-[50%]
                md:pl-20
                xl:pl-50'>
                    <p><span className='text-lg'>Email - </span>thistlefoodndrink@gmail.com</p>
                    <p><span className='text-lg'>Phone - </span>(000)-0000-00-000000</p>
                </div>
                <div className='body-right text-white/70 flex flex-col justify-center items-center gap-5 w-[50%] pr-5
                md:pr-2
                xl:pr-0'>
                    <p className='text-xl text-white/90
                    lg:text-4xl
                    xl:w-[50%] xl:text-6xl'>How to find the Thistle</p>
                    <p className='text-lg text-white/90
                    lg:text-2xl
                    xl:w-[50%] xl:text-4xl'>2458 Grand Avenue,
                        Tepebaşı, Eskişehir
                    </p>
                    <p className='text-xs
                    lg:text-lg
                    xl:w-[50%] xl:text-xl'>Nestled in one of the city's liveliest neighborhoods, our pub sits right where the energy of the streets meets the comfort of a good drink.
                        Surrounded by art, music, and local culture, it’s the perfect spot to start or end your night.</p>
                </div>
            </div>
        </div>
    );
}