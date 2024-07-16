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

function App() {
	return (
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
							<Route path="update/:id" element={<AddTemplates />} />
						</Route>
					</Route>
					<Route path="collection">
						<Route index element={<Collection />} />
						<Route path="add" element={<AddUpdateCollection />} />
						<Route path="update/:id" element={<AddUpdateCollection />} />
						<Route path="data" element={<ColleactionData />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
