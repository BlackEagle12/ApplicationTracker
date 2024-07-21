import React, { useRef } from "react";
import ThemeButton from "../Theme/Button/ThemeButton";

function ColleactionData(props) {
	var { frame } = useRef();
	const processCollection = () => {
		window.postMessage(frame, "https://www.linkedin.com/feed/");
	};

	return (
		<div>
			<ThemeButton
				text="Process collection data"
				onClick={processCollection}
			/>
			<iframe ref={frame} src="about:blank">
				<html>
					<script>alert('Hi')</script>
				</html>
			</iframe>
		</div>
	);
}

export default ColleactionData;
