import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../Component/redux/slices/userslice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user;
  });
  console.log(data);
  const DeleteAllUsers = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => DeleteAllUsers(id)}>
              {" "}
              <MdDeleteForever color="#f00" />
            </button>
          </li>
        );
      })}
    </wrapper>
  );
};

export default DisplayUsers;
