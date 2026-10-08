import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  const userId = Number(id);

  return (
    <>
      <h1>User ID: {userId}</h1>
    </>
  );
}

export default User;