import { useQuery } from "react-query";
import { POSTS_ENDPOINT } from "../endpoints";
import type { QueryString, PostProps } from "types.dto";

const baseUrl = `${POSTS_ENDPOINT}?`;

const useGetPosts = (options?: QueryString) => {
  const queryKey = ["posts.get"];

  const defaultQueryObject = {
    _page: 1,
    _limit: 100,
    q: "",
  } as QueryString;

  const queryBuilder = new URLSearchParams();
  const params: any = Object.assign(defaultQueryObject, options);

  Object.keys(params).forEach((key: any) =>
    queryBuilder.append(key, params[key])
  );

  const queryToString = queryBuilder.toString();

  const url = `${baseUrl}${queryToString}`;
  return useQuery<Array<PostProps>, Error>(
    queryKey,
    async () => await (await fetch(url)).json(),
    {
      onError() {
        throw new Error("Error fetching posts");
      },
    }
  );
};

export default useGetPosts;
