import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.li`
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  span {
    background: rgba(255, 255, 255, 0.25);
    color: white;
    border-radius: 1rem;
    padding: 0.1rem 0.6rem;
    font-weight: medium;
    margin-top: -0.5rem;
  }

  svg {
    position: absolute;
    cursor: pointer;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.2rem;
    height: 1.2rem;
    transition: 0.2s;
  }

  svg.full {
    color: #f00;
  }

  svg.empty {
    color: #666;
  }

  svg:hover {
    color: ${(props) => shade(0.2, "#f00")};
  }
`;
