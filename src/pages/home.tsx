import React from 'react';
import { Layout } from '../components/Layout';
import { IonDatetime } from '@ionic/react';
import { Button } from '../components/Button';

export const Home = () => (
	<Layout title="Home">
		<IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
		<Button fill="clear">Start</Button>
		<Button fill="clear" borderGreen>
			Start
		</Button>
	</Layout>
);
