
import EventsCard from "./EventsCard.jsx";
import ReservationButton from '../common/ReservationButton.jsx';

export default function EventsLayout() {

    const eventList = [
        {
            name: "Live Acoustic Night",
            date: "15.07",
            description: "Unplug and unwind with local acoustic artists performing live."
        },
        {
            name: "Catan Game Night",
            date: "18.07",
            description: "Build, trade, and settle your way to victory in our casual Catan night."
        },
        {
            name: "Retro Vinyl Party",
            date: "20.07",
            description: "Dance the night away to classic hits spun on real vinyl decks."
        },
        {
            name: "Karaoke & Cocktails",
            date: "22.07",
            description: "Sing your heart out while sipping our signature mixes."
        },
        {
            name: "Craft Beer Tasting",
            date: "25.07",
            description: "Explore a curated selection of local and international craft brews."
        },
        {
            name: "Stand-Up Comedy Night",
            date: "27.07",
            description: "Laugh out loud with up-and-coming stand-up comedians."
        },
        {
            name: "Salsa Social Night",
            date: "29.07",
            description: "Move to the rhythm and meet new people on the dance floor."
        },
        {
            name: "Cocktail Workshop",
            date: "01.08",
            description: "Learn to mix, shake, and stir with our expert bartenders."
        },
        {
            name: "Open Mic Evening",
            date: "03.08",
            description: "Step up and showcase your talent or cheer on local voices."
        },
        {
            name: "Movie & Mojito Monday",
            date: "05.08",
            description: "Enjoy a chill movie night with mojito specials all evening."
        }
    ];

    return(
        <div className="events-layout-container flex flex-col items-center justify-center">
            <div className="events-layout-description flex flex-col justify-center items-center gap-25
            md:flex-col
            lg:flex-row
            xl:flex-row
            2xl:flex-row">
                <div className="description-image-container relative w-100 h-100">
                    <div className="description-image absolute h-full w-full left-5 top-5"
                    style={{
                        backgroundImage: `
                        radial-gradient(circle at center, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
                        linear-gradient(to bottom, rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 25)),
                        url('/src/assets/eventsBalloons.png')
                        `,
                        backgroundRepeat: 'cover, no-repeat',
                        backgroundSize: '100%, 100%',
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgb(0 0 0 / 80), rgb(0 0 0 / 100), transparent 100%)'
                    }}></div>
                    <div className="border-decoration absolute top-0 left-0 w-32.5 h-32.5 border-l-[2px] border-t-[2px] border-gold-1 "></div>
                </div>
                <div className="description-context-container text-white text-sm font-c-source w-100">
                    <h3 className="text-4xl font-c-source mb-4">Parties at Thistle</h3>
                    <p>Our events are all about good energy, friendly faces, and great times. Enjoy unique cocktails crafted in-house and delicious bar food made to share.
                        Whether you're here to relax or celebrate, there's always something happening. Come be part of the vibe.</p>
                    <ReservationButton />
                </div>
            </div>
            <div className="events-layout-upcoming flex justify-center items-center pt-25 relative">
                <h3 className="absolute top-[3%] left-[0%] text-xl font-c-source text-white/90">Upcoming Events</h3>
                <div className="events-cards-container grid grid-cols-1 gap:0
                lg:grid-cols-2 lg:gap-25
                xl:grid-cols-2 xl:gap-25
                2xl:grid-cols-2 2xl:gap-25">
                    {eventList.map((event, index) => {
                        return <EventsCard event={event} index={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}