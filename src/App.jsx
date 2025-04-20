import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import NavbarHorizontal from './components/comp-navbar/NavbarHorizontal';
import NavbarVertical from './components/comp-navbar/NavbarVertical';
import Resetime from './components/comp-time/Resetime';
import Timezone from './timezone.json';
import Placeholder from './components/comp-placeholder/Placeholder';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';
export default function() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'mirei_banner_current'));
                const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(fetchedData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return (
            <Placeholder/>
        );
    }
    return (
        <>
            <NavbarHorizontal/>
            <NavbarVertical/>
            <section className="mt-25 md:ml-[100px] px-6">
                <div className="container mx-auto flex justify-center">
                    <Swiper
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="w-full max-h-[400px]">
                        <SwiperSlide><img src={`${import.meta.env.BASE_URL}/assets/carrousel-bg/cl-1.png`} className="w-full h-full object-center object-cover"/></SwiperSlide>
                        <SwiperSlide><img src={`${import.meta.env.BASE_URL}/assets/carrousel-bg/cl-2.png`}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className="grid grid-cols-1 container mx-auto mt-10 text-blue-400">
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Welcome to Mirei Database</h1>
                        <p className="text-xl lg:pr-50">
                            Looking to optimize your gameplay and stay on top of everything in Teyvat? Genshin-Builds is your ultimate all-in-one companion for Genshin Impact!
                            Whether you're a new traveler or a seasoned adventurer, this powerful resource hub offers everything you need to build stronger characters and plan smarter.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-50 md:ml-[100px] px-6 py-10">
                <div className="grid grid-cols-1 container mx-auto mt-10 text-blue-400">
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Banners</h1>
                        <p className="text-xl lg:pr-50">
                            Check out the latest banners and their duration in Genshin Impact.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-10 text-white gap-10">
                    {data.map((items, index) => (
                        <div className="group" key={index}>
                            <div className="w-full rounded-lg bg-blue-900 group-hover:-translate-y-2 transform transition-transform duration-500 group:hover hover-shadow" key={index}>
                                <div className="overflow-hidden w-full">
                                    <img src={`${import.meta.env.BASE_URL}firebase/latest-banner/${items.id}.jpg`} className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-lg"/>
                                </div>
                                <div className="p-3">
                                    <h1 className="font-bold text-xl">{items.name}</h1>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-25 md:ml-[100px] px-6 py-10">
                <div className="grid grid-cols-1 container mx-auto mt-10 text-blue-400">
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Server Time</h1>
                        <p className="text-xl lg:pr-50">
                            The daily reset occurs at 04:00 (4 AM), depending on your server's time zone.  The weekly reset takes place every Monday at 04:00 (4 AM).
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  container mx-auto mt-10 text-white gap-10">
                    {Timezone.map((items, index) => (
                        <div className="bg-blue-900 px-6 text-center p-2 py-5 flex flex-col gap-3 rounded-lg transition duration-300 hover:bg-blue-800" key={index}>
                            <div>
                                <h1 className="text-2xl font-bold">{items.name} <span className="text-lg text-gray-400">({items.gmt})</span></h1>
                                <div className="bg-blue-400 px-4 py-2 rounded-lg mt-3">
                                    <h1 className="text-lg text-gray-200 font-bold">Daily Reset</h1>
                                    <Resetime timezone={items.data} type="daily"/>
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue-400 px-4 py-2 rounded-lg mt-3">
                                    <h1 className="text-lg text-gray-200 font-bold">Weekly Reset</h1>
                                    <Resetime timezone={items.data} type="weekly"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-25 md:ml-[100px] px-6 py-10">
                <div className="grid grid-cols-1 container mx-auto mt-10 text-blue-400">
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Weekly Farmable</h1>
                        <p className="text-xl lg:pr-50">
                            Discover which characters and weapons are farmable weekly.
                        </p>
                    </div>
                    <div className="flex items-center flex-wrap gap-3 mt-5 text-white">
                        <button className="px-3 py-2 bg-blue-500 rounded-lg font-bold">Monday</button>
                        <button className="px-3 py-2 bg-blue-500 rounded-lg font-bold">Tuesday</button>
                        <button className="px-3 py-2 bg-blue-500 rounded-lg font-bold">Wednesday</button>
                        <button className="px-3 py-2 bg-blue-500 rounded-lg font-bold">Thursday</button>
                        <button className="px-3 py-2 bg-blue-500 rounded-lg font-bold">Friday</button>
                        <button className="px-3 py-2 bg-blue-500 rounded-lg font-bold">Saturday</button>
                        <button className="px-3 py-2 bg-blue-500 rounded-lg font-bold">Sunday</button>
                    </div>
                </div>
            </section>
        </>
    )
}