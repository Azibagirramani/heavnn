"use client";
import dynamic from "next/dynamic";
import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const ArticlesComponent = dynamic(
  () => import("@/components/Elements/Pages/Posts"),
  { ssr: false }
);

const UsersComponent = dynamic(
  () => import("@/components/Elements/Pages/Users"),
  { ssr: false }
);

export default function Home() {
  return (
    <Container
      minWidth="7xl"
      borderWidth={"thin"}
      paddingBlock={"8"}
      rounded={"md"}
      marginTop={"10"}
    >
      <Tabs
        _selected={{
          color: "purple.400",
          borderWidth: "2px",
          borderBottomColor: "purple.400",
        }}
      >
        <TabList>
          <Tab textColor={"black.100"}>Articles</Tab>
          <Tab textColor={"black.100"}>Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ArticlesComponent />
          </TabPanel>
          <TabPanel>
            <UsersComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
