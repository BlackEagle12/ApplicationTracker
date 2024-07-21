import React from "react";

export function TostSucessIcon() {
	return (
		<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
			<svg
				className="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
			</svg>
			<span className="sr-only">Check icon</span>
		</div>
	);
}

export function TostErrorIcon() {
	return (
		<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg">
			<svg
				class="h-6 w-6 text-red-400"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				{" "}
				<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />{" "}
				<line x1="12" y1="9" x2="12" y2="13" />{" "}
				<line x1="12" y1="17" x2="12.01" y2="17" />
			</svg>
			<span className="sr-only">Check icon</span>
		</div>
	);
}
