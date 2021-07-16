import DailyFact from "./DailyFact";
import { motion } from "framer-motion";

function DailyFacts() {
	return (
		<div
			// initial={{ x: "100%" }}
			className="bg-gray-100 p-4 flex justify-center">
			<DailyFact />
		</div>
	);
}

export default DailyFacts;
