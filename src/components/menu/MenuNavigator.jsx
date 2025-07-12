import { useState } from 'react';

export default function({ dotCount, scrollRef }) {

    const scrollAmount = scrollRef.current?.clientWidth;
    const [activeDot, setActiveDot] = useState(0);
    console.log(scrollRef);
    return(
        <div className='navigation-buttons-container absolute h-20 w-full mt-30
        xl:left-3/4 xl:-translate-x-1/2 xl:mt-10 xl:w-[25%] '>
            <div className='navigation-elements flex'>
                <div className='navigation-dots w-[75%] flex gap-5 items-center justify-end mr-4'>
                    {[...new Array(dotCount)].map((_, index) => {
                        return <span key={index} className='w-1 h-1 bg-gold-4/20 rounded-full inline-block'
                        style={activeDot === index ? {backgroundColor: 'var(--color-gold-1)', width: '6px', height: '6px'} : null}></span>
                    })}
                </div>
                <div className='navigation-arrows flex gap-2'>
                    <div className={`left-arrow relative w-[30px] h-[30px] rounded-full border-[1px] bg-gold-1/20
                    ${activeDot !== 0 ? "hover:cursor-pointer border-gold-1" : "border-gold-1/20"}`}
                    onClick={() => {
                        if(activeDot !== 0) {
                            scrollRef.current?.scrollBy({left: -scrollAmount, behavior: 'smooth'});
                            const newActiveDot = activeDot - 1;
                            setActiveDot(newActiveDot);
                        } return;
                    }}>
                        <span className='absolute border-l-[2px] top-[9px] left-[11px] border-t-[2px] rotate-315 border-gold-4 w-[10px] h-[10px] '
                        ></span>
                    </div>
                    <div className={`right-arrow relative w-[30px] h-[30px] rounded-full border-[1px] bg-gold-1/20
                    ${activeDot !== dotCount - 1 ? "hover:cursor-pointer border-gold-1" : "border-gold-1/20"}`}
                    onClick={() => {
                        if(activeDot !== dotCount - 1) {
                            scrollRef.current?.scrollBy({left: scrollAmount, behavior: 'smooth'});
                            const newActiveDot = activeDot + 1;
                            setActiveDot(newActiveDot);
                        } return;
                    }}>
                        <span className='absolute border-r-[2px] top-[9px] left-[7px] border-b-[2px] rotate-315 border-gold-4 w-[10px] h-[10px] '></span>
                    </div>
                </div>
            </div>
        </div>
    );
}