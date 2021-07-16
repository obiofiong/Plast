import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MobileNav() {
	return (
		<div className="mt-5 sm:mt-0 text-center transition duration-700 sm:text-lg">
			<ul className="space-y-2 sm:space-y-0 sm:space-x-5 sm:flex items-center justify-center">
				<li className="cursor-pointer group">
					<Link to="/" className="transform group-hover:scale-110">
						Home
					</Link>
					<p className="w-0 sm:w-full h-1 bg-blue-600 border opacity-0 group-hover:text-white group-hover:opacity-100 transition duration-300"></p>
				</li>
				<li className="cursor-pointer group">
					<Link to="/dashboard" className="transform group-hover:scale-110">
						Dashboard
					</Link>
					<p className="w-0 sm:w-full h-1 bg-blue-600 border opacity-0 group-hover:text-white group-hover:opacity-100 transition duration-300"></p>
				</li>
				<li className="cursor-pointer group">
					<Link to="" className="transform group-hover:scale-110">
						About
					</Link>
					<p className="w-0 sm:w-full h-1 bg-blue-600 border opacity-0 group-hover:text-white group-hover:opacity-100 transition duration-300"></p>
				</li>
				<li className="cursor-pointer group">
					<Link to="" className="transform group-hover:scale-110">
						Contact
					</Link>
					<p className="w-0 sm:w-full h-1 bg-blue-600 border opacity-0 group-hover:text-white group-hover:opacity-100 transition duration-300"></p>
				</li>
			</ul>
		</div>
	);
}

export default MobileNav;
