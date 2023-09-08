import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
interface Props {
  text: string;
}
const ErrorPage = () => {
  const routeErrors = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Error</Heading>
        <Text>
          {isRouteErrorResponse(routeErrors)
            ? "This Page does not exist"
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
