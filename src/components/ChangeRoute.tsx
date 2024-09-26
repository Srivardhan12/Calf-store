import { Link } from "react-router-dom"

export const ChangeRoute = () => {
    return (
        <>
            <div className="flex justify-between">
                <Link to={"/buffalo"} className="text-center w-1/2 border py-1"><span>Buffalo</span></Link>
                <Link to={"/cow"} className="text-center w-1/2 border py-1"><span>Cow</span></Link>
            </div>
        </>
    )
}