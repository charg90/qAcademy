import React, { useState, useRef } from "react";
import { getUsers } from "../../FireBase/getUsers";
import { searchUser } from "./../../FireBase/searchUser";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import Spinners from "../Commons/Spinner/Spinners";
import styles from "./admin.module.css";

import { ButtonUpdate } from "../Buttons/ButtonUpdate";

const Admin = () => {
  const emailRef = useRef();
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchUser = async (e) => {
    e.preventDefault();

    const user = await searchUser(emailRef.current.value);
    setUser(user);
  };

  const handleGetUsers = async () => {
    try {
      const users = await getUsers();
      console.log(users);
      setUser(users);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className={`${styles.container}`}>
      {!loading ? (
        <>
          <form
            onSubmit={(e) => handleSearchUser(e)}
            className="d-flex gap-2 mt-2 justify-content-center"
          >
            <label labelFor="search" className="text-white">
              Buscar{" "}
            </label>
            <input
              type="text"
              name="search"
              id="search"
              ref={emailRef}
              className={`${styles.adminInput}`}
            />
            <button className={`${styles.btnAdmin}`}>Buscar</button>
            {users.length == 0 && (
              <p className="text-white">
                pusite mal el mail teto o te lo pasaron mal o no existe
              </p>
            )}
          </form>
          <Table className={`${styles.table}`} responsive>
            <thead>
              <tr className="text-white">
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Uid</th>
                <th>Trader</th>
                <th>Inversor Bursatil</th>
                <th>Combo</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user.email}</td>
                  <td>{user.uid}</td>
                  <td>
                    <ButtonUpdate
                      user={user}
                      course="trader"
                      setUser={setUser}
                    />
                  </td>
                  <td className="d-flex justify-content-center">
                    <ButtonUpdate
                      user={user}
                      course="inverBur"
                      setUser={setUser}
                    />
                  </td>
                  <td>
                    <ButtonUpdate
                      user={user}
                      course="combo"
                      setUser={setUser}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <Spinners />
      )}
    </div>
  );
};

export default Admin;
