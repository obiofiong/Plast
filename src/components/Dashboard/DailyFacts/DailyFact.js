import { LightningBoltIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

function DailyFact() {
	return (
		<motion.div
			className="h-56 w-56 p-5 rounded-2xl shadow-xl bg-blue-600 text-white text-center hover:bg-blue-800"
			initial={{ x: "-100%" }}
			animate={{
				x: 0,
			}}>
			<LightningBoltIcon className="h-10 -mt-10 mx-auto" />
			<div className="text-2xl font-bold text-center">Fact #1</div>
			<p className="text-xs text-justify my-7">
				lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet loremlorem
				ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum
				dolor sit amet lorem
			</p>
		</motion.div>
	);
}

export default DailyFact;
