import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lowrate from "./pages/lowrate/Lowrate";
// import Summary from "./pages/summary";
import Sumaries from "./pages/summarys/pageOne/Sumaries";
import SumariesTwo from "./pages/summarys/pageTwo/SumariesTwo";
import VesselLoading from "./pages/shipping/VesselLoading";
import Weigher from "./pages/weigher/Weigher";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Lowrate />} />
				{/* <Route path="/summary" element={<Summary />} /> */}
				<Route path="/summary" element={<Sumaries />} />
				<Route path="/summary2" element={<SumariesTwo />} />
				<Route path="/shippingReport" element={<VesselLoading />} />
				<Route path="/weigherReport" element={<Weigher />} />
			</Routes>
		</Router>
	);
}

export default App;
