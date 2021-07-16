import { HomeIcon } from "@heroicons/react/solid";
import {
	DotsHorizontalIcon,
	UserCircleIcon,
	PlusCircleIcon,
} from "@heroicons/react/outline";

function DashboardNav() {
	return (
		<div className="absolute bottom-0 inset-x-0 sticky bg-gray-100">
			<div className="flex items-center justify-around h-full">
				<div className="h-12 w-24 rounded-lg hover:bg-blue-700 flex justify-center items-center group transition duration-300">
					<UserCircleIcon className="h-7 text-blue-700  cursor-pointer mx-auto group-hover:text-white" />
				</div>
				<div className="h-12 w-24 rounded-lg hover:bg-blue-700 flex justify-center items-center group transition duration-300">
					<HomeIcon className="h-7 text-blue-700  cursor-pointer mx-auto group-hover:text-white" />
				</div>
				<div className="h-12 w-24 rounded-lg hover:bg-blue-700 flex justify-center items-center group transition duration-300">
					<PlusCircleIcon className="h-7 text-blue-700  cursor-pointer mx-auto group-hover:text-white" />
				</div>
				<div className="h-12 w-24 rounded-lg hover:bg-blue-700 flex justify-center items-center group transition duration-300">
					<DotsHorizontalIcon className="h-7 text-blue-700  cursor-pointer mx-auto group-hover:text-white" />
				</div>
			</div>
		</div>
	);
}

export default DashboardNav;
