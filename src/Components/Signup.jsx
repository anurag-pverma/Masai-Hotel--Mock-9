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
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const toast = useToast();
  const navigate = useNavigate();

  // States for form
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Storing User Credentials to Local Storage
  function handleSignup(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(signupForm));
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    navigate("/login");
  }

  function handleChange(e) {
    setSignupForm({ ...signupForm, [e.target.id]: e.target.value });
  }
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDirection={"column"}
    >
      <Heading m={"1rem"}>USER SIGNUP</Heading>
      <FormControl
        width="30%"
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"2rem"}
      >
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />

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
          onClick={handleSignup}
        >
          Signup
        </Button>
        <FormHelperText>
          Already have an account ?{" "}
          <Link
            to={"/login"}
            style={{
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Login Here
          </Link>
        </FormHelperText>
      </FormControl>
    </Flex>
  );
}
