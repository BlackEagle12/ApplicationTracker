import React, { useState } from "react";

export default function TopNavSearch({ handleSearch }) {
	const [searchInput, setSearchInput] = useState("");

	return (
		<form className="flex items-center w-full">
			<div className="w-full">
				
				<input
					type="text"
					value={searchInput}
					onChange={() => setSearchInput(e.target.value)}
					id="simple-search"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-gray-100 focus:outline-none block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search..."
				/>
			</div>
			<button
				type="button"
				onClick={handleSearch(searchInput)}
				className="p-2.5 ms-2 text-sm font-medium border rounded focus:ring-2 focus:outline-none focus:ring-gray-100 text-white duration-300 hover:bg-gray-400"
			>
				<svg
					className="w-4 h-4"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
				<span className="sr-only">Search</span>
			</button>
		</form>
	);
}
