import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { MenuIcon } from "@heroicons/react/solid";

function Navbar() {
	const [openMobileNav, setOpenMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setOpenMobileNav(!openMobileNav);
	};

	return (
		<nav className="bg-white text-blue-800">
			<div className="max-w-4xl py-2 sm:flex items-center justify-center sm:justify-between  mx-4 sm:mx-auto">
				<div className="text-center relative sm:flex justify-center">
					<MenuIcon
						className="absolute sm:hidden sm:relative sm:mr-4 h-7 text-blue-600 cursor-pointer top-2 left-2"
						onClick={toggleMobileNav}
					/>
					<Link className=" text-3xl cursor-pointer">Plast</Link>
				</div>
				<div className="sm:hidden">{openMobileNav && <MobileNav />}</div>
				<div className="hidden sm:block">
					<MobileNav />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
