import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

const Header = () => {
    const url = "https://i.ibb.co/VTgMRCs/hero-1.png";
    return (
        <header className="h-screen bg-cover bg-left-top bg-no-repeat px-2" style={{ background: `url(${url})` }}>
            <div className="container mx-auto">
                <Navbar />
                <Banner />
            </div>
        </header>
    );
};

export default Header;
