"use client";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme as CustomChakraTheme } from "@/components/Theme/Chakra/colors";

function ChakraWrapper({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={CustomChakraTheme}>{children}</ChakraProvider>;
}

export default ChakraWrapper;
