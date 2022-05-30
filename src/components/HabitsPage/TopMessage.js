import React from "react";

import * as S from "../../assets/css/styles";

export default function TopMessage({ toggleCreateTaskContainer }) {
	return (
		<S.TopMessage>
			<p>Meus hábitos</p>
			<button onClick={() => toggleCreateTaskContainer(true)}>+</button>
		</S.TopMessage>
	);
}
