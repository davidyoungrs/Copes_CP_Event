import { useState } from 'react';
import { Heart, Map as MapIcon } from 'lucide-react';

export default function DiscoverScreen() {
    const tabs = ['All', 'Eat', 'Things to Do', 'Shopping', 'Nightlife'];
    const [activeTab, setActiveTab] = useState('All');
    const [viewAllEat, setViewAllEat] = useState(false);

    const placesToEat = [
        {
            title: "Taste of Texas",
            desc: 'Prime rib & steaks in a rustic setting with vast salad bar.',
            price: '$$$',
            image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=300&auto=format&fit=crop',
            url: 'https://tasteoftexas.com/'
        },
        {
            title: "Brenner's Steakhouse",
            desc: 'Classic steakhouse & lush gardens in Katy/Memorial.',
            price: '$$$$',
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.brennerssteakhouse.com/location/brenners-steakhouse/'
        },
        {
            title: "State Fare Kitchen & Bar",
            desc: 'Upscale Texas-inspired comfort food.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.statefaretx.com'
        },
        {
            title: "Pastelito's Cafe",
            desc: 'Venezuelan pastries, arepas, and empanadas.',
            price: '$',
            image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=300&auto=format&fit=crop'
        },
        {
            title: "Resilience Viet Kitchen",
            desc: 'Classic Vietnamese dishes like pho and banh mi.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=300&auto=format&fit=crop',
            url: 'https://resiliencevietkitchen.com/'
        },
        {
            title: "Matsu",
            desc: 'Authentic sushi, sashimi, and Japanese cuisine.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=300&auto=format&fit=crop',
            url: 'http://www.matsusushibar.net'
        },
        {
            title: "Flip N Patties",
            desc: 'Filipino-infused burgers and street food.',
            price: '$',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.flipnpatties.com'
        },
        {
            title: "Peacock Indian",
            desc: 'Rich flavors of Indian cuisine like Butter Chicken.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=300&auto=format&fit=crop'
        },
        {
            title: "Naam Khao Thai",
            desc: 'Authentic Thai featuring Pad Thai and Green Curry.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=300&auto=format&fit=crop',
            url: 'https://naamkhao.com'
        },
        {
            title: "Lasagna House III",
            desc: 'Established Italian ristorante serving traditional classics.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.lasagnahouse.com'
        },
        {
            title: "BB's Tex-Orleans",
            desc: 'Unique blend of Texas & New Orleans cuisine.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=300&auto=format&fit=crop',
            url: 'https://bbstexorleans.com/locations/energy-corridor/'
        },
        {
            title: "024 Grille",
            desc: 'Upscale American dining near the Energy Corridor.',
            price: '$$$',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.024grille.com'
        },
        {
            title: "Arturo Boada Cuisine",
            desc: 'Tapas-style Latin & Italian fusion.',
            price: '$$$',
            image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.arturoboadacuisine.com'
        },
        {
            title: "BCN Taste & Tradition",
            desc: 'Michelin-starred authentic Spanish dining.',
            price: '$$$$',
            image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.bcnhouston.com'
        },
        {
            title: "Le Jardinier",
            desc: 'Michelin-starred French culinary art.',
            price: '$$$$',
            image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.lejardinier-houston.com'
        },
        {
            title: "The Annie Café and Bar",
            desc: 'Texas-influenced American cuisine in an elegant setting.',
            price: '$$$',
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.theanniehouston.com/'
        },
        {
            title: "Coltivare",
            desc: 'Italian-influenced small plates and wood-fired pizzas.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.agricolehospitality.com/coltivare'
        },
        {
            title: "Nancy's Hustle",
            desc: 'Modern bistro known for creative dishes and natural wines.',
            price: '$$$',
            image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.nancyshustle.com'
        },
        {
            title: "Fadi's Mediterranean Grill",
            desc: 'Cafeteria-style Mediterranean with daily specials.',
            price: '$$',
            image: '/fadis-med.png',
            url: 'https://www.fadiscuisine.com'
        },
        {
            title: "Mary'z Mediterranean Cuisine",
            desc: 'Lebanese favorites & Hookah.',
            price: '$$',
            image: '/maryz-med.png',
            url: 'https://maryzmediterranean.com'
        },
        {
            title: "The Halal Guys",
            desc: 'Fast-casual Middle Eastern chicken and gyro over rice.',
            price: '$',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=300&auto=format&fit=crop',
            url: 'https://thehalalguys.com/locations/3008-ella-blvd-houston',
            halal: true
        },
        {
            title: "Aga's Restaurant & Catering",
            desc: 'Renowned Indian & Pakistani halal dishes.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.agasrestaurant.com/',
            halal: true
        },
        {
            title: "M&M Grill",
            desc: 'Burgers, cheesesteaks & Mexican fare using halal meats.',
            price: '$',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop',
            url: 'https://places.singleplatform.com/mm-grill/menu?ref=google',
            halal: true
        }
    ];

    const thingsToDo = [
        {
            title: 'Museum District',
            desc: '19 world-class museums',
            price: 'Free',
            image: 'https://images.pexels.com/photos/4258559/pexels-photo-4258559.jpeg?auto=compress&cs=tinysrgb&w=300',
            url: 'https://houstonmuseumdistrict.org/'
        },
        {
            title: 'Hermann Park',
            desc: 'Gardens & outdoor recreation',
            price: 'Free',
            image: '/hermann-park.png',
            url: 'https://www.hermannpark.org/'
        },
        {
            title: 'Downtown Aquarium',
            desc: 'Dining & marine discovery',
            price: '$$',
            image: '/downtown-aquarium.png',
            url: 'https://www.aquariumrestaurants.com/downtownaquariumhouston/'
        },
        {
            title: 'Buffalo Bayou Park',
            desc: 'Hiking trails & city views',
            price: 'Free',
            image: '/buffalo-bayou.png',
            url: 'https://buffalobayou.org/'
        },
        {
            title: 'Houston Museum of Natural Science',
            desc: 'Dinosaur skeletons & butterfly center',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.hmns.org/'
        },
        {
            title: 'Houston Zoo',
            desc: 'Over 6,000 animals in lush habitats',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.houstonzoo.org/'
        },
        {
            title: 'The Galleria',
            desc: 'Premier shopping & ice skating rink',
            price: 'Free',
            image: '/galleria.png',
            url: 'https://www.simon.com/mall/the-galleria'
        },
        {
            title: 'Museum of Fine Arts',
            desc: 'Expansive collection of global art',
            price: '$$',
            image: '/mfah.jpg',
            url: 'https://www.mfah.org/'
        }
    ];

    const nightlife = [
        {
            title: 'Anvil Bar & Refuge',
            desc: 'Pioneering craft cocktail bar with 100 classics.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=300&auto=format&fit=crop',
            url: 'http://www.anvilhouston.com'
        },
        {
            title: 'Julep',
            desc: 'Southern-style cocktails and elegant whiskey selection.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.julephouston.com'
        },
        {
            title: 'Axelrad Beer Garden',
            desc: 'Vibrant beer garden with hammocks and live music.',
            price: '$',
            image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.axelradbeergarden.com/'
        },
        {
            title: 'Numbers Nightclub',
            desc: 'Iconic alternative music venue and 80s dance club.',
            price: '$$',
            image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=300&auto=format&fit=crop',
            url: 'https://numbersnightclub.com/'
        },
        {
            title: 'Cidercade Houston',
            desc: 'Unlimited arcade games and hard cider on tap.',
            price: '$',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.cidercade.com/'
        },
        {
            title: 'Saint Arnold Brewing Company',
            desc: "Texas' oldest craft brewery with a massive beer hall and vibrant garden.",
            price: '$$',
            image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?q=80&w=300&auto=format&fit=crop',
            url: 'https://www.saintarnold.com/'
        }
    ];

    const shopping = [
        {
            title: 'The Galleria',
            desc: "Texas' largest mall with 400+ stores and an ice rink.",
            image: '/galleria.png',
            url: 'https://www.simon.com/mall/the-galleria'
        },
        {
            title: 'Rice Village',
            desc: 'Walkable district with eclectic boutiques and dining.',
            image: '/rice-village.png',
            url: 'https://ricevillagedistrict.com/'
        },
        {
            title: 'River Oaks District',
            desc: 'Ultra-luxury open-air shopping and global brands.',
            image: '/river-oaks.png',
            url: 'https://www.riveroaksdistrict.com/'
        },
        {
            title: 'Highland Village',
            desc: 'Upscale boutiques and national retailers in River Oaks.',
            image: 'https://images.unsplash.com/photo-1692428572326-66edcffafca8?auto=format&fit=crop&q=80&w=300',
            url: 'https://www.highlandvillage.com/'
        },
        {
            title: 'Houston Premium Outlets',
            desc: '145+ designer outlet stores with daily savings.',
            image: 'https://images.unsplash.com/photo-1631330200636-dea9b13ca2f1?auto=format&fit=crop&q=80&w=300',
            url: 'https://www.premiumoutlets.com/outlet/houston'
        },
        {
            title: 'Memorial City Mall',
            desc: 'Modern mall with an NHL-sized ice rink and carousel.',
            image: 'https://images.unsplash.com/photo-1749523909993-236463f7ff93?auto=format&fit=crop&q=80&w=300',
            url: 'https://www.memorialcitymall.com/'
        },
        {
            title: 'CityCentre',
            desc: 'Vibrant mixed-use plaza for shopping and live music.',
            image: 'https://images.unsplash.com/photo-1706197107628-42f6aed38356?auto=format&fit=crop&q=80&w=300',
            url: 'https://citycentrehouston.com/'
        },
        {
            title: 'Katy Mills',
            desc: 'Massive indoor outlet mall with 175+ value stores.',
            image: '/katymills.jpg',
            url: 'https://www.simon.com/mall/katy-mills'
        }
    ];

    const shouldShowFullEatList = activeTab === 'Eat' || viewAllEat;
    const displayEatList = shouldShowFullEatList ? placesToEat : placesToEat.slice(0, 7);

    return (
        <div className="discover-screen pt-header">
            {/* Disclaimer */}
            <div className="px-4 pt-4 pb-2 text-center text-[10px] text-gray uppercase tracking-widest border-b border-white border-opacity-10">
                THIS INFORMATION HERE IS NOT A RECOMMENDATION BY CELEROS
            </div>

            {/* Scrollable Tabs */}
            <div className="flex overflow-x-auto gap-6 px-4 py-3 border-b border-white border-opacity-10 sticky top-[60px] bg-bg-color z-10">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setActiveTab(tab);
                            if (tab !== 'All') setViewAllEat(false);
                            window.scrollTo(0, 0);
                            const contentArea = document.querySelector('.content-area');
                            if (contentArea) contentArea.scrollTo(0, 0);
                        }}
                        className={`flex-shrink-0 text-sm font-medium pb-2 ${activeTab === tab ? 'text-blue border-b-2 border-blue' : 'text-gray'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="p-4">
                {/* Top Places to Eat */}
                {(activeTab === 'All' || activeTab === 'Eat') && (
                    <>
                        <div className="flex justify-between items-center mb-4 mt-2">
                            <h2 className="text-xl font-bold text-white m-0">Top Places to Eat</h2>
                            {!shouldShowFullEatList && (
                                <button className="text-blue text-sm" onClick={() => setViewAllEat(true)}>View All</button>
                            )}
                        </div>

                        {shouldShowFullEatList ? (
                            <div className="grid grid-cols-2 gap-4 pb-4">
                                {displayEatList.map((place, idx) => (
                                    <div key={idx} className="place-card rounded-2xl bg-white shadow-sm p-2">
                                        <div className="relative h-32 w-full overflow-hidden rounded-xl mb-2 group">
                                            <a href={place.url || `https://www.google.com/search?q=${encodeURIComponent(place.title + " restaurant Houston")}`} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                                                <img src={place.image} alt={place.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                            </a>
                                        </div>
                                        <div className="px-1 pb-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-sm text-slate-900 font-semibold leading-tight line-clamp-1">{place.title}</h3>
                                            </div>
                                            <div className="flex gap-2 mb-1">
                                                <span className="bg-surface-hover text-blue text-[10px] font-bold px-1.5 py-0.5 rounded inline-block">{place.price}</span>
                                                {place.halal && <span className="bg-[#2ecc71] bg-opacity-20 text-[#2ecc71] text-[10px] font-bold px-1.5 py-0.5 rounded inline-block">HALAL</span>}
                                            </div>
                                            <p className="text-xs text-slate-500 line-clamp-2">{place.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="places-horizontal-list flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sticky-scroll">
                                {displayEatList.map((place, idx) => (
                                    <div key={idx} className="place-card flex-shrink-0 w-64 rounded-2xl bg-white shadow-sm p-2">
                                        <div className="relative h-36 w-full overflow-hidden rounded-xl mb-3 group">
                                            <a href={place.url || `https://www.google.com/search?q=${encodeURIComponent(place.title + " restaurant Houston")}`} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                                                <img src={place.image} alt={place.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                            </a>
                                        </div>
                                        <div className="px-2 pb-2">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-base text-slate-900 font-semibold line-clamp-1">{place.title}</h3>
                                                <div className="flex gap-2">
                                                    <span className="bg-surface-hover text-blue text-xs font-bold px-2 py-1 rounded">{place.price}</span>
                                                    {place.halal && <span className="bg-[#2ecc71] bg-opacity-20 text-[#2ecc71] text-xs font-bold px-2 py-1 rounded">HALAL</span>}
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-1 line-clamp-2">{place.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* Must-See Experience & Things to Do */}
                {(activeTab === 'All' || activeTab === 'Things to Do') && (
                    <>
                        <div className="mt-8 mb-4">
                            <h2 className="text-xl font-bold text-white m-0">Must-See Experience</h2>
                        </div>

                        <a href="https://spacecenter.org/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                            <div className="must-see-card relative h-40 rounded-2xl overflow-hidden mb-8 group bg-black">
                                <img src="/space shuttle.jpg" alt="Space Center" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-full opacity-60"></div>
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-blue text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">$$</span>
                                </div>
                                <div className="absolute inset-0 p-4 pt-10 flex flex-col justify-end pb-4">
                                    <h3 className="text-2xl text-white font-bold mb-1">Space Center Houston</h3>
                                    <p className="text-sm text-gray">Journey to the stars at the home of NASA Johnson Space Center.</p>
                                </div>
                            </div>
                        </a>

                        <div className="mt-8 mb-4">
                            <h2 className="text-xl font-bold text-white m-0">Things to Do</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {thingsToDo.map((thing, idx) => (
                                <a key={idx} href={thing.url} target="_blank" rel="noopener noreferrer" className="thing-card block group rounded-2xl bg-white shadow-sm p-2">
                                    <div className="h-32 w-full overflow-hidden rounded-xl mb-2">
                                        <img src={thing.image} alt={thing.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    </div>
                                    <div className="px-1 pb-1">
                                        <h4 className="text-sm text-slate-900 font-semibold leading-tight mb-1">{thing.title}</h4>
                                        <p className="text-xs text-slate-500">{thing.desc}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {/* Shopping */}
                {(activeTab === 'All' || activeTab === 'Shopping') && (
                    <>
                        <div className="flex justify-between items-center mb-4 mt-8">
                            <h2 className="text-xl font-bold text-white m-0">Top Shopping Locations</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pb-4">
                            {shopping.map((shop, idx) => (
                                <a key={idx} href={shop.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                                    <div className="place-card rounded-2xl bg-white shadow-sm p-2">
                                        <div className="relative h-32 w-full overflow-hidden rounded-xl mb-2 group">
                                            <img src={shop.image} alt={shop.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        </div>
                                        <div className="px-1 pb-1">
                                            <h3 className="text-sm text-slate-900 font-semibold leading-tight line-clamp-1 mb-1">{shop.title}</h3>
                                            <p className="text-xs text-slate-500 line-clamp-2">{shop.desc}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )
                }

                {/* Nightlife */}
                {
                    (activeTab === 'All' || activeTab === 'Nightlife') && (
                        <>
                            <div className="mt-8 mb-4">
                                <h2 className="text-xl font-bold text-white m-0">Nightlife Spots</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {nightlife.map((spot, idx) => (
                                    <a key={idx} href={spot.url} target="_blank" rel="noopener noreferrer" className="thing-card block group rounded-2xl bg-white shadow-sm p-2">
                                        <div className="h-32 w-full overflow-hidden rounded-xl mb-2 relative">
                                            <img src={spot.image} alt={spot.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                            <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-blue text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                {spot.price}
                                            </div>
                                        </div>
                                        <div className="px-1 pb-1">
                                            <h4 className="text-sm text-slate-900 font-semibold leading-tight mb-1">{spot.title}</h4>
                                            <p className="text-xs text-slate-500">{spot.desc}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </>
                    )
                }

                {/* Nearby Attractions */}
                {
                    activeTab === 'All' && (
                        <>
                            <div className="mt-8 mb-4">
                                <h2 className="text-xl font-bold text-white m-0">Nearby Attractions</h2>
                            </div>

                            <div className="map-card relative h-48 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
                                <button className="absolute btn-primary flex items-center gap-2">
                                    <MapIcon size={18} color="white" />
                                    Open Interactive Map
                                </button>
                            </div>
                        </>
                    )
                }

            </div >
        </div >
    );
}
