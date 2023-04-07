import * as React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

function MenuBar() {
  return (
    <>
      <Box>
        <Container maxWidth="1600px">
          <Flex as="nav" align="center" justify="space-between" py={4}>
            <HStack>
              <Link href="/" display="block">
                <Image src="logo.png" width="16" alt="logo" />
              </Link>
              <VStack>
                <Text fontWeight="bold">Stakehouse</Text>
                <Text fontSize="12px">Dashboard</Text>
              </VStack>
            </HStack>

            <Button bg="#6485ff" _hover={{ bg: "#284779" }} color="white">
              Connect wallet
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default MenuBar;
