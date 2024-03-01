import { Box, Heading, VStack, Stack, HStack, Button, Input, Text} from '@chakra-ui/react'
import { AiOutlineSend } from "react-icons/ai" 

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={"strech"} w={"full"} px={"4"}>
                <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>Subscribe to get Updates</Heading>
                <HStack
                borderBottom={"2px solid white"} py={"2"}>
                    <Input placeholder='Enter Your Email...' border={"none"} borderRadius={"none"}
                        outline={"none"} focusBorderColor='none'
                    />
                    <Button
                    p={"0"} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                        <AiOutlineSend size={"20"}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none", "1px solid white"]}>
                <Heading textTransform={"uppercase"} textAlign={"center"}>
                    Video Gallery
                </Heading>
                <Text>All rights reserved</Text>
            </VStack>
            <VStack w={"full"}>
                <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
                <Button variant={"link"} colorScheme={'white'}>
                    <a href="https://google.com" target='blank'>LinkedIn</a>
                </Button>
                <Button variant={"link"} colorScheme={'white'}>
                    <a href="https://google.com" target='blank'>Github</a>
                </Button>
                <Button variant={"link"} colorScheme={'white'}>
                    <a href="https://google.com" target='blank'>Instagram</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer