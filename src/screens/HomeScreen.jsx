import { Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        // Event start date: April 15, 2026, 8:00 AM CDT (UTC-5)
        const eventDate = new Date('2026-04-15T08:00:00-05:00').getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                setTimeLeft({ days, hours, minutes });
            } else {
                setTimeLeft(null);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 60000); // Check every minute

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home-screen">
            {/* Hero Section with Background Image */}
            <div className="hero-section flex flex-col items-center justify-center">
                <div className="hero-overlay"></div>

                <div className="hero-content flex flex-col items-center text-center">
                    <div className="event-icon-container drop-shadow-lg" style={{ width: 'auto', padding: '0 20px', backgroundColor: 'transparent', border: 'none' }}>
                        <img src="/copes-vulcan-hero.svg" alt="Copes-Vulcan" style={{ height: '40px' }} />
                    </div>
                    <h1 className="hero-title drop-shadow-xl text-shadow">
                        Celeros Channel Partner <br />
                        <span className="text-blue drop-shadow-md">Event 2026</span>
                    </h1>

                    <div className="event-meta flex flex-col gap-2 mt-4 drop-shadow-xl text-white font-bold text-shadow-strong">
                        <div className="meta-item flex items-center justify-center gap-2">
                            <Calendar size={18} color="#2D88FF" />
                            <span>April 15-17, 2026</span>
                        </div>
                        <div className="meta-item flex items-center justify-center gap-2">
                            <MapPin size={18} color="#2D88FF" />
                            <span>Houston, Texas</span>
                        </div>
                    </div>

                    <p className="hero-desc mt-6 font-bold drop-shadow-xl text-light-fixed text-shadow-strong whitespace-pre-line">
                        The Power of Connection: Driving the Future of our Flow Control
                    </p>

                    <div className="hero-actions flex flex-col w-full gap-4 mt-8">
                        <button className="btn-primary" onClick={() => navigate('/schedule')}>
                            Event Schedule &rarr;
                        </button>
                    </div>

                    {/* Countdown Timer */}
                    {timeLeft && (
                        <div className="mt-10 flex gap-4 drop-shadow-2xl text-light-fixed animate-fade-in">
                            <div className="flex flex-col items-center bg-black-60 backdrop-blur-md rounded-2xl p-4 min-w-[100px] border border-white border-opacity-30 shadow-2xl">
                                <span className="text-sm font-bold uppercase tracking-widest mb-1 opacity-90 text-blue">Days</span>
                                <span className="text-5xl font-black tracking-tight">{timeLeft.days}</span>
                            </div>
                            <div className="flex flex-col items-center bg-black-60 backdrop-blur-md rounded-2xl p-4 min-w-[100px] border border-white border-opacity-30 shadow-2xl">
                                <span className="text-sm font-bold uppercase tracking-widest mb-1 opacity-90 text-blue">Hours</span>
                                <span className="text-5xl font-black tracking-tight">{timeLeft.hours}</span>
                            </div>
                            <div className="flex flex-col items-center bg-black-60 backdrop-blur-md rounded-2xl p-4 min-w-[100px] border border-white border-opacity-30 shadow-2xl">
                                <span className="text-sm font-bold uppercase tracking-widest mb-1 opacity-90 text-blue">Mins</span>
                                <span className="text-5xl font-black tracking-tight">{timeLeft.minutes}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats-section grid-2x2 gap-6 mt-8">
                <div className="stat-card flex flex-col items-center">
                    <span className="stat-number">120+</span>
                    <span className="stat-label">ATTENDEES</span>
                </div>
                <div className="stat-card flex flex-col items-center">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">SPEAKERS</span>
                </div>
                <div className="stat-card flex flex-col items-center" style={{ gridColumn: 'span 2' }}>
                    <span className="stat-number">1</span>
                    <span className="stat-label">SITE TOUR</span>
                </div>
            </div>

            {/* Venue Section */}
            <div className="venue-section mt-8 mb-6">
                <h3 className="section-title">Event Venue</h3>
                <a
                    href="https://www.hyatt.com/hyatt-regency/en-US/houro-hyatt-regency-houston-west?src=agn_koddi_crp_chico_ppc_21847613925_Conversion_Regency_Google_Search_English_HOURO_Houston_Paid_Brand_CrossDevice_1x1_google_Koddi-TopUp-Evergreen-Brand_e_hyatt%20regency%20houston%20west&gad_source=1&gad_campaignid=21847613925&gclid=CjwKCAiA-__MBhAKEiwASBmsBILg-7IRmpJbpdqfsExOP9SbPevH0yDf9LZjvdNfMYDms7nvVccDiRoCJCcQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="venue-card-hero mt-4 block"
                >
                    <div className="venue-hero-overlay flex flex-col justify-end p-5">
                        <h4 className="text-white font-bold text-xl mb-1 drop-shadow-md">Hyatt Regency Houston West</h4>
                        <p className="text-white text-opacity-100 text-sm drop-shadow-md font-medium">An elegant business hub in the Energy Corridor of Houston, Texas.</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
