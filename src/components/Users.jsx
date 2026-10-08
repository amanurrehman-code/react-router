import { useNavigate } from "react-router-dom";

const Users = () => {
  const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Mohit" },
  ];

  const navigate = useNavigate();

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>

          <button onClick={() => navigate(`/users/${user.id}`)}>
            View User
          </button>
        </div>
      ))}
    </>
  );
};

export default Users;