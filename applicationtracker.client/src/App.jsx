import "./App.css";
import Login from "./components/Common/Login";
import Signup from "./components/Common/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/Common/ForgetPassword";
import Home from "./components/Home";
import Application from "./components/Application/Application";
import Collection from "./components/Collection/Collection";
import AddUpdateCollection from "./components/Collection/AddUpdateCollection";
import ColleactionData from "./components/Collection/ColleactionData";
import SendEmail from "./components/Email/SendEmail";
import AddTemplates from "./components/Email/Templates/AddTemplates";
import Templates from "./components/Email/Templates/Templates";
import { CirclesWithBar } from "react-loader-spinner";
import { useInterceptorLoading } from "./HttpModule/HttpModule";

function App() {
	const { loading } = useInterceptorLoading();
	return (
		<div className="relative">
			{loading && (
				<div className="w-full h-screen flex items-center justify-center absolute bg-gray-900 z-20 bg-opacity-75">
					<CirclesWithBar
						height="100"
						width="100"
						color="#4fa94d"
						outerCircleColor="#6b21a8"
						innerCircleColor="#ffffff"
						barColor="#6b21a8"
						ariaLabel="circles-with-bar-loading"
						wrapperStyle={{}}
						wrapperclassName=""
						visible={true}
					/>
				</div>
			)}
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="forgetPassword" element={<ForgetPassword />} />
					<Route path="" element={<Home />}>
						<Route path="application" element={<Application />} />
						<Route path="email">
							<Route index element={<SendEmail />} />
							<Route path="templates">
								<Route index element={<Templates />} />
								<Route path="add" element={<AddTemplates />} />
								{/* <Route
									path="update/:id"
									element={<AddTemplates />}
								/> */}
							</Route>
						</Route>
						<Route path="collection">
							<Route index element={<Collection />} />
							<Route
								path="add"
								element={<AddUpdateCollection />}
							/>
							<Route
								path="update/:id"
								element={<AddUpdateCollection />}
							/>
							<Route path="data" element={<ColleactionData />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
