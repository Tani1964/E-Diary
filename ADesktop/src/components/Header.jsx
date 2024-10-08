import {
  Kbd,
  Card,
  Flex,
  Box,
  Text,
  Input,
  IconButton,
  Icon,
  Avatar,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiSearch, FiBell } from "react-icons/fi";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BiBell, BiUser, BiLogOut, BiUserVoice } from "react-icons/bi";
import { useAuth, axi } from "../context/AuthContext";
import { useState, useEffect } from "react";



const Header = () => {
  const [user, setUser] = useState({})
  const {setAuthInfo, setUserInfo, authState} = useAuth()
  useEffect(() => {
    const getUser = async () => {
      const token = await localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axi.get("/admin/get-user", { headers });
      setUser(response.data.user);
    };
    getUser();
  }, [setUserInfo]);
  const handleLogout = async() =>{
    setAuthInfo(null)
  }
  return (
    <Card>
      <Flex
        as="header"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        padding="4"
        boxShadow="md"
      >
        <Flex alignItems="center">
          <img src={Logo} className="h-10 border-white-4" />
        </Flex>

        <Flex alignItems="" className="gap-4 items-center">
          <Flex className="bg-gray-100 py-2 px-4 items-center border-2 border-gray-200 rounded-lg">
          <FiSearch className="h-5 w-8"/>
            <Input disabled placeholder="Search..." maxW="200px" mr="2" size="sm" />
            <span className="flex h-fit gap-2">
              <Kbd className="bg-white h-fit">ctrl</Kbd>{" "}
              <Kbd className="bg-white h-fit">F</Kbd>
            </span>
          </Flex>
          {console.log(user.full_name)}
          <Box p={4}>
              <Menu>
                <MenuButton>
                  <Avatar
                    size="sm"
                    name={user.full_name}
                    
                    bg={"white"}
                    color={"green"}
                  />
                </MenuButton>

                <MenuList>
                  {/* <MenuItem>
                  <a href="/profile">Profile</a>
                </MenuItem> */}
                  <MenuItem>
                    <BiBell /> <a href="/notifications">Notifications</a>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <BiLogOut /> Logout
                  </MenuItem>
                </MenuList>
              </Menu>
              </Box>
          
        </Flex>
      </Flex>
    </Card>
  );
};

export default Header;
