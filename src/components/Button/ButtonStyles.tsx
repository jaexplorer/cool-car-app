import styled from 'styled-components';
import theme from '../../lib/theme';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: max-content;
  background-color: ${theme.colours.buttonColours.primary};
  color: white;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0.01, 0, 1.38);

  &:hover {
    transform: scale(1.2);
  }
`;

export const ButtonImg = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
`;
