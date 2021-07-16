import DailyFact from "./DailyFact";
import { motion } from "framer-motion";

function DailyFacts() {
	return (
		<div
			className="bg-gray-100 p-1 text-start 
            ">
			<p className="font-bold text-gray-600 ml-10">Facts of the Day</p>
			<div className="my-3 px-3 flex items-center w-full overflow-x-scroll scrollbar-hide">
				<DailyFact />
				{/* <DailyFact /> */}
				{/* <DailyFact /> */}
			</div>
		</div>
	);
}

export default DailyFacts;
