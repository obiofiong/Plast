import DailyFacts from "./DailyFacts/DailyFacts";
import DashboardNav from "./DashboardNav/DashboardNav";

function Dashboard() {
	return (
		<div className="relative pt-5">
			{/* <DashboardNav /> */}
			<DailyFacts />
		</div>
	);
}

export default Dashboard;
