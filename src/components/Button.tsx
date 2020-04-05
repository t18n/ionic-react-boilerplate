import styled from '@emotion/styled/macro';
import css from '@emotion/css/macro';
import { IonButton } from '@ionic/react';

const withGreenBorder = css(`
	border: 1px solid green;
`);

export const Button = styled(IonButton)<any>`
	border: 1px solid red;
	${({ borderGreen }) => borderGreen && withGreenBorder};
`;
