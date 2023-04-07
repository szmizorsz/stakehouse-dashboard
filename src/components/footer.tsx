import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py={4}>
      <Divider mb="6" />
      <Box width="100%" px={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="grey">© 2023 Blockswap. All rights reserved.</Text>
          <Flex>
            <Link
              href="https://ipfs.io/ipfs/QmccrbbzaHN5qGLZpgqFRJoj7Djj9ovLCHTPkTbzU4zzgG"
              target="_blank"
              mx={2}
              color="grey"
            >
              BSN Token T&amp;C
            </Link>
            <Link
              href="https://www.blockswap.network/terms"
              target="_blank"
              mx={2}
              color="grey"
            >
              Protocol T&amp;C
            </Link>
            <Link
              href="https://www.blockswap.network/privacy-policy"
              target="_blank"
              mx={2}
              color="grey"
            >
              Privacy
            </Link>
            <Link
              href="https://www.blockswap.network/labs-disclaimer"
              target="_blank"
              mx={2}
              color="grey"
            >
              Labs Disclaimer
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
