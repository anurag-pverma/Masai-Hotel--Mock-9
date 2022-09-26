import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const toast = useToast();
  const navigate = useNavigate();

  const [adminForm, setAdminForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdminForm({ ...adminForm, [e.target.id]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (
      adminForm.email === "admin@gmail.com" &&
      adminForm.password === "masai"
    ) {
      toast({
        title: "Login Successful.",
        description: "You've logged into your account.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      navigate("/admin");
    } else {
      toast({
        title: "Login Failed.",
        description: "You've entered invalid credentials.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDirection={"column"}
    >
      <Heading m={"1rem"}>ADMIN LOGIN</Heading>
      <FormControl
        width="30%"
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"2rem"}
      >
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="name@domain.com"
          id="email"
          onChange={handleChange}
        />

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />

        <Button
          mt="15px"
          width="full"
          type="submit"
          colorScheme="blue"
          onClick={handleSignIn}
        >
          Login
        </Button>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Flex>
  );
}
