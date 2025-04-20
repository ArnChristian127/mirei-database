import Paimon from '../../assets/paimon.png';
import NavbarHorizontal from '../comp-navbar/NavbarHorizontal';
import NavbarVertical from '../comp-navbar/NavbarVertical';
export default function Placeholder() {
    return (
        <>
            <NavbarHorizontal/>
            <NavbarVertical/>
            <div className="mt-25 md:ml-[100px] px-6">
                <div className="h-screen flex items-center justify-center flex-col gap-2">
                    <img src={Paimon} className="w-full h-auto max-w-[100px]"/>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-bold">Please wait a moment...</h1>
                </div>
            </div>
        </>
    )
}