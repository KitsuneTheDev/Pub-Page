export default function ({ event, index }) {
    
    let marginLeft = 0;

    if(index % 4 === 0 || index % 4 === 3) marginLeft = 40;

    console.log(event);

    return(
        <div className={`event-card-container w-100 h-20 flex ml-0 mt-5
        lg:ml-[${marginLeft}px] lg:mt-0
        xl:ml-[${marginLeft}px] xl:mt-0
        2xl:ml-[${marginLeft}px] 2xl:mt-0`}>
            <div className="event-card-left w-15 h-full relative">
                <div className="date-info absolute top-[5%] right-0 font-c-source text-md text-gold-1/70">{event.date}</div>
            </div>
            <div className="event-card-seperator w-10 h-full flex items-center justify-center">
                <div className="seperator h-[95%] w-[2px] bg-gold-1/70 "></div>
            </div>
            <div className="event-card-right w-75 h-full flex flex-col">
                <div className="event-name w-full h-[15%] flex items-center justify-start">
                    <h4 className="text-white/90 text-xl">{event.name}</h4>
                </div>
                <div className="event-description w-full pt-4 h-[85%] flex items-start justify-start">
                    <p className="text-white/80 text-sm">{event.description}</p>
                </div>
            </div>
        </div>
    );
}