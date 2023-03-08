import { useQuery } from "react-query";
import { POSTS_ENDPOINT } from "../endpoints";

const useGetPostById = (id: number) => {
  const queryKey = ["post.byId"];
  const url = `${POSTS_ENDPOINT}/${id}`;
  return useQuery<any, Error>(
    queryKey,
    async () => await (await fetch(url)).json()
  );
};

export default useGetPostById;
