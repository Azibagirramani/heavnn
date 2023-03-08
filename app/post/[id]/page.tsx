// import {} from "next/navigation";
"use client";
import Link from "next/link";

import { Box, Stack, Text } from "@chakra-ui/react";

import { usePostHooks } from "@/hooks/api";
import { PostProps } from "types.dto";
import type { FC } from "react";

const PostDetailComponent: FC<PostProps> = ({ title, body }) => {
  return (
    <Stack>
      <Text>Post Title: {title}</Text>
      <Text>Post Body: {body}</Text>
    </Stack>
  );
};

export default function Page({ params }: { params: { id: number } }) {
  const useGetPostMutation = usePostHooks.useGetPostById(params.id);
  return (
    <Stack p={"30px"}>
      {useGetPostMutation.data ? (
        <PostDetailComponent {...useGetPostMutation.data} />
      ) : (
        "Loading..."
      )}

      <Box textColor={"green"}>
        <Link href={"/"}>Go Back</Link>
      </Box>
    </Stack>
  );
}
