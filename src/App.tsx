/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme */
import './theme/variables.css';

import React, { FC } from 'react';
import { IonApp } from '@ionic/react';
import { Tabbar } from './components/Tabbar';

interface AppProps {
	darkMode?: boolean;
}

export const App: FC<AppProps> = ({ darkMode }) => (
	<IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
		<Tabbar slot="bottom" />
	</IonApp>
);
