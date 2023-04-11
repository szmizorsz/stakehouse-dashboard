import * as React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
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
                <Text fontSize="12px" style={{ margin: "0" }}>
                  Dashboard
                </Text>
              </VStack>
            </HStack>

            <Button bg="blue.800" _hover={{ bg: "#6485ff" }} color="white">
              Connect wallet
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default MenuBar;
