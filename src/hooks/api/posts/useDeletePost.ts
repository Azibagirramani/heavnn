import { useMutation } from "react-query";
import { POSTS_ENDPOINT } from "../endpoints";

const baseUrl = `${POSTS_ENDPOINT}/`;

const useDeletePost = () => {
  const queryKey = ["posts.delete"];
  return useMutation(
    queryKey,
    async (Id: number) => await fetch(`${baseUrl}${Id}`, { method: "DELETE" }),
    {
      onSuccess() {
        alert("Successfully deleted Post!");
      },
      onError() {
        alert("Unable to delete Post!");
      },
    }
  );
};

export default useDeletePost;
