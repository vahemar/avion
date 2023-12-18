import React, { useState, useEffect } from "react";
import { ReactComponent as Search } from "../../assets/svg/Search (1).svg";
import { ReactComponent as Cart } from "../../assets/svg/Shopping--cart.svg";
import { ReactComponent as Profile } from "../../assets/svg/User--avatar.svg";
import { Box, Divider, Flex, HStack, Text, Center, Button } from "@chakra-ui/react";



function Header() {

    const [pages, setPages] = useState([])
   
    console.log(pages)
    
    const getPages = async() => {
        await fetch("http://localhost:3004/pages", { 
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
            .then((response) => response.json())
            .then((data) => setPages(data))
            .catch((error) => console.log(error))
            // .finally(() => console.log("barev dzez"))
    } 


    useEffect(() => {
        getPages()
    }, [])



    return (

        <Box>
            <Flex justifyContent="space-between" padding={4} alignItems="baseline">
                <Search />
               
                <Text
                    color="#22202E"
                    fontFamily="Clash Display"
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight={400}>
                    Avion
                </Text>
                <Box>
                    <HStack>
                        <Cart />
                        <Profile />
                    </HStack>
                </Box>
            </Flex>
            <Divider orientation="horizontal" />
            <Flex justifyContent={"center"}>
                <HStack spacing={8} pt={3}>
                    {
                        pages?.map(({name, id}) => (
                            <Center key={id}>{name}</Center>
                        ))
                    }
                </HStack>
            </Flex>
        </Box>
    )
}

export default Header