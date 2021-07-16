import Chart from "react-apexcharts";
import { useState } from "react";

function Progress() {
	const [series, setSeries] = useState([63, 27]);
	const [options, seOptions] = useState({
		chart: {
			type: "donut",
		},
		labels: ["Thrown", "Saved Plastics"],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					dataLabels: {
						enabled: false,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	});
	return (
		<div className="">
			<p className="font-bold text-gray-600 ml-10">Progress</p>
			<div id="chart" className="flex items-center justify-center">
				<Chart
					options={options}
					series={series}
					type="donut"
					width={320}
					height={320}
				/>
			</div>
		</div>
	);
}

export default Progress;
