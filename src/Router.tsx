import React, { FC } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Error } from './pages/error';

export const Router: FC = ({ children }) => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/404" exact component={Error} />
				<Route path="/contact" render={() => <Redirect to="/error" />} exact={true} />
			</IonRouterOutlet>
			{children}
		</IonReactRouter>
	</IonApp>
);
