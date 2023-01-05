import React, { useState } from "react";
import { getUsers } from "../../FireBase/getUsers";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import Spinners from "../Commons/Spinner/Spinners";
import styles from "./admin.module.css";
import activateCoures from "../../FireBase/activatedCourse";

import { ButtonUpdate } from "../Buttons/ButtonUpdate";

const Admin = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handlerUpdate = async (user, target) => {
    setButtonLoading(true);
    await activateCoures(user, target);
    const users = await getUsers();
    setUser(users);
    setButtonLoading(false);
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
                  <ButtonUpdate user={user} course="trader" setUser={setUser} />
                </td>
                <td className="d-flex justify-content-center">
                  <ButtonUpdate
                    user={user}
                    course="inverBur"
                    setUser={setUser}
                  />
                </td>
                <td>
                  <ButtonUpdate user={user} course="combo" setUser={setUser} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Spinners />
      )}
    </div>
  );
};

export default Admin;
