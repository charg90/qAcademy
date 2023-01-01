import { getUsers } from "../FireBase/getUsers";
import { useState, useEffect } from "react";

const useGetUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    try {
      const users = await getUsers();
      setLoading(false);
      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return [users, loading];
};
export default useGetUsers;
