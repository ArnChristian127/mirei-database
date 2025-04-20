import Paimon from '../../assets/paimon.png';
export default function NavbarHorizontal() {
    return (
        <>
            <nav className="text-white bg-gradient-to-r from-sky-400 to-blue-900 px-6 py-3 fixed top-0 z-50 w-full">
                <div className="container mx-auto justify-between items-center flex">
                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold">
                            Mirei<span className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Database</span>
                        </h1>
                        <img src={Paimon} className="w-10"/>
                    </div>
                    <div className="flex gap-5 hidden md:flex">
                        <div className="flex gap-2">
                            <input className="border-2 border-white/75 rounded-md outline-none p-1 px-2 w-64 bg-blue-400/20 shadow-inner" placeholder="Search" type="search"/>
                            <button className="px-3 text-md bg-blue-500 rounded-lg flex items-center gap-2">
                                Search
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}