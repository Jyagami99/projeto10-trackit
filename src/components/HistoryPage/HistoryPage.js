import React from "react";

import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import History from "./History.js";
import GlobalStyles from "../../assets/css/globalStyles";

export default function HistoryPage() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<History />
			<Footer />
		</>
	);
}
