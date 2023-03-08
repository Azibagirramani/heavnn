"use client";
import { useMemo, useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Stack,
  Input,
  Button,
  Spinner,
} from "@chakra-ui/react";

import BasePagination from "../BasePagination";
import { usePostHooks } from "@/hooks/api";

import type { TablePaginationProps, PostProps } from "types.dto";
import Link from "next/link";

export default function Posts() {
  const [paginate, setPaginate] = useState<TablePaginationProps>({
    currentPage: 1,
    perPage: 20,
    totalPage: 1,
  } as TablePaginationProps);
  const useGetPostsQuery = usePostHooks.useGetPosts();
  const useDeletePostMutation = usePostHooks.useDeletePost();
  const [searchKey, setSearchKey] = useState<string>("");
  const TableHeader = ["Title", "Body", ""];
  const getComputedPostList = useMemo(() => {
    if (!useGetPostsQuery.data) {
      return [{}] as Array<PostProps>;
    }
    return useGetPostsQuery.data;
  }, [useGetPostsQuery.data]);

  const getFilteredUsersData = useMemo(() => {
    if (paginate.currentPage !== 1) {
      setPaginate((prev: TablePaginationProps) => ({
        ...prev,
        currentPage: 1,
      }));
    }

    return getComputedPostList.filter((post: PostProps) => {
      if (post.body && post.title) {
        return (
          post.body.toLowerCase().includes(searchKey.toLowerCase().trim()) ??
          post.title.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getComputedPostList, searchKey]);

  const getPaginatedData = useMemo(() => {
    const totalPage = Math.ceil(getFilteredUsersData.length / paginate.perPage);
    if (paginate.currentPage > totalPage) {
      setPaginate((prev: any) => ({ ...prev, currentPage: Number(totalPage) }));
    }

    const startIndex =
      paginate.currentPage * paginate.perPage - paginate.perPage;
    const endIndex = startIndex + paginate.perPage;
    return getFilteredUsersData.slice(startIndex, endIndex);
  }, [getFilteredUsersData, paginate.currentPage, paginate.perPage]);
  return (
    <Stack spacing={"20px"}>
      <Flex justifyContent={"end"} alignItems={"center"} gap={"10px"}>
        {useDeletePostMutation.isLoading && <Spinner size="xs" />}
        <Input
          type={"search"}
          placeholder={" search for an article by writing one word"}
          width={"30%"}
          value={searchKey}
          name={"q"}
          size={"lg"}
          focusBorderColor={"purple.400"}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </Flex>
      <Flex justifyContent={"end"} gap={"20px"}>
        <BasePagination
          pageFn={setPaginate}
          pageParams={paginate}
          totalCount={getFilteredUsersData.length}
          isLoading={useGetPostsQuery.isLoading}
        />
      </Flex>
      <TableContainer>
        <Table size={"lg"}>
          <Thead bg={"purple.400"}>
            <Tr>
              {TableHeader.map((fields, index) => {
                return (
                  <Th key={index} textColor={"white"}>
                    {fields}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {getPaginatedData.map((post, index) => {
              return (
                <Tr key={index}>
                  <Td>
                    <Link href={`/post/${post.id}`}>
                      {post.title.slice(0, 50)}
                    </Link>
                  </Td>
                  <Td>{post.body.slice(0, 50)}</Td>
                  <Td>
                    <Button
                      bg={"red"}
                      size={"sm"}
                      textColor={"white"}
                      onClick={() => useDeletePostMutation.mutateAsync(post.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
