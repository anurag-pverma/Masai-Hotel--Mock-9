import { Select, Flex, Heading, Box, Image, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, getData, sortData } from "../Redux/actions";

export default function Hotel() {
  const dispatch = useDispatch();
  const rooms = useSelector((store) => store.rooms);

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    let data = await fetch("http://localhost:8000/rooms");
    data = await data.json();
    dispatch(getData(data));
    console.log(data);
  }

  async function filterRoom(e) {
    let value = e.target.value;
    let res = await fetch(`http://localhost:8000/rooms?category=${value}`);
    res = await res.json().then((res) => dispatch(filterData(res)));
  }

  function sortRoom(e) {
    let sortBy = e.target.value;
    let sortedData = [...rooms];

    if (sortBy == "asc") {
      sortedData.sort((a, b) => {
        return a.cost - b.cost;
      });
    }

    if (sortBy == "desc") {
      sortedData.sort((a, b) => {
        return b.cost - a.cost;
      });
    }

    dispatch(sortData(sortedData));
  }
  return (
    <Flex w={"100vw"} flexDirection={"column"}>
      <Flex alignItems="center" justifyContent="center" w={"100%"} m={"1rem 0"}>
        <Select
          placeholder="Filter by category"
          width="300px"
          mr="2rem"
          onChange={filterRoom}
        >
          <option value="family">Family</option>
          <option value="duluxe">Duluxe</option>
          <option value="suit">Suit</option>
        </Select>

        <Select placeholder="Sort by price" width="300px" onChange={sortRoom}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </Flex>

      <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
        {rooms.map((el, index) => {
          return (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              p={"1rem"}
              m={"1rem"}
              key={index}
            >
              <Image
                src={el.image_url}
                alt="room"
                w={"400px"}
                h={"250px"}
              ></Image>
              <Box>
                <Heading m={"1rem 0"} size={"md"}>
                  {el.category.toUpperCase()} ROOM
                </Heading>
                <p>Type of Room : {el.type_of_room}</p>
                <p>Bed : {el.bed_type}</p>
                <p>No. of Adults : {el.no_of_persons}</p>
                <p>Capacity : {el.capacity}</p>
                <p>Cost : Rs. {el.cost}</p>
                <Button variant="solid" colorScheme={"teal"} m={"1rem 0"}>
                  Book Now
                </Button>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
