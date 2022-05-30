import React from "react";

import Footer from "./../Footer.js";
import Header from "./../Header.js";
import TodayHabits from "./TodayHabits.js";
import GlobalStyles from "../../assets/css/globalStyles";

export default function TodayPage() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<TodayHabits />
			<Footer />
		</>
	);
}
