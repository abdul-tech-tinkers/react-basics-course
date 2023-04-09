import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const [searchText, setSearchText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchText);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          onChange={(event) => setSearchText(event.target.value)}
          borderRadius={20}
          placeholder="Search games"
          variant="filled"
          value={searchText}
        />
        {searchText?.length > 0 && (
          <InputRightElement
            onClick={() => {
              setSearchText("");
              onSearch("");
            }}
            children={<MdOutlineClose />}
          ></InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
