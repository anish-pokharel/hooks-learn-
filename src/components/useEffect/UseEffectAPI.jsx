import React, { useEffect, useState } from "react";
import Githubuser from "./github/Githubuser";
import Loading from "./github/Loading";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      setUsers(await response.json());
    } catch (error) {
      console.log("my error is " + error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Githubuser users={users} />
    </>
  );
};

export default UseEffectAPI;
