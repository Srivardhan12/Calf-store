import { Link } from "react-router-dom"

export const Appbar = () => {
    return (
        <>
            <div className="flex justify-between items-center py-2">
                <Link to={'/'}><span className="font-bold">LOGO</span></Link>
                <div>
                    <Link to={'/login'}><button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2">Login</button></Link>
                    <Link to={'/signup'}><button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2">Sign up</button></Link>
                </div>
            </div>
        </>
    )
}