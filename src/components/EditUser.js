import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { AppContext } from "../context/AppContext";
const EditUser = () => {
  const { editUser, users } = useContext(AppContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  // const history = useHistory();
  const currentUserId = useParams();

  useEffect(() => {
    const userId = currentUserId;
    // const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    // history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={selectedUser.name}
          onChange={onChange}
          name="name"
          placeholder="Enter user"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default EditUser;
