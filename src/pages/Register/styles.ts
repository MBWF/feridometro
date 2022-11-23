import styled from 'styled-components';

import { theme } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 678px) {
    background-color: ${theme.colors.blue_400};

    .back-button {
      display: none;
    }
  }
  > div {
    @media screen and (min-width: 678px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .boxContainer {
        height: 100vh;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div > div:first-child {
          display: none;
        }
      }

      .stack-ontainer {
        margin: 2rem;
        border-radius: 0.4rem;
      }
    }
    .boxContainer {
      background-color: ${theme.colors.blue_400};
    }
  }
`;
