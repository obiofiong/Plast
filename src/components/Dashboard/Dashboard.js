import DailyFacts from "./DailyFacts/DailyFacts";
import Progress from "./Progress/Progress";
import DailyExperience from "./DailyExperience/DailyExperience";
import DashboardNav from "./DashboardNav/DashboardNav";

function Dashboard() {
	return (
		<div className="relative pt-5">
			{/* <DashboardNav /> */}
			<DailyFacts />
			<Progress />
			<DailyExperience />
		</div>
	);
}

export default Dashboard;
