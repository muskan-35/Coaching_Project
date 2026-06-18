import { useState } from "react";
import { Link } from "react-router-dom"
import { LogIn, Menu, X, ChevronDown, Briefcase, MessageSquare, FolderOpen, GraduationCap, HelpCircle } from "lucide-react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

   return(
    <>
        <nav className="bg-slate-900 text-white sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div>
                    <img src="/logo/dev.png" alt="image" className="w-48 transition duration-300 hover:scale-110 cursor-pointer"/>
                </div>

                {/*Destop Menu */}
                <div className="hidden md:flex">
                    <ul className="hidden md:flex  items-center gap-8 font-medium">
                        <li className="hover:text-amber-400 cursor-pointer transition duration-300 text-xl text-blue-400">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/about">About</Link>
                        </li>
                         <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                        {/* More Dropdown */}
                        <li className="relative">
                            <button 
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl flex items-center gap-1"
                            >
                                More <ChevronDown size={18} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {dropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-slate-800 rounded-lg shadow-lg border border-slate-700 z-50 min-w-max">
                                    <Link to="/placements" onClick={() => setDropdownOpen(false)}>
                                        <div className="px-4 py-2 hover:bg-slate-700 hover:text-amber-300 transition duration-300 cursor-pointer whitespace-nowrap rounded-t-lg flex items-center gap-3">
                                            <Briefcase size={18} />
                                            Placements
                                        </div>
                                    </Link>
                                    <Link to="/reviews" onClick={() => setDropdownOpen(false)}>
                                        <div className="px-4 py-2 hover:bg-slate-700 hover:text-amber-300 transition duration-300 cursor-pointer whitespace-nowrap border-t border-slate-700 flex items-center gap-3">
                                            <MessageSquare size={18} />
                                            Reviews
                                        </div>
                                    </Link>
                                    <Link to="/faq" onClick={() => setDropdownOpen(false)}>
                                        <div className="px-4 py-2 hover:bg-slate-700 hover:text-amber-300 transition duration-300 cursor-pointer whitespace-nowrap border-t border-slate-700 rounded-b-lg flex items-center gap-3">
                                            <HelpCircle size={18} />
                                            FAQ
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>

                    {/* button */}
                    <Link to="/login">
                        <button className="bg-blue-500 rounded cursor-pointer px-4 py-1 font-semibold hover:bg-blue-700 transition duration-300 ml-10">
                            Login
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Botton */}
                <div className="md:hidden">
                    <button onClick={()=> setIsOpen(!isOpen)}>
                        {isOpen ? <X size={32} /> : <Menu size={32}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 px-6 pb-5">
                    <ul className="flex flex-col gap-5 font-medium pt-4">
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl text-blue-600">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                        {/* More Dropdown Mobile */}
                        <li className="relative">
                            <button 
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl flex items-center gap-2 w-full"
                            >
                                More <ChevronDown size={18} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {dropdownOpen && (
                                <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 z-50 mt-2 w-full">
                                    <Link to="/placements" onClick={() => setDropdownOpen(false)}>
                                        <div className="px-4 py-2 hover:bg-slate-700 hover:text-amber-300 transition duration-300 cursor-pointer whitespace-nowrap rounded-t-lg flex items-center gap-3">
                                            <Briefcase size={18} />
                                            Placements
                                        </div>
                                    </Link>
                                    <Link to="/reviews" onClick={() => setDropdownOpen(false)}>
                                        <div className="px-4 py-2 hover:bg-slate-700 hover:text-amber-300 transition duration-300 cursor-pointer whitespace-nowrap border-t border-slate-700 flex items-center gap-3">
                                            <MessageSquare size={18} />
                                            Reviews
                                        </div>
                                    </Link>
                                    <Link to="/faq" onClick={() => setDropdownOpen(false)}>
                                        <div className="px-4 py-2 hover:bg-slate-700 hover:text-amber-300 transition duration-300 cursor-pointer whitespace-nowrap border-t border-slate-700 rounded-b-lg flex items-center gap-3">
                                            <HelpCircle size={18} />
                                            FAQ
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>

                    {/* button Login */}
                    <Link to="/login">
                        <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-500 cursor-pointer transition duration-200 mt-5 w-full">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </nav>   
    </> 
   ) 
}
export default Navbar