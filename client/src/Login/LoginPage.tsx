import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export default function SplitScreen() {
  const navigate = useNavigate();
  return (
    <Stack  minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex  p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input 
            type="text" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input  type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
            </Stack>
            <Button    bgGradient='linear(to-r, teal.900, green.400)' variant={'solid'}
            onClick={(e)=>{
              navigate('/Building')
            }}
            >
              Login
            </Button>
            <p >don't have an ? register</p>
            <Button bgGradient='linear(to-r, teal.900, green.400)' shadow="dark-lg" variant={'solid'}
            onClick={(e)=>{ 
              navigate('/register')
            }}
            
            
            >
             Register
  
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
        // marginRight={'10px'}
        // paddingTop={'210px'}
          width={'100%'}
          height={'100%'}
          alt={'Login Image'}
          objectFit={'cover'}
          
          src={
            "../assets/agents.gif"
          }
        />
      </Flex>
    </Stack>
  );
}