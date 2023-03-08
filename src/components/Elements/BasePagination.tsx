import { Flex, Box, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import BaseIconButton from "@/components/Forms/BaseIconButton";

import type { FC } from "react";
import type { TablePaginationProps } from "types.dto";

type BasePaginationProps = {
  pageFn: Function;
  pageParams: TablePaginationProps;
  totalCount: number;
  isLoading?: boolean;
};

const BasePagination: FC<BasePaginationProps> = ({
  pageFn,
  pageParams,
  totalCount,
}) => {
  let totalPage: number = Math.ceil(totalCount / pageParams.perPage);
  return (
    <Flex alignItems={"center"} gap={"20px"}>
      <Flex alignItems={"center"} gap={"20px"}>
        <Box>
          <BaseIconButton
            isDisabled={pageParams.currentPage <= 1 ? true : false}
            onClick={() =>
              pageFn((prev: TablePaginationProps) => ({
                ...prev,
                currentPage: prev.currentPage - 1,
              }))
            }
            aria-label={"previous"}
            icon={
              <ChevronLeftIcon fontSize={"26px"} textColor={"purple.400"} />
            }
          />
        </Box>

        <Flex alignItems={"center"} gap={"10px"}>
          <Text
            fontSize={"18px"}
            textColor={"purple.400"}
            fontWeight={"purple.400"}
          >
            {pageParams.currentPage ?? 0}
          </Text>
          <Text fontSize={"18px"} textColor={"purple.400"}>
            /
          </Text>
          <Text fontSize={"18px"} textColor={"purple.400"} fontWeight={"600"}>
            {totalPage ?? "?"}
          </Text>
        </Flex>

        <Box>
          <BaseIconButton
            isDisabled={pageParams.currentPage >= totalPage ? true : false}
            onClick={() =>
              pageFn((prev: TablePaginationProps) => ({
                ...prev,
                currentPage: prev.currentPage + 1,
              }))
            }
            aria-label={"next"}
            icon={
              <ChevronRightIcon fontSize={"26px"} textColor={"purple.400"} />
            }
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default BasePagination;
