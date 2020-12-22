import { useContext, useState } from "react";
import { Header, Form, Button, Segment } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  //init register values
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");

  const { handleRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = () => {
    if (password === confirmPassword) {
      handleRegister({ email, password }, props.history);
    }else{
      alert("passwords dont match");
    }
  };

  return (
    <>
      <Header as="h1">Register</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Input
          label="Confirm Password"
          name="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Segment basic textAlign="center">
          <Button type="submit">register</Button>
        </Segment>
      </Form>
    </>
  );
};
