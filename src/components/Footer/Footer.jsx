import React from "react";
import { ReactComponent as LinkedIn } from "../../assets/svg/Logo--linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/svg/Logo--facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svg/Logo--instagram.svg";
import { ReactComponent as Skype } from "../../assets/svg/Logo--skype.svg";
import { ReactComponent as Twitter } from "../../assets/svg/Logo--twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/svg/Logo--pinterest.svg";
import { Box, Flex, VStack, HStack, Text, Divider, Button, Center, Input } from "@chakra-ui/react";

function Footer() {
    const menu = [
        { id: 1, name: "New Arrivals" },
        { id: 2, name: "Best sellers" },
        { id: 3, name: "Recently viewed" },
        { id: 4, name: "Popular this week" },
        { id: 5, name: "All products" },
    ];

    const categories = [
        { id: 1, name: "Crockery" },
        { id: 2, name: "Furniture" },
        { id: 3, name: "Homeware" },
        { id: 4, name: "Plant pots" },
        { id: 5, name: "Chairs" },
        { id: 6, name: "Crockery" }
    ];

    const ourCompany = [
        { id: 1, name: "About us" },
        { id: 2, name: "Vacancies" },
        { id: 3, name: "Contact us" },
        { id: 4, name: "Privacy" },
        { id: 5, name: "Returns policy" },
    ];

    const websites = [
        { id: 1, img: <LinkedIn /> },
        { id: 2, img: <Facebook /> },
        { id: 3, img: <Instagram /> },
        { id: 4, img: <Skype /> },
        { id: 5, img: <Twitter /> },
        { id: 6, img: <Pinterest /> }
    ];

    return (
        <Box bg="#2A254B" w="full" mt={111} >
            <Flex justifyContent={"center"} alignItems={"center"} >
                <HStack w="full" alignItems={"baseline"} spacing={1}>
                    <VStack w="full" color="white" alignItems={"flex-start"} p={24} fontWeight={200}>
                        <Text fontSize={20}>Menu</Text>
                        {
                            menu.map(({ id, name }) => (
                                <Center key={id}>{name}</Center>
                            ))
                        }
                    </VStack>
                    <VStack w="full" color="white" alignItems={"flex-start"} p={24} fontWeight={200}>
                        <Text fontSize={20}>Categories</Text>
                        {
                            categories.map(({ id, name }) => (
                                <Box key={id}>{name}</Box>
                            ))
                        }
                    </VStack>
                    <VStack w="full" color="white" alignItems={"flex-start"} p={24} fontWeight={200}>
                        <Text fontSize={20}>Categories</Text>
                        {
                            ourCompany.map(({ id, name }) => (
                                <Box key={id}>{name}</Box>
                            ))
                        }
                    </VStack>
                    <VStack pr={19}>
                        <Flex flexDirection={"column"} >
                            <Text color="white">Join our mailing list</Text>
                            <HStack spacing={0} mt={5}  >
                                <Input
                                    h={12}
                                    w={360}
                                    pl={7}
                                    placeholder="your@email.com"
                                    _placeholder={{ color: "white" }}
                                    border={"none"}
                                    bg="#4A4566"
                                    borderRadius={0} />
                                <Button
                                    h={12}

                                    bg="white"
                                    border="none"
                                    borderRadius={0}>
                                    Sign Up
                                </Button>
                            </HStack>
                        </Flex>
                    </VStack>
                </HStack>
            </Flex>
            <Divider bg="#4A488A" w="full" />
            <Flex>
                <HStack w="full" pr={25} >
                    <Flex w="full"  justifyContent={"space-between"} alignItems={"center"} >
                        <Text p={25} color="white">Copyright 2022 Avion LTD</Text>
                        <Box >
                            <Flex gap="20px"  >
                                {
                                    websites.map(({ id, img }) => (
                                        <Box key={id}>{img}</Box>
                                    ))
                                }
                            </Flex>
                        </Box>
                    </Flex>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Footer