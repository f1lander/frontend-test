import styled from "styled-components";

interface IHeading {
  fontSize: `${number}px`;
}
export const Heading = styled.div<Partial<IHeading>>`
  font-family: HelveticaNeue;
  font-size: ${({ fontSize }) => fontSize ?? "54px"};
  line-height: 64px;
  letter-spacing: 0.964286px;
  color: #333333;
`;

export const HeadingCard = styled.div<Partial<IHeading>>`
  display: flex;
  font-family: HelveticaNeue;
  font-size: ${({ fontSize }) => fontSize ?? "20px"};
  letter-spacing: 0.964286px;
  color: #333333;
  height: 48px;
  align-items: center;
`;
