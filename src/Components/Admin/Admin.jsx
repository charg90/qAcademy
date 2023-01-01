import React, { useState } from "react";
import { getUsers } from "../../FireBase/getUsers";
import { Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import Spinners from "../Commons/Spinner/Spinners";
import styles from "./admin.module.css";
import activateCoures from "../../FireBase/activatedCourse";
import Spinner from "react-bootstrap/Spinner";

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
                  <Button
                    variant={!user.trader ? "danger" : "success"}
                    name="trader"
                    onClick={async (e) => {
                      await handlerUpdate(user, e.target.name);
                    }}
                  >
                    {!buttonLoading ? (
                      !user.trader ? (
                        "inactivo"
                      ) : (
                        "activo"
                      )
                    ) : (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </Button>
                </td>
                <td>
                  <Button
                    variant={!user.inverBur ? "danger" : "success"}
                    className="text-center w-100 "
                    name="inverBur"
                    onClick={(e) => {
                      activateCoures(user, e.target.name);
                    }}
                  >
                    {!user.inverBur ? "inactivo" : "activo"}
                  </Button>
                </td>
                <td>
                  <Button
                    variant={!user.combo ? "danger" : "success"}
                    name="combo"
                    onClick={(e) => {
                      activateCoures(user, e.target.name);
                    }}
                  >
                    {!user.combo ? "inactivo" : "activo"}
                  </Button>
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
