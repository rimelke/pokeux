import styled from "styled-components";

export const Container = styled.li`
  background: rgb(58, 138, 232);
  background: linear-gradient(
    0deg,
    rgba(58, 138, 232) 0%,
    rgba(106, 205, 244) 100%
  );
  border-radius: 1rem;
  padding: 1rem;

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
`;
