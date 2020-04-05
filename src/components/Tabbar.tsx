import React from 'react';
import { IonTabBar, IonIcon, IonLabel, IonTabButton } from '@ionic/react';
import { home, callOutline, informationCircleOutline } from 'ionicons/icons';

export const Tabbar = () => (
	<IonTabBar slot="bottom">
		<IonTabButton tab="home" href="/home">
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
);
