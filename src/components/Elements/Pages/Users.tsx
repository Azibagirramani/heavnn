import { useMemo, useState } from "react";
import {
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Input,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { useUserHooks } from "@/hooks/api";

import type { UserProps } from "types.dto";

export default function Books() {
  const useUsersQuery = useUserHooks.useGetAllUsers();
  const TableHeader = ["Full Name", "Username", "Email", "Address"];
  const [searchKey, setSearchKey] = useState<string>("");
  const getComputedUserList = useMemo(() => {
    if (!useUsersQuery.data) {
      return [{}] as Array<UserProps>;
    }
    return useUsersQuery.data.filter((users: UserProps) =>
      users.name.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
  }, [useUsersQuery.data, searchKey]);

  return (
    <Stack spacing={"20px"}>
      <Flex justifyContent={"end"}>
        <Input
          type={"search"}
          placeholder={"Search first or lastname"}
          width={"fit-content"}
          value={searchKey}
          name={"q"}
          size={"lg"}
          focusBorderColor={"purple.400"}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </Flex>
      <TableContainer width={"100%"}>
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
            {getComputedUserList.map((rows: UserProps, index: number) => {
              return (
                <Tr key={index}>
                  <Td>{rows.name}</Td>
                  <Td>{rows.username}</Td>
                  <Td>{rows.email}</Td>
                  <Td>
                    {rows.address && rows.address.street} {", "}
                    {rows.address && rows.address.city}
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
