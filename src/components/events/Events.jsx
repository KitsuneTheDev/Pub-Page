import EventsLayout from "./EventsLayout.jsx";
import './events.css';

export default function Events() {
    return(
        <div className="events-container relative w-full h-fit flex flex-col justify-center items-center gap-20 ">
            <div className="events-header h-fit w-full text-white pl-5
            md:w-[35%] md:pl-0
            lg:w-[35%] lg:pl-0
            xl:w-[35%] xl:pl-0
            2xl:w-[35%] 2xl:pl-0 ">
                <h3 className="events-caption text-5xl font-c-source">Events</h3>
                <p className="pt-4 text-sm">Discover upcoming events, live performances, and unforgettable nights. Stay tuned for what's next.</p>
            </div>
            <div className="events-body">
                <EventsLayout />
            </div>
        </div>
    );
}