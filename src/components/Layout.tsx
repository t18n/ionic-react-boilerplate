import React, { FC } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { Tabbar } from './Tabbar';

interface ILayout {
	title: string;
}

export const Layout: FC<ILayout> = ({ title, children }) => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonTitle>{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent>{children}</IonContent>
		<Tabbar />
	</IonPage>
);
