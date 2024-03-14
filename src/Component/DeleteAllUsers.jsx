import { clearAllUsers } from "../Component/redux/slices/userslice";
import { useDispatch } from "react-redux";
const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const deleteUser = () => {
    dispatch(clearAllUsers());
  };
  return (
    <div>
      <button style={{ color: "red" }} onClick={deleteUser}>
        Delete User
      </button>
    </div>
  );
};

export default DeleteAllUsers;
