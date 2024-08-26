import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        const threshold = 100; // Adjust this value to set the scroll distance before the navbar becomes sticky
        if (window.scrollY > threshold) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Top Navbar: Visible only on medium screens and larger */}
            <header className={`transition duration-300 ease-in-out ${isSticky ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-md' : 'bg-transparent'} hidden md:block`}>
                <nav className={`relative px-[2vw] py-[3vh] ${isSticky ? 'shadow-lg' : ''}`}>
                    <div className="container mx-auto flex justify-between items-center max-w-[90vw]">
                        <img src="https://prasidpashmina.com/wp-content/uploads/2023/11/PrasidPashminaLogo_New-300x144.png" alt="Prasid Pashmina" style={{ width: '8vw', height: '5vh' }} />

                        <ul className="hidden md:flex space-x-[10vw]">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li className="flex relative group">
                                <a href="#" className="mr-[1vw]">Products</a>
                                <i className="fa-solid fa-chevron-down fa-2xs pt-[1vh]"></i>
                                <ul className="absolute bg-white p-[1vw] w-[20vw] top-[2vh] transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded-xl">
                                    <li className="text-sm hover:bg-purple-100 leading-8 p-[1vh] rounded-xl"><a href="#">Woven</a></li>
                                    <li className="text-sm hover:bg-purple-100 leading-8 p-[1vh] rounded-xl"><a href="#">Knitted</a></li>
                                    <li className="text-sm hover:bg-purple-100 leading-8 p-[1vh] rounded-xl"><a href="#">Accessories</a></li>
                                </ul>
                            </li>

                            <li className="flex relative group">
                                <a href="#" className="mr-[1vw]">Our Workflow</a>
                                <i className="fa-solid fa-chevron-down fa-2xs pt-[1vh]"></i>
                                <ul className="absolute bg-white p-[1vw] w-[20vw] top-[2vh] transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded-xl">
                                    <li className="text-sm hover:bg-purple-100 leading-8 p-[1vh] rounded-xl"><a href="#">Woven Production</a></li>
                                    <li className="text-sm hover:bg-purple-100 leading-8 p-[1vh] rounded-xl"><a href="#">Knitted Production</a></li>
                                </ul>
                            </li>
                        </ul>

                        <a href="#" className="bg-[#523D53] px-[5vw] py-[1vh] rounded-3xl hover:bg-violet-500 text-white hidden md:flex" role="button">Reach Out</a>
                    </div>
                </nav>
            </header>

            {/* Floating Circle Button: Visible only on mobile */}
            <button
                className="fixed bottom-6 right-6 bg-[#523D53] text-white w-14 h-14 rounded-full flex items-center justify-center z-50 md:hidden"
                onClick={toggleMobileMenu}
            >
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span>
                        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} fa-xl`}></i>
                    </span>
                </div>
            </button>
            {/* Full-Page Mobile Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-500 ease-in-out z-40`}>
                <ul className="text-center text-2xl space-y-6">
                    <li><a href="#" onClick={toggleMobileMenu}>Home</a></li>
                    <li><a href="#" onClick={toggleMobileMenu}>About</a></li>
                    <li><a href="#" onClick={toggleMobileMenu}>Products</a></li>
                    <li><a href="#" onClick={toggleMobileMenu}>Our Workflow</a></li>
                    <li><a href="#" onClick={toggleMobileMenu}>Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
