import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import useGameQueryStore from "../../store";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const setSearchTextInStore = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSearchTextInStore(searchText);
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          borderRadius={20}
          placeholder="Search games"
          variant="filled"
          value={searchText}
        />
        {searchText?.length > 0 && (
          <InputRightElement
            onClick={() => {
              setSearchText("");
              setSearchTextInStore("");
            }}
            children={<MdOutlineClose />}
          ></InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
