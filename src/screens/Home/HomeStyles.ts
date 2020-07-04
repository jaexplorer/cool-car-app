import styled from 'styled-components';
import theme from '../../lib/theme';

export interface HomeProps {
  blur: boolean;
}

export const HomeContainer = styled.div<HomeProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colours.backgroundColours.secondary};
  display: flex;
  padding: 4rem;
  max-width: 1500px;
  filter: blur(${(props) => (props.blur ? '4px' : 0)});
`;
