import { Avatar, Flex, Text } from "@chakra-ui/react";

const Comment = ({ text, profile, username, createdAt }) => {
  return (
    <Flex gap={4}>
      <Avatar src={profile} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>

        <Text fontSize={12} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
