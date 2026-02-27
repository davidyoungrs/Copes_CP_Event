import Papa from 'papaparse';
import { CONFIG } from '../data/config';

export const loadScheduleData = async () => {
    const source = CONFIG.SCHEDULE_SOURCE_URL || CONFIG.LOCAL_SCHEDULE_PATH;

    return new Promise((resolve, reject) => {
        Papa.parse(source, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const schedule = results.data.map(item => ({
                    day: parseInt(item.Day),
                    time: item.Time.replace(' ', '\n'), // Match the newline format in the original code
                    title: item.Title,
                    location: item.Location,
                    duration: item.Duration,
                    presenter: item.Presenter,
                    avatar: item.Avatar,
                    isBreak: item.IsBreak === 'TRUE' || item.IsBreak === 'true',
                    tag: item.Tag || null
                }));

                // Group by day for easier UI usage
                const grouped = schedule.reduce((acc, item) => {
                    if (!acc[item.day]) acc[item.day] = [];
                    acc[item.day].push(item);
                    return acc;
                }, {});

                resolve(grouped);
            },
            error: (error) => {
                console.error("Error parsing schedule CSV:", error);
                reject(error);
            }
        });
    });
};

export const loadPresentersData = async () => {
    const source = CONFIG.PRESENTERS_SOURCE_URL || CONFIG.LOCAL_PRESENTERS_PATH;

    return new Promise((resolve, reject) => {
        Papa.parse(source, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const presenters = results.data.map((item, idx) => ({
                    id: idx + 1,
                    name: item.Name,
                    role: item.Role,
                    avatar: item.Avatar,
                    bio: item.Bio,
                    isSpotlight: item.IsSpotlight === 'TRUE' || item.IsSpotlight === 'true'
                }));
                resolve(presenters);
            },
            error: (error) => {
                console.error("Error parsing presenters CSV:", error);
                reject(error);
            }
        });
    });
};
