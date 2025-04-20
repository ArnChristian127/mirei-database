import lists from './NavbarVertical.json';
import { animate } from 'animejs';
import { useState, useEffect } from 'react';
export default function NavbarVertical() {
    const [isActivated, setActive] = useState(false);
    useEffect(() => {
        animate('.slide-in', {
            translateX: [-1000, 0],
            duration: 1000
        })
    }, [isActivated]);
    const isOn = () => {
        if (isActivated) {
            animate('.slide-out', {
                translateX: [0, -1000],
                duration: 1000
            })
            setTimeout(() => {
                setActive(false);
            }, 500);
        }
        else {
            setActive(true);
        }
    }
    return (
        <>
            <nav className="h-screen flex fixed top-0 z-40 text-white hidden md:flex">
                <div className="bg-blue-900 px-4">
                    <div className="flex flex-col gap-5 mt-20">
                        {lists.map((items, index) => (
                            <div className="flex flex-col justify-center items-center font-bold" key={index}>
                                <img src={`${import.meta.env.BASE_URL}${items.url}`} width={40} alt={items.name}/>
                                <a href="#">{items.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            <div className="top-18 fixed z-40 px-6 md:hidden text-white w-full">
                <div className="mx-auto container">
                    <button className="bg-blue-900 rounded-full p-1" onClick={() => isOn()} style={{display:isActivated ? 'none':'block'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list hover:fill-blue-400 focus:fill-blue-400" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                </div>
            </div>
            {isActivated && (
                <nav className="h-screen flex fixed top-0 z-40 text-white md:hidden w-full overflow-hidden">
                    <div className="bg-blue-900 w-50 px-6 w-full slide-in slide-out">
                        <div className="mx-auto container flex flex-col gap-5 mt-20 font-bold">
                            {lists.map((items, index) => (
                                <div className="flex items-center gap-2" key={index}>
                                    <img src={`${import.meta.env.BASE_URL}${items.url}`} width={40} alt={items.name}/>
                                    <a href="#">{items.name}</a>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 items-center mt-5">
                            <input className="border-2 border-white/75 rounded-md outline-none p-1 px-2 w-64 bg-blue-400/20 shadow-inner w-full" placeholder="Search" type="search"/>
                            <button className="px-3 text-md bg-blue-500 rounded-lg flex items-center gap-2 py-1">
                                Search
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>
                        <button className="bg-blue-500 px-2 p-1 text-md flex items-center gap-2 rounded-lg mt-3" onClick={() => isOn()}>
                            Close
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                            </svg>
                        </button>
                    </div>
                </nav>
            )}
        </>
    )
}