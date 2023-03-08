import { useQuery } from "react-query";
import { USERS_ENDPOINT } from "../endpoints";

const baseUserUrl = `${USERS_ENDPOINT}?q=`;

const useGetUsers = (id: number) => {
  const queryKey = ["user.getUser"];
  const url = baseUserUrl + id;
  return useQuery<any, Error>(queryKey, async () => await fetch(url));
};

export default useGetUsers;
