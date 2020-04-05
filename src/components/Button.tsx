import styled from '@emotion/styled/macro';
import { css } from '@emotion/core';

import { IonButton } from '@ionic/react';

const withGreenBorder = css`
	border: 3px solid green;
`;

export const Button = styled(IonButton)<any>`
	border: 1px solid red;
	${({ borderGreen }) => borderGreen && withGreenBorder};
`;
