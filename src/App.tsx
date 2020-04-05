import React from 'react';
import { IonButton, IonDatetime } from '@ionic/react';

function App() {
	return (
		<div className="App">
			<IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
			<IonButton fill="clear">Start</IonButton>
		</div>
	);
}

export default App;
