import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import DashboardNav from "./components/Dashboard/DashboardNav/DashboardNav";

function App() {
	const location = useLocation();
	return (
		<div className="bg-gray-100 h-screen relative">
			<Navbar />
			<Switch>
				<Route path="/dashboard" component={Dashboard} exact={true} />
				<Route path="/" component={Home} exact={true} />
			</Switch>
			{location.pathname === "/dashboard" && <DashboardNav />}
		</div>
	);
}

export default App;
