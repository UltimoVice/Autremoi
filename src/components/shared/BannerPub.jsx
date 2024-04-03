export const BannerPub = () => {
    return (
        <div className="relative">
            <video muted autoPlay loop className="w-full">
                <source src="src\assets\banner pub.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2 className="text-white text-center text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">AUTREMOI</h2>
            <a className="text-white text-center hover:underline hover:font-semibold text-2xl absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " href="">Visualizza Catalogo</a>
        </div>
    )
}
