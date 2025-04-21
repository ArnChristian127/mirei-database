import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Paimon from './assets/paimon.png';
export function CurrentBanner() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
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
            <div className="w-full flex items-center justify-center flex-col gap-2 mt-30">
                <img src={Paimon} className="w-full h-auto max-w-[100px]"/>
                <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-bold">Please wait a moment...</h1>
            </div>
        );
    }
    return (
        <>
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
        </>
    );
}
export function CurrentFarmable() {
    const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'mirei_violet_court'));
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
            <div className="w-full flex items-center justify-center flex-col gap-2 mt-30">
                <img src={Paimon} className="w-full h-auto max-w-[100px]"/>
                <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-bold">Please wait a moment...</h1>
            </div>
        );
    }
    return (
        <>
            <div className="flex items-center flex-wrap gap-3 mt-5 text-white">
                {dayList.map((items, index) => (
                    <button key={index} className="px-3 py-2 bg-blue-500 rounded-lg font-bold">
                        {items}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-10 text-blue-400 text-white gap-5">
                <div className="bg-blue-900 px-6 py-3 rounded-lg min-h-[450px]">
                    <div className="flex-col flex gap-5">
                        <h1 className="text-3xl font-bold">Violet Court</h1>
                        <div className="flex items-center gap-13 flex-wrap">
                            {data.map((items, index) => (
                                <div className="flex flex-col items-center max-w-[50px] justify-between">
                                    <img src={`${import.meta.env.BASE_URL}/firebase/character-icon/${items.name}.png`} className="w-full h-auto" alt={items.name}/>
                                    <p className="font-bold text-sm text-center">{items.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}