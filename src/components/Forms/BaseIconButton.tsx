import { IconButton, IconButtonProps } from "@chakra-ui/react";
const BaseIconButton = (props: IconButtonProps) => {
  return (
    <IconButton
      bg="white"
      borderColor="purple.400"
      borderWidth="2px"
      _hover={{
        bgColor: "white",
      }}
      {...props}
    ></IconButton>
  );
};

export default BaseIconButton;
