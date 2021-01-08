import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
export default () => {
  const { email } = useContext(AuthContext);
  return (
    <>
      <h1 as="h1" textAlign="center">
        Welcome {email}
      </h1>
    </>
  );
};
