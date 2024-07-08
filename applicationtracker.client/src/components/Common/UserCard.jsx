import React from "react";
import userImage from "../../assets/User/user.png";

export default function UserCard({ user }) {
	return (
		<div className="flex items-center justify-evenly border border-white rounded-lg p-2">
			<div className="flex-shrink-0 w-1/6 flex justify-center">
				<img className="w-8 h-8 rounded-full" src={userImage} alt="Neil image" />
			</div>
			<div className="flex-1 min-w-0 ms-4 ">
				<p className="text-sm font-medium truncate dark:text-white">
					{user.Name || "User name"}
				</p>
				<p className="text-sm truncate dark:text-gray-400">{user.Email}</p>
			</div>
		</div>
	);
}
