import styled from 'styled-components';
import theme from '../../../../lib/theme';

export const ItemViewContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  top: 4rem;
  flex: 2;
  width: 100%;
  margin-left: 4rem;
  padding: 4rem;
  padding-left: 2rem;
  color: ${theme.colours.textColours.primary};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleContainer = styled.div``;
export const Title = styled.div`
  font-size: ${theme.fontSize.xxxl};
  text-transform: capitalize;
`;
export const Description = styled.div`
  margin-top: 1.5rem;
  width: 25rem;
  color: ${theme.colours.textColours.secondary};
  font-weight: lighter;
  line-height: 1.6rem;
`;
export const ImageContainer = styled.div`
  position: absolute;
  background-image: ${theme.colours.gradients.secondary};
  width: 34rem;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 10rem;
  right: 4rem;
`;
export const CarImg = styled.img`
  width: 120%;
  height: 120%;
  object-fit: contain;
  object-position: center;
`;
export const PurchasedDetailsContainer = styled.div`
  margin-top: auto;
  margin-bottom: 3rem;
`;
export const PurchaseTitle = styled.div`
  font-size: ${theme.fontSize.sm};

  font-weight: lighter;
`;
export const PriceContainer = styled.div`
  display: flex;
`;
export const Price = styled.div`
  font-size: ${theme.fontSize.xxl};
  margin-right: 0.5rem;
`;
export const Owner = styled.div`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colours.textColours.secondary};
`;
export const SummaryContainer = styled.div`
  display: flex;
`;
export const SummaryItem = styled.div`
  margin-right: 3rem;
`;
export const SummaryTitle = styled.div`
  font-size: ${theme.fontSize.sm};
  margin-bottom: 0.2rem;
  font-weight: lighter;
`;
export const SummaryValue = styled.div`
  font-size: ${theme.fontSize.xl};
`;
export const DeleteButton = {
  position: 'absolute',
  bottom: '4rem',
  right: 0,
  width: '3rem',
  height: '3rem',
  borderRadius: '10px',
};
export const DeleteImg = {
  width: '1.5rem',
  height: '1.5rem',
};
