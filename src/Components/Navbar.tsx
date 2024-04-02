import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-black p-8">
            <nav className="container">
                <ul className="flex justify-center item-center gap-6">
                    <li>
                        <Link
                            className="text-2xl font-bold uppercase text-center text-white"
                            href="/"
                        >
                            Analytics
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="text-2xl font-bold uppercase text-center text-white"
                            href="/carousel"
                        >
                            Carousel
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;