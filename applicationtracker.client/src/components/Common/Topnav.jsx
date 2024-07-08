import React, { useState } from "react";
import UserCard from "./UserCard";
import TopNavSearch from "./TopNavSearch";

export default function Topnav({ user, handleSearch, title }) {
	return (
		<div className="h-[100px] w-full flex justify-between items-center relative">
			<div className="text-center w-1/4 text-2xl uppercase tracking-widest font-extrabold">
				{title}
			</div>
			<div className="w-1/3">
				<TopNavSearch handleSearch={handleSearch} />
			</div>

			<UserCard user={user} />
		</div>
	);
}
