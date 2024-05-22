import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaChartLine, FaNewspaper, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="brand.900" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#top-stories" fontSize="lg">Top Stories</Link>
          <Link href="#market-data" fontSize="lg">Market Data</Link>
          <Link href="#financial-news" fontSize="lg">Financial News</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8} align="stretch">
        <Box id="top-stories" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" mb={4}><FaNewspaper /> Top Stories</Heading>
          <Text>Latest top stories will be displayed here...</Text>
        </Box>

        <Box id="market-data" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" mb={4}><FaChartLine /> Market Data</Heading>
          <Text>Latest market data will be displayed here...</Text>
        </Box>

        <Box id="financial-news" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" mb={4}><FaMoneyBillWave /> Financial News</Heading>
          <Text>Latest financial news will be displayed here...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;