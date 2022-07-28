import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { AppContext } from "../context/AppContext";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(AppContext);
  const history = useNavigate();

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history("/");
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          placeholder="Enter user"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
