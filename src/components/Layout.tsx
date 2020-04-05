import React, { FC } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

interface ILayout {
	title: string;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	return (
		<IonPage>
			{title}
			<IonHeader>
				<IonToolbar>
					<IonTitle>{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>{children}</IonContent>
		</IonPage>
	);
};
