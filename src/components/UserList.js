import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { AppContext } from "../context/AppContext";

const UserList = () => {
  const { users, removeUser } = useContext(AppContext);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button color="danger" onClick={() => removeUser(user.id)}>
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </ListGroup>
  );
};

export default UserList;
