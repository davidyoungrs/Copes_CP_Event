import React, { useState } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';

export default function ScheduleScreen() {
    const [activeTab, setActiveTab] = useState(1);

    const commonSlots = [
        {
            time: '09:00\nAM',
            title: 'Welcome & Morning Keynote',
            location: 'Grand Ballroom',
            duration: '60 mins',
            presenter: 'CFT Leadership',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop',
            active: false
        },
        {
            time: '10:00\nAM',
            title: 'Morning Break',
            location: 'Foyer',
            duration: '20 mins',
            presenter: '',
            avatar: '',
            isBreak: true
        },
        {
            time: '10:20\nAM',
            title: 'Strategic Flow Control Session',
            location: 'Grand Ballroom',
            duration: '65 mins',
            presenter: 'CFT Presenter',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop',
            active: false
        },
        {
            time: '11:25\nAM',
            title: 'Channel Partner Excellence',
            location: 'Breakout Room A',
            duration: '65 mins',
            presenter: 'CFT Presenter',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop',
            active: false
        },
        {
            time: '12:30\nPM',
            title: 'Networking Lunch',
            location: 'Main Dining Hall',
            duration: '60 mins',
            presenter: '',
            avatar: '',
            isBreak: true
        },
        {
            time: '01:30\nPM',
            title: 'Afternoon Technical Deep-Dive',
            location: 'Grand Ballroom',
            duration: '60 mins',
            presenter: 'CFT Presenter',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop',
            active: false
        },
        {
            time: '02:30\nPM',
            title: 'Afternoon Break',
            location: 'Foyer',
            duration: '20 mins',
            presenter: '',
            avatar: '',
            isBreak: true
        },
        {
            time: '02:50\nPM',
            title: 'Future Innovations Panel',
            location: 'Grand Ballroom',
            duration: '60 mins',
            presenter: 'CFT Presenter',
            avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop',
            active: false
        },
        {
            time: '03:50\nPM',
            title: 'Daily Wrap-up',
            location: 'Grand Ballroom',
            duration: '10 mins',
            presenter: 'CFT Leadership',
            avatar: '',
            active: false
        }
    ];

    const scheduleByDay = {
        1: commonSlots.map(item => ({ ...item, day: 1 })),
        2: commonSlots.map(item => ({ ...item, day: 2, title: item.title.replace('Morning Keynote', 'Industry Trends') })),
        3: commonSlots.map(item => ({ ...item, day: 3, title: item.title.replace('Morning Keynote', 'Closing Strategy') }))
    };

    const presenters = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `CFT Presenter ${i + 1}`,
        role: 'Celeros Flow Technology',
        avatar: `https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=200&auto=format&fit=crop` || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    }));

    // Better placeholder strategy for avatars
    const placeholderAvatars = [
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    ];

    const finalPresenters = presenters.map((p, idx) => ({
        ...p,
        avatar: placeholderAvatars[idx % placeholderAvatars.length]
    }));

    return (
        <div className="schedule-screen pt-header">
            {/* Day Tabs */}
            <div className="day-tabs flex w-full">
                {[1, 2, 3].map((day) => (
                    <button
                        key={day}
                        onClick={() => setActiveTab(day)}
                        className={`day-tab flex-1 py-3 text-center transition-all ${activeTab === day ? 'active' : ''}`}
                    >
                        <span className={`block font-medium ${activeTab === day ? 'text-white' : 'text-gray'}`}>Day {day}</span>
                        <span className={`block text-xs uppercase mt-1 ${activeTab === day ? 'text-blue' : 'text-gray'}`}>
                            APR {14 + day}
                        </span>
                    </button>
                ))}
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="section-title m-0">Schedule</h2>
                    <button className="text-blue text-sm">View Map</button>
                </div>

                <div className="schedule-list flex flex-col gap-4">
                    {scheduleByDay[activeTab].map((item, idx) => (
                        <div key={idx} className={`schedule-card flex gap-4 p-4 ${item.isBreak ? 'opacity-80 border-dashed border-surface-hover' : ''}`}>
                            <div className={`time-pill flex flex-col items-center justify-center text-center ${item.active ? 'active' : ''}`}>
                                <span className="font-medium text-xs leading-tight whitespace-pre-line">{item.time}</span>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        {item.tag && <span className="live-tag mb-2 inline-block">{item.tag}</span>}
                                        <h3 className="text-base text-white font-semibold leading-tight">{item.title}</h3>
                                    </div>
                                    {item.active && <Play size={20} color="#2D88FF" />}
                                </div>

                                <div className="flex items-center gap-3 mt-2 text-gray text-sm">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} className="text-blue" />
                                        <span>{item.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-gray"></span>
                                        <span>{item.duration}</span>
                                    </div>
                                </div>

                                {item.presenter && (
                                    <div className="flex items-center gap-2 mt-3">
                                        {item.avatar && <img src={item.avatar} alt={item.presenter} className="w-6 h-6 rounded-full object-cover" />}
                                        <span className="text-sm text-blue font-medium">{item.presenter}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Presenters */}
                <div className="flex justify-between items-center mt-8 mb-4">
                    <h2 className="section-title m-0">Featured Presenters</h2>
                    <button className="text-blue text-sm">View All</button>
                </div>

                <div className="speakers-horizontal-list flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {finalPresenters.map((presenter) => (
                        <div key={presenter.id} className="speaker-card flex-shrink-0 flex flex-col items-center text-center p-4 w-36">
                            <img src={presenter.avatar} alt={presenter.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-transparent" />
                            <h4 className="text-sm text-white font-semibold leading-tight">{presenter.name}</h4>
                            <p className="text-xs text-blue mt-1">{presenter.role}</p>
                        </div>
                    ))}
                </div>

                {/* Featured Presenter Spotlight */}
                <div className="spotlight-card flex gap-4 p-5 mt-4 mb-4">
                    <img src={placeholderAvatars[0]} alt="Featured Presenter" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg text-white font-semibold">Marcus Thorne</h3>
                        <p className="text-xs text-blue font-semibold tracking-wider uppercase mt-1">LEAD PRESENTER @ CFT</p>
                        <p className="text-sm text-gray mt-2 leading-relaxed">
                            Leading the Future of Flow Control with innovative solutions and global channel partner excellence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
