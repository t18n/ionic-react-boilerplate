import React, { FC } from 'react';
import { IonTabBar, IonIcon, IonLabel, IonTabButton, IonTabs } from '@ionic/react';
import { home, callOutline, informationCircleOutline } from 'ionicons/icons';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Error } from '../pages/error';

interface ITabbar {
	slot: 'bottom' | 'top';
}

export const Tabbar: FC<ITabbar> = ({ slot }) => (
	<IonReactRouter>
		<IonTabs>
			<IonRouterOutlet>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/404" exact component={Error} />
				<Route path="/contact" render={() => <Redirect to="/error" />} exact />
			</IonRouterOutlet>
			<IonTabBar slot={slot}>
				<IonTabButton tab="home" href="/">
					<IonIcon icon={home} />
					<IonLabel>Home</IonLabel>
				</IonTabButton>
				<IonTabButton tab="about" href="/about">
					<IonIcon icon={informationCircleOutline} />
					<IonLabel>About</IonLabel>
				</IonTabButton>
				<IonTabButton tab="contact" href="/contact">
					<IonIcon icon={callOutline} />
					<IonLabel>Contact</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	</IonReactRouter>
);
