import React, { useState, useEffect } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';
import { loadScheduleData, loadPresentersData } from '../utils/dataLoader';

export default function ScheduleScreen() {
    const [activeTab, setActiveTab] = useState(1);
    const [scheduleData, setScheduleData] = useState(null);
    const [presentersData, setPresentersData] = useState([]);

    useEffect(() => {
        loadScheduleData().then(data => {
            setScheduleData(data);
        }).catch(err => {
            console.error("Failed to load schedule:", err);
        });

        loadPresentersData().then(data => {
            setPresentersData(data);
        }).catch(err => {
            console.error("Failed to load presenters:", err);
        });
    }, []);

    const finalPresenters = presentersData.filter(p => !p.isSpotlight);
    const spotlightPresenter = presentersData.find(p => p.isSpotlight);

    // If data isn't loaded yet, we render a skeleton or the static parts to keep it "invisible"
    const currentDaySchedule = scheduleData ? scheduleData[activeTab] || [] : [];

    return (
        <div className="schedule-screen pt-header">
            {/* Day Tabs */}
            <div className="day-tabs flex w-full">
                {[1, 2, 3].map((day) => (
                    <button
                        key={day}
                        onClick={() => {
                            setActiveTab(day);
                            window.scrollTo(0, 0);
                            const contentArea = document.querySelector('.content-area');
                            if (contentArea) contentArea.scrollTo(0, 0);
                        }}
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
                </div>

                <div className="schedule-list flex flex-col gap-4">
                    {currentDaySchedule.map((item, idx) => (
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

                {/* Presenters */}
                <div className="flex justify-between items-center mt-8 mb-4">
                    <h2 className="section-title m-0">Presenters</h2>
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
                {spotlightPresenter && (
                    <div className="spotlight-card flex gap-4 p-5 mt-4 mb-4">
                        <img src={spotlightPresenter.avatar} alt={spotlightPresenter.name} className="w-16 h-16 rounded-full object-cover" />
                        <div>
                            <h3 className="text-lg text-white font-semibold">{spotlightPresenter.name}</h3>
                            <p className="text-xs text-blue font-semibold tracking-wider uppercase mt-1">{spotlightPresenter.role}</p>
                            <p className="text-sm text-gray mt-2 leading-relaxed">
                                {spotlightPresenter.bio}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
