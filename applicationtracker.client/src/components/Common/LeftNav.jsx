import React from "react";
import logo from "../../assets/Logo/logo.png";
import UserCard from "./UserCard";
import NavItem from "./NavItem";
export default function LeftNav({ handleLogout }) {
	return (
		<div className="w-full h-full relative">
			<div className="h-[150px] w-full flex justify-center items-center">
				{/* <img src={logo} alt="logo" className="h-20" /> */}
			</div>
			<div className="flex flex-col gap-5 item-center">
				<NavItem title="Collection" linkTo="collection" />
				<NavItem title="Add Collection" linkTo="collection/add" />
				<NavItem title="Collection Data" linkTo="collection/data" />
				<NavItem title="Application" linkTo="application" />
			</div>
			<div
				className="absolute bottom-0 w-full my-3"
				onClick={handleLogout}
			>
				<NavItem title="Logout" />
			</div>
			{/* <button onClick={handleLogout}>logout</button> */}
		</div>
	);
}
