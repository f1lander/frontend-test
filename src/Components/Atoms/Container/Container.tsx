import styled, { css } from "styled-components";

enum directions {
  column = "column",
  row = "row",
}

const itemVariants: any = {
  "status-indicator": css`
    font-family: HelveticaNeue;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.5px;
    color: #757575;
    text-transform: uppercase;
  `,
};

interface IContainer {
  direction: keyof typeof directions;
  flex: number;
  justifyContent: string;
  gap: `${number}px`;
  variant: string;
}

const fadeOut = css`
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
  visibility: hidden;
`;

const fadeIn = css`
  opacity: 1;
  transition: visibility 0s linear 300ms, opacity 300ms;
  visibility: visible;
`;

export const Item = styled.div<Partial<IContainer>>`
  display: flex;
  flex: ${({ flex }) => flex ?? 1};
  gap: ${({ gap }) => gap ?? "32px"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "flex-start"};
  align-items: center;
  flex-wrap: wrap;
  ${({ variant }) => (variant ? itemVariants[variant] : null)}
`;

export const Container = styled.div<Partial<IContainer>>`
  display: flex;
  flex-direction: ${({ direction }) => directions[direction ?? directions.row]};
  padding-left: 64px;
  padding-top: 36px;
  padding-bottom: 36px;
`;

export const RestaurantCardContainer = styled.div<Partial<IContainer>>`
  display: flex;
  flex-direction: ${({ direction }) => directions[direction ?? directions.row]};
  padding-top: 36px;
  padding-bottom: 36px;
  gap: 10px;
  width: 304px;
`;

export const FilterBarContainer = styled.div<Partial<IContainer>>`
  display: flex;
  flex-direction: ${({ direction }) => directions[direction ?? directions.row]};
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  color: #002b56;
  box-sizing: border-box;
  padding-left: 64px;
  padding-right: 64px;
  flex-wrap: wrap;
  #filter-label {
    color: #606060;
  }
`;

export const SelectValuesContainer = styled.div<{ isOpen: boolean }>`
  width: 193px;
  flex-direction: column;
  position: absolute;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #c4aaaa;
  box-sizing: border-box;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 0px #c8c8c8;
  top: 30px;
  color: #606060;
  font-size: 16px;
  background-color: white;
  max-height: 300px;
  overflow: auto;
  ${({ isOpen }) => (!isOpen ? fadeOut : fadeIn)};
`;

export const CheckBoxSelectContainer = styled.div`
  position: relative;
  width: 200px;
  height: 35px
`;

export const SelectContainer = styled.div`
  display: flex;
  position: absolute;
  width: 193px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  color: #002b56;
  background: white;
  border-bottom: 1px solid #c8c8c8;
  box-sizing: border-box;
  font-family: HelveticaNeue;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  z-index: 2;
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
`;