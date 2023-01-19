import styled from 'styled-components';

export const FontSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  button {
    font-size: 1rem;
    white-space: pre-line;

    @media (max-width: 420px) {
      font-size: 0.85rem;
    }
  }
`;
