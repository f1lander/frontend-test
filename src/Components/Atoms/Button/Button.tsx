import styled, { css } from "styled-components";

enum Variants {
  filled = "filled",
  large = "large",
}

interface IButton {
  variant?: keyof typeof Variants;
}

const variants: any = {
  filled: css`
    width: 304px;
    height: 48px;
    font-size: 14px;
    letter-spacing: 1px;
    background: #002b56;
    color: white;
    border-radius: 2px;
  `,
  large: css`
    width: 416px;
    margin-top:45px; 
  `,
};

export const Button = styled.button<IButton>`
  width: 151px;
  height: 38px;
  border: 1px solid #002b56;
  box-sizing: border-box;
  font-family: HelveticaNeue;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  background: white;
  ${({ variant }) => (variant ? variants[variant] : null)}
`;
