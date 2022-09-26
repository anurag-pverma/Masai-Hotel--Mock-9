import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export function EditModal({ el, apiCall }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [hotelForm, setHotelForm] = useState({
    category: "",
    image_url: "",
    type_of_room: "",
    bed_type: "",
    no_of_persons: "",
    capacity: "",
    cost: "",
    booked: false,
  });

  function handleChange(e) {
    setHotelForm({ ...hotelForm, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await fetch(`http://localhost:8000/rooms/${el.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hotelForm),
    });
    res = await res.json();
    apiCall();
  }

  return (
    <>
      <Box tabIndex={-1} aria-label="Focus moved to this box"></Box>

      <Button mt={4} onClick={onOpen} variant={"solid"} colorScheme={"orange"}>
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel mt="10px">Choose Category</FormLabel>
              <Select id="category" onChange={handleChange}>
                <option value="family">Family</option>
                <option value="duluxe">Duluxe</option>
                <option value="suit">Suit</option>
              </Select>

              <FormLabel mt="10px">Image of the room</FormLabel>
              <Input
                type="text"
                id="image_url"
                onChange={handleChange}
                defaultValue={el.image_url}
              />

              <FormLabel mt="10px">Type</FormLabel>
              <Select id="type_of_room" onChange={handleChange}>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </Select>

              <FormLabel mt="10px">Bed Type</FormLabel>
              <Select id="bed_type" onChange={handleChange}>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
              </Select>

              <FormLabel mt="10px">No. of Adults</FormLabel>
              <Input type="number" id="no_of_persons" onChange={handleChange} />

              <FormLabel mt="10px">Max Capacity</FormLabel>
              <Input type="number" id="capacity" onChange={handleChange} />

              <FormLabel mt="10px">Cost per night</FormLabel>
              <Input type="number" id="cost" onChange={handleChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleSubmit}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
