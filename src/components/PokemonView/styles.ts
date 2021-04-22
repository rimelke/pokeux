import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  border-radius: 1rem;
  width: 40rem;
  height: 25rem;
  outline: none;
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 0.5rem;

  span {
    flex: 1;
  }

  span:last-child {
    margin-left: 2rem;
    font-weight: bold;
    flex: 2;
  }
`;

export const Basics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 12rem;
    object-fit: contain;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.5rem;
  }

  div {
    padding: 1.5rem 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    color: #fff;
  }

  span {
    margin-top: 0.5rem;
    padding: 0.1rem 0.6rem;
    color: #fff;
    font-weight: medium;
    font-size: medium;
  }
`;

export const Stats = styled.div`
  background: white;
  flex: 1;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

  h2 {
    font-size: large;
    font-weight: 500;
  }
`;

export const Type = styled.li`
  background: rgba(255, 255, 255, 0.25);
  color: white;
  border-radius: 1rem;
  padding: 0.1rem 0.6rem;
  font-weight: medium;
  margin-left: 0.5rem;

  &:first-child {
    margin-left: 0;
  }
`;
