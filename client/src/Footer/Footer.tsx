import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  // import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  

  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
          bgGradient='linear(to-r, teal.500, green.500)'
        rounded={'full'}
        w={20}
        h={20}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
      // bgGradient='linear(to-r, teal.500, green.800)'
              color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}
          >
         
          <Stack direction={'row'} spacing={40} 
            >
            <Link href={"/"}>Home</Link>
            <Link href={"../login"}>Login</Link>
            <Link href={"../page"}>About Us</Link>
            <Link href={'/page/contact'}>Contact Us</Link>
            <Link href={"../rules"}>Rules</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={3}
          borderStyle={'solid'}
          borderColor={useColorModeValue('#19811E', '#19811E')}>
          <Container
            as={Stack}
            maxW={'6x1'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text padding ={"5px"}>© Rentar All rights reserved</Text>
            <Stack direction={'row'} spacing={30}>
              {/* <SocialButton label={'Twitter'} href={'https://twitter.com/'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.youtube.com/'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/'}>
                <FaInstagram />
              </SocialButton> */}
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }