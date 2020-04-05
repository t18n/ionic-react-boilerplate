import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';

import React from 'react';
import { Router } from './Router';
import { IonApp } from '@ionic/react';

export const App = () => (
	<IonApp>
		<Router />
	</IonApp>
);
