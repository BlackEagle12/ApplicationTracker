import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ title, linkTo }) {
	return (
		<Link to={linkTo}>
			<div className="mx-3 flex justify-center items-center hover:bg-gray-400 duration-500 p-1.5 rounded border-b border-l text-sm uppercase">
				{title}
			</div>
		</Link>
	);
}
