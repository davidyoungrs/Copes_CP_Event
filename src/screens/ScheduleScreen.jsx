import { ChevronRight, Play } from 'lucide-react';

export default function ScheduleScreen() {
    const scheduleItems = [
        {
            time: '09:00\nAM',
            title: 'Future of Celeros: Keynote',
            location: 'Hyatt Regency Houston West',
            duration: '60 mins',
            speaker: 'Marcus Thorne',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop',
            active: false
        },
        {
            time: '10:30\nAM',
            title: 'Web3 Infrastructure Scalability',
            location: 'Hyatt Regency Houston West',
            duration: '45 mins',
            speaker: 'Elena Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop',
            active: false
        },
        {
            time: '11:30\nAM',
            title: 'Design Systems in FinTech',
            location: 'Hyatt Regency Houston West',
            duration: '90 mins',
            speaker: 'Marcus Thorne', // In design it's a playback icon instead of speaker inside the item but let's match the look
            avatar: '',
            active: true,
            tag: 'LIVE NOW'
        }
    ];

    const speakers = [
        {
            name: 'Marcus Thorne',
            role: 'CEO, Celeros',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop'
        },
        {
            name: 'Elena Rodriguez',
            role: 'CTO, Nexus',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
        }
    ];

    return (
        <div className="schedule-screen pt-header">
            {/* Day Tabs */}
            <div className="day-tabs flex w-full">
                <button className="day-tab active flex-1 py-3 text-center">
                    <span className="block font-medium text-white">Day 1</span>
                    <span className="block text-xs text-blue mt-1 uppercase">APR 15</span>
                </button>
                <button className="day-tab flex-1 py-3 text-center">
                    <span className="block font-medium text-gray">Day 2</span>
                    <span className="block text-xs text-gray mt-1 uppercase">APR 16</span>
                </button>
                <button className="day-tab flex-1 py-3 text-center">
                    <span className="block font-medium text-gray">Day 3</span>
                    <span className="block text-xs text-gray mt-1 uppercase">APR 17</span>
                </button>
            </div>

            <div className="p-4">
                {/* Schedule List */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="section-title m-0">Schedule</h2>
                    <button className="text-blue text-sm">View Map</button>
                </div>

                <div className="schedule-list flex flex-col gap-4">
                    {scheduleItems.map((item, idx) => (
                        <div key={idx} className="schedule-card flex gap-4 p-4">
                            <div className={`time-pill flex flex-col items-center justify-center text-center ${item.active ? 'active' : ''}`}>
                                <span className="font-medium text-sm leading-tight whitespace-pre-line">{item.time}</span>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        {item.tag && <span className="live-tag mb-2 inline-block">{item.tag}</span>}
                                        <h3 className="text-base text-white font-semibold leading-tight">{item.title}</h3>
                                    </div>
                                    {item.active ? <Play size={20} color="#2D88FF" /> : <ChevronRight size={20} color="#8b9eb5" />}
                                </div>

                                <p className="text-sm text-gray mt-2">{item.location}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-1 h-1 rounded-full bg-gray inline-block"></span>
                                    <p className="text-sm text-gray">{item.duration}</p>
                                </div>

                                {item.avatar && (
                                    <div className="flex items-center gap-2 mt-3">
                                        <img src={item.avatar} alt={item.speaker} className="w-6 h-6 rounded-full object-cover" />
                                        <span className="text-sm text-gray">{item.speaker}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Speakers */}
                <div className="flex justify-between items-center mt-8 mb-4">
                    <h2 className="section-title m-0">Featured Speakers</h2>
                    <button className="text-blue text-sm">View All</button>
                </div>

                <div className="speakers-horizontal-list flex gap-4 overflow-x-auto pb-4">
                    {speakers.map((speaker, idx) => (
                        <div key={idx} className="speaker-card flex-shrink-0 flex flex-col items-center text-center p-4 w-36">
                            <img src={speaker.avatar} alt={speaker.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-transparent" />
                            <h4 className="text-sm text-white font-semibold leading-tight">{speaker.name}</h4>
                            <p className="text-xs text-blue mt-1">{speaker.role}</p>
                        </div>
                    ))}
                    {/* Third partial card to show scrollability */}
                    <div className="speaker-card flex-shrink-0 flex flex-col items-center text-center p-4 w-36">
                        <div className="w-16 h-16 rounded-full bg-surface-hover mb-3"></div>
                        <h4 className="text-sm text-white font-semibold leading-tight">David Lee</h4>
                        <p className="text-xs text-blue mt-1">Blockchain</p>
                    </div>
                </div>

                {/* Spotlight Speaker Card */}
                <div className="spotlight-card flex gap-4 p-5 mt-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop" alt="Sarah Jenkins" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg text-white font-semibold">Sarah Jenkins</h3>
                        <p className="text-xs text-blue font-semibold tracking-wider uppercase mt-1">VP ENGINEERING @ FLOW</p>
                        <p className="text-sm text-gray mt-2 leading-relaxed">
                            Expert in distributed systems and high-frequency trading platforms with over 15 years of experience.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
