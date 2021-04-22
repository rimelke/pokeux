import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import water from "./water";
import grass from './grass'
import fire from './fire'
import poison from './poison'

export const themes: Record<string, any> = {
  water,
  grass,
  fire,
  poison
};

const PokemonThemeProvider: React.FC = ({ children }) => {
    const theme: string = useSelector((state: any) => state.theme.theme)

    return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}

export default PokemonThemeProvider;
