import styled from 'styled-components';
import theme from '../../../../lib/theme';

export interface ModalProps {
  display: boolean;
}

export const ModalContainer = styled.div<ModalProps>`
  display: ${(props) => (props.display ? 'flex' : 'none')};
  background: ${theme.colours.backgroundColours.primary};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
  max-width: 70rem;
  height: 15rem;
  padding: ${theme.padding}rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const PickerContainer = styled.div`
  margin-right: 3rem;
  width: 12rem;
`;

export const PickerTitle = styled.div`
  color: ${theme.colours.textColours.secondary};
  font-size: ${theme.fontSize.xsm};
  font-weight: lighter;
  margin-bottom: 1rem;
`;

export const ButtonContainer = {
  position: 'absolute',
  right: '-3.5rem',
  background: 'red',
  width: '7rem',
  height: '7rem',
  borderRadius: '50%',
  backgroundImage: `${theme.colours.gradients.primary}`,
  boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3)',
};

export const ButtonImg = {
  position: 'relative',
  left: '0.4rem',
  width: '2.5rem',
  height: '2.5rem',
};
