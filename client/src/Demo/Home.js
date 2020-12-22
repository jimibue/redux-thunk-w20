import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Header, Container } from "semantic-ui-react";
export default () => {
  const { email } = useContext(AuthContext);
  return (
    <Container>
      <Header as="h1" textAlign="center">
        Welcome {email}
      </Header>
    </Container>
  );
};
