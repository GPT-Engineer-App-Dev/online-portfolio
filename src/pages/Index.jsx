import { Box, Flex, Text, VStack, Heading, Button, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" p={4} justifyContent="space-between" bg="gray.100" align="center">
        <Heading size="md">GPT Engineer</Heading>
        <Box>
          <Link href="#welcome" p={2}>Welcome</Link>
          <Link href="#about" p={2}>About</Link>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Box>
      </Flex>
      <VStack spacing={10} p={10} align="center">
        <Box id="welcome" p={10} bg="gray.200" w="full" textAlign="center">
          <Heading>Welcome to GPT Engineer</Heading>
          <Text>Discover the future of web development with AI.</Text>
        </Box>
        <Box id="about" p={10} bg="gray.300" w="full" textAlign="center">
          <Heading>About Me</Heading>
          <Text>I am a web developer specializing in modern, responsive web applications.</Text>
        </Box>
        <Box id="portfolio" p={10} bg="gray.200" w="full" textAlign="center">
          <Heading>Portfolio</Heading>
          <Text>Check out some of my recent projects.</Text>
        </Box>
        <Box id="contact" p={10} bg="gray.300" w="full" textAlign="center">
          <Heading>Contact Me</Heading>
          <Flex justify="center" gap="20px">
            <Link href="https://github.com" isExternal><Icon as={FaGithub} w={8} h={8} /></Link>
            <Link href="https://linkedin.com" isExternal><Icon as={FaLinkedin} w={8} h={8} /></Link>
            <Link href="mailto:example@example.com"><Icon as={FaEnvelope} w={8} h={8} /></Link>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;