import styled from 'styled-components';
import theme from '../../lib/theme';

export const PercentageDropContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;

  border-top: 0.8rem solid #c1272d;
`;
export const Percentage = styled.div`
  color: #c1272d;
  margin-left: 0.2rem;
  font-weight: lighter;
  font-size: ${theme.fontSize.sm};
`;
