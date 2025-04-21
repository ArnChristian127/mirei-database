import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import NavbarHorizontal from './components/comp-navbar/NavbarHorizontal';
import NavbarVertical from './components/comp-navbar/NavbarVertical';
import Resetime from './components/comp-time/Resetime';
import Timezone from './timezone.json';
import { CurrentBanner, CurrentFarmable } from './firebase-functions';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';
export default function() {
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
                <CurrentBanner/>
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
                    <CurrentFarmable/>
                </div>
            </section>
            <footer className="mt-25 md:ml-[100px] px-6 py-10 bg-blue-800 text-white flex items-center justify-center flex-col gap-3">
                <h1 className='="font-bold text-xl'>&copy;{new Date().getFullYear()} ArnDev. All rights reserved</h1>
                <div className="flex items-center gap-3">
                    <a href="https://www.facebook.com/arnchristian.rosales.9/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook hover:filter-blue-400" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/asah.irei/profilecard/?igsh=MXc3b2NpODZlMjR0cQ%3D%3D&fbclid=IwZXh0bgNhZW0CMTAAAR4_uRpHXsjoV3Q0s2A9BC_HXRFD5D7E35QQl8erg9ZU7jWIFyq6ARUtCuzLkw_aem_I3mkqKtXxLg2OTHOAWZLcQ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-instagram hover:filter-blue-400" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </a>
                    <a href="https://x.com/HikawaRaye">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-twitter-x hover:filter-blue-400" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </>
    )
}