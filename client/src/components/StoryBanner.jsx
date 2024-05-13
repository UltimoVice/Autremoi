import { Link } from "react-router-dom"

export const StoryBanner = () => {
    return (
        <div className="relative top-[-164px] z-[-1]">
            <video muted autoPlay loop className="w-full">
                <source src="src\assets\StoryBanner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           <Link to={"/news"}>
            <button className="text-white bg-transparent p-2 border rounded-lg text-center hover:font-semibold text-2xl absolute top-2/3 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 cursor-pointer">Vai al Catalogo </button>
           </Link>
        </div>
    )
}
