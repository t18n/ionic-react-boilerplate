import React, { FC } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';

export const Router: FC = ({ children }) => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/contact" render={() => <Redirect to="/about" />} exact={true} />
			</IonRouterOutlet>
			{children}
		</IonReactRouter>
	</IonApp>
);
