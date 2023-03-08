"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import ChakraWrapper from "@/components/Theme/Chakra/ChakraUIWrapper";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraWrapper>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ChakraWrapper>
      </body>
    </html>
  );
}
