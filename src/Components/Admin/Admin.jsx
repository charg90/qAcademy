import React, { useState } from "react";
import { getUsers } from "../../FireBase/getUsers";
import { Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import { map } from "@firebase/util";

const Admin = () => {
  const [users, setUser] = useState([]);
  const handleGetUsers = async () => {
    try {
      const users = await getUsers();
      setUser(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div>
      {users ? (
        <Table bordered className="text-white">
          <thead>
            <tr>
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
                  <Button variant={!user.trader ? "danger" : "success"}>
                    {!user.trader ? "inactivo" : "activo"}
                  </Button>
                </td>
                <td>
                  <Button
                    variant={!user.inverBur ? "danger" : "success"}
                    className="text-center"
                  >
                    {!user.inverBur ? "inactivo" : "activo"}
                  </Button>
                </td>
                <td>
                  <Button variant={!user.combo ? "danger" : "success"}>
                    {!user.combo ? "inactivo" : "activo"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </div>
  );
};

export default Admin;
