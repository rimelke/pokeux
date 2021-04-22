import styled from "styled-components";

export const Main = styled.main``;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 1.5rem;

  input {
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    padding: 0 1rem;
  }

  .fon {
    width: 6rem;
  }
`;

export const Pagination = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  li {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }

  li:hover {
    text-decoration: underline;
  }

  li.active {
    cursor: default;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
