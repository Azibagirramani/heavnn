import { Flex, Button, Box, Input } from "@chakra-ui/react";

import type { ChangeEventHandler, FC } from "react";

const BaseFilter: FC<{
  fn: ChangeEventHandler<HTMLInputElement>;
  totalCount?: number;
  isLoading: boolean;
}> = ({ fn, isLoading, totalCount }) => {
  return (
    <Flex align={"center"} justifyContent={"space-between"} marginBottom={"5"}>
      <Input
        type="search"
        name="q"
        width="3xl"
        placeholder="Search by Name, Authors, Characters Name, Date Released, Publisher, Isbn and culture"
        value={"q"}
        size="md"
        onChange={fn}
      />
      <Box>
        <Button
          loadingText="Fetching data ...."
          color={"white"}
          id="activity-button"
          isLoading={isLoading}
        >
          Total Books ({totalCount})
        </Button>
      </Box>
    </Flex>
  );
};

export default BaseFilter;
