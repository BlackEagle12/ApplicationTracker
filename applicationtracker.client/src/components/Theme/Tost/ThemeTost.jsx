import React, { useState } from "react";
import { TostErrorIcon, TostSucessIcon } from "./TostIcon/TostIcon";
import TostCloseButton from "./TostIcon/TostCloseButton";

export function ThemeSucessTost({ TostElement }) {
	const [, setIsTostVisible] = useState(true);

	const hideTost = () => {
		setIsTostVisible(false);
	};

	return (
		<div
			className={
				"absolute bottom-0 right-2 " + (!isTostVisible ? "hidden" : "")
			}
		>
			<div
				id="toast-success"
				className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
				role="alert"
			>
				<TostSucessIcon />
				<div className="mx-2">
					<TostElement />
				</div>
				<div className="h-full">
					<TostCloseButton hideTost={hideTost} />
				</div>
			</div>
		</div>
	);
}

export function ThemeErrorTost({ TostElement }) {
	const [isTostVisible, setIsTostVisible] = useState(true);

	const hideTost = () => {
		setIsTostVisible(false);
	};

	return (
		<div
			className={
				"absolute bottom-0 right-2 " + (!isTostVisible ? "hidden" : "")
			}
		>
			<div
				id="toast-success"
				className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
				role="alert"
			>
				<TostErrorIcon />
				<div className="mx-2">
					<TostElement />
				</div>
				<div className="h-full">
					<TostCloseButton hideTost={hideTost} />
				</div>
			</div>
		</div>
	);
}
