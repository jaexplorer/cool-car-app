import styled from 'styled-components';
import theme from '../../../../../../lib/theme';

export const ListItemContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  &:last-child {
    border-bottom: none;
  }
`;
export const CarTitle = styled.div`
  color: ${theme.colours.textColours.secondary};
  font-size: ${theme.fontSize.sm};
  font-weight: lighter;
  text-transform: capitalize;
`;
export const DetailsContainer = styled.div`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  white-space: nowrap;
`;
export const CarImg = styled.img`
  width: 10rem;
  height: auto;
`;
export const SummaryContainer = styled.div`
  margin-left: 1.5rem;
`;
export const Price = styled.div`
  font-size: ${theme.fontSize.l};
  color: ${theme.colours.textColours.primary};
`;
export const Person = styled.div`
  color: ${theme.colours.textColours.secondary};
  font-size: ${theme.fontSize.xsm};
`;
