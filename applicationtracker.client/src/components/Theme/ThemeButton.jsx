import React from "react";

function ThemeButton({ text, type, onClick, disabled }) {
	return (
		<button
			type={type}
			onClick={onClick || (() => {})}
			disabled={disabled || false}
			className={
				" w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
			}
		>
			{text || "Text will be added"}
		</button>
	);
}

export default ThemeButton;
