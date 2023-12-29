import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center rounded-md py-2 sticky top-0">
            <div className="flex-1">
                <Link href="/" className="text-xl md:text-3xl font-black uppercase text-rose-600">
                    Pixel
                </Link>
            </div>
            <div className="flex items-center uppercase gap-5">
                <Link
                    href="/price"
                    className="text-rose-600 rounded-md"
                >
                    Price
                </Link>
                <Link href="/about" className="text-rose-600 rounded-md">
                    About me
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
