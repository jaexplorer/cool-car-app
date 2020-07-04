import styled from 'styled-components';
import theme from '../../../../lib/theme';

export const ListContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  top: 4rem;
  flex: 1;
  width: 100%;
  max-width: 600px;
  min-width: 460px;
`;

export const ListHeader = styled.div`
  background-image: ${theme.colours.gradients.primary};
  height: 9rem;
  border-top-left-radius: ${theme.borderRadius * 1.2}px;
  border-top-right-radius: ${theme.borderRadius * 1.2}px;
  padding: ${theme.padding / 2}rem;
  position: relative;
`;

export const HeaderTitle = styled.div`
  font-size: ${theme.fontSize.l};
  color: ${theme.colours.textColours.tertiary};
  margin-bottom: 0.2rem;
`;

export const HeaderSubtitle = styled.div`
  font-size: ${theme.fontSize.xsm};
  color: ${theme.colours.textColours.tertiary};
  font-weight: lighter;
`;

export const HeaderButton = {
  position: 'absolute',
  bottom: '-2rem',
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
};

export const ButtonImg = {
  width: '2rem',
  height: '2rem',
};

export const ListWrapper = styled.div`
  height: calc(100% - 9rem);
  background-color: ${theme.colours.backgroundColours.primary};
  overflow: scroll;
  padding: ${theme.padding / 2}rem;
  padding-top: ${theme.padding}rem;
`;
