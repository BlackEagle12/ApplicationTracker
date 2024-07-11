import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LeftNav from "./Common/LeftNav";
import { logout } from "../Services/Login.service";
import Topnav from "./Common/Topnav";
import HttpModule from "../HttpModule/HttpModule";

export default function Home() {
	const navigate = useNavigate();
	const [currentLocation, setCurrentLocation] = useState("");
	const location = useLocation();
	const [user, setUser] = useState();

	useEffect(() => {
		console.log();
		setCurrentLocation(location.pathname.replace("/", ""));
		// Send request to your server to increment page view count
	}, [location]);

	useEffect(() => {
		let usr = JSON.parse(localStorage.getItem("User"));
		setUser((old) => {
			return { ...old, ...usr };
		});
		console.log(usr);
		if (!usr || usr == null) navigate("/login");
	}, []);

	const handleLogout = async () => {
		await logout();
		navigate("/login");
	};

	const handleSearch = (searchInput) => {};

	return (
		<div className="bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 h-screen w-full overflow-hidden text-white flex">
			<div className="min-w-[250px]">
				<LeftNav handleLogout={handleLogout} />
			</div>
			<div className="w-full px-5">
				<div className="h-[100px]">
					<Topnav
						user={user}
						handleSearch={handleSearch}
						title={currentLocation}
					/>
				</div>

				<Outlet />
				{/* <div> body</div> */}
			</div>
		</div>
	);
}
