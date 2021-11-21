import React, { ReactNode } from "react";

import theme from "../../styles/theme";
import { GradientBackground } from "./styles";

interface IBackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: IBackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <GradientBackground colors={[secondary80, secondary100]}>
      {children}
    </GradientBackground>
  );
}
