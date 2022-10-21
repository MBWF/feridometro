import styled from 'styled-components';

import { theme, themeFonts } from '../../styles/global';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: transparent;
    color: ${theme.colors.white_100};
    font-size: ${themeFonts.fontSizes.smLarge};
  }
`;
