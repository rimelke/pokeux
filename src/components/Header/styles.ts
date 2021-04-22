import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2.5rem;

  .logo {
    height: 4rem;
    width: auto;
    object-fit: contain;
    align-self: center;
    cursor: pointer;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PokedexLogo = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  align-self: flex-end;

  img {
    width: 2rem;
    height: 2rem;
    display: block;
  }
  div {
    background: #53bcf0;
    border-radius: 100%;
    padding: 0.3rem;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    width: 1.2rem;
    height: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div span {
    font-size: x-small;
    font-weight: bolder;
  }
`;
