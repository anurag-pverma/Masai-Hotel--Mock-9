import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Select,
  Button,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions";
import { EditModal } from "./EditModal";

export default function Admin() {
  const dispatch = useDispatch();
  let data = useSelector((store) => store.rooms);
  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    let res = await fetch("http://localhost:8000/rooms");
    res = await res.json();
    dispatch(getData(res));
  }

  async function handleDelete(id) {
    let res = await fetch(`http://localhost:8000/rooms/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    apiCall();
  }
  return (
    <Flex w={"100vw"} alignItems={"center"} justifyContent="space-evenly">
      {/* Admin Hotel Form */}
      <Flex alignItems="center" justifyContent="center">
        <FormControl boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} p={"2rem"}>
          <Heading m={15}>ADD ROOM</Heading>
          <FormLabel mt="10px">Choose Category</FormLabel>
          <Select placeholder="Choose Category" id="category">
            <option value="family">Family</option>
            <option value="fuluxe">Duluxe</option>
            <option value="suit">Suit</option>
          </Select>

          <FormLabel mt="10px">Image of the room</FormLabel>
          <Input type="text" placeholder="Image URL" id="image_url" />

          <FormLabel mt="10px">Type</FormLabel>
          <Select placeholder="Choose Room Type" id="type_of_room">
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </Select>

          <FormLabel mt="10px">Bed Type</FormLabel>
          <Select placeholder="Choose Bed Type" id="bed_type">
            <option value="Single">Single</option>
            <option value="Double">Double</option>
          </Select>

          <FormLabel mt="10px">No. of Adults</FormLabel>
          <Input type="number" placeholder="00" id="no_of_persons" />

          <FormLabel mt="10px">Max Capacity</FormLabel>
          <Input type="number" placeholder="00" id="capacity" />

          <FormLabel mt="10px">Cost per night</FormLabel>
          <Input type="number" placeholder="Rs. 999" id="cost" />

          <Button mt="15px" width="full" type="submit" colorScheme="blue">
            Add Room
          </Button>
          <FormHelperText>Enter Room Details.</FormHelperText>
        </FormControl>
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading m={"2rem"}>ADMIN DASHBOARD</Heading>
        <TableContainer
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          pt={"1rem"}
        >
          <Table variant="striped">
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Category</Th>
                <Th>Type of Room</Th>
                <Th>Bed Type</Th>
                <Th>No of persons</Th>
                <Th>Capacity</Th>
                <Th>Cost</Th>
                <Th>Status</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el, index) => {
                return (
                  <Tr key={index + 1}>
                    <Td>{el.id}</Td>
                    <Td>{el.category}</Td>
                    <Td>{el.type_of_room}</Td>
                    <Td>{el.bed_type}</Td>
                    <Td>{el.no_of_persons}</Td>
                    <Td>{el.capacity}</Td>
                    <Td>{el.cost}</Td>
                    <Td>{el.booked ? "Booked" : "Not Booked"}</Td>
                    <Td>
                      <EditModal el={el} apiCall={apiCall} />
                    </Td>
                    <Td>
                      <Button
                        variant={"solid"}
                        colorScheme={"red"}
                        onClick={() => {
                          handleDelete(el.id);
                        }}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}
