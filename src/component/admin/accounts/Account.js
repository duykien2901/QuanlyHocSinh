import { Button, Table } from "antd";
import Column from "antd/lib/table/Column";
import React from "react";

function Account() {
  return (
    <div
      style={{
        margin: "24px",
        minHeight: 360,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Button type="primary">Add</Button>
      <Table>
        <Column />
      </Table>
    </div>
  );
}

export default Account;
