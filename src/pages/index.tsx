import Head from "next/head";
import { Inter } from "next/font/google";
import MenuBar from "@/components/menuBar";
import Footer from "@/components/footer";
import { Box, VStack } from "@chakra-ui/react";
import StakeHouses from "@/components/stakeHouses";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>Stakehouse LSD Networks dApp</title>
        <meta name="theme-color" content="#121212" />
        <meta
          name="description"
          content="Stake a validator with 4 ETH. Start an LSD network in 60 seconds. Unique yield with fungible derivatives. Empowering home stakers."
        />
        <meta property="og:url" content="https://joinstakehouse.com/" />
        <meta property="og:title" content="Stakehouse LSD Networks dApp" />
        <meta
          property="og:description"
          content="Stake a validator with 4 ETH. Start an LSD network in 60 seconds. Unique yield with fungible derivatives. Empowering home stakers."
        />
        <meta
          property="og:image"
          content="https://lsdapp.netlify.app/Homepage.jpg"
        />
        <meta property="twitter:domain" content="https://joinstakehouse.com/" />
        <meta property="twitter:url" content="https://joinstakehouse.com/" />
        <meta name="twitter:title" content="Stakehouse LSD Networks dApp" />
        <meta
          name="twitter:description"
          content="Stake a validator with 4 ETH. Start an LSD network in 60 seconds. Unique yield with fungible derivatives. Empowering home stakers."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://lsdapp.netlify.app/Homepage.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Box>
        <MenuBar />
        <Box minHeight="800px">
          <StakeHouses />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
