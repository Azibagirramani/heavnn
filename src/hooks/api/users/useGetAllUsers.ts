import { useQuery } from "react-query";
import { USERS_ENDPOINT } from "../endpoints";

const useGetUsers = () => {
  const queryKey = ["user.getAllUser"];
  return useQuery<any, Error>(
    queryKey,
    async () => await (await fetch(USERS_ENDPOINT)).json()
  );
};

export default useGetUsers;
