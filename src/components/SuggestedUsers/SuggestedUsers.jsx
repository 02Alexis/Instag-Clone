import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Nijima"
        followers={1987}
        avatar="https://i.pinimg.com/736x/9a/3f/7c/9a3f7c5a3b6a0982971c34e5a60c9866.jpg"
      />
      <SuggestedUser
        name="Kazuto"
        followers={1987}
        avatar="https://i.pinimg.com/736x/01/30/f3/0130f3c011e01aee34e1c6b3b9414b30.jpg"
      />
      <SuggestedUser
        name="Elder"
        followers={1987}
        avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F576601558538831606%2F&psig=AOvVaw0Kh0Aj43_ghpI6PuoSqJWE&ust=1709566366212000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJi6_Zi12IQDFQAAAAAdAAAAABAJ"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link
          href="https://www.instagram.com/masq.01/"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Alexis Tamayo
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
