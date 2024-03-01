import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {

const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Button 
        zIndex={"overlay"}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme='purple'
        padding={"0"}
        h={"10"}
        w={"10"}
        borderRadius={"full"}
        onClick={onOpen}
        >
            <BiMenuAltLeft size={"20"}/>
        </Button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    Video Gallery
                </DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={"flex-start"}>
                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/upload'}>Upload Video</Link>
                        </Button>
                    </VStack>
                    <HStack position={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
                        <Button onClick={onClose} colorScheme='purple'>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                            <Link to={'/signup'}>SignUp</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header