import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import activateCoures from "../../FireBase/activatedCourse";
import { getUsers } from "../../FireBase/getUsers";

export const ButtonUpdate = ({ user, course, setUser }) => {
  const [buttonLoading, setButtonLoading] = useState(false);

  let nameCourse = "";
  if (course === "trader") {
    nameCourse = user.trader;
  }
  if (course === "inverBur") {
    nameCourse = user.inverBur;
  }
  if (course === "combo") {
    nameCourse = user.combo;
  }

  const handlerUpdate = async () => {
    console.log(nameCourse);
    try {
      setButtonLoading(true);
      const response = await activateCoures(user, course);
      const data = await getUsers();
      setUser(data);
      setButtonLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      variant={!nameCourse ? "danger" : "success"}
      name="trader"
      onClick={async () => {
        await handlerUpdate();
      }}
    >
      {!buttonLoading ? (
        !nameCourse ? (
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
  );
};
