import React from "react";

import Header from "./../Header.js";
import Footer from "./../Footer.js";
import Habits from "./Habits.js";
import GlobalStyles from "../../assets/css/globalStyles";

export default function HabitsPage() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Habits />
			<Footer />
		</>
	);
}
