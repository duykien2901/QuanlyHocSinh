import React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import Column from "antd/lib/table/Column";

function PersonBorrowDevice({ id }) {
  const deviceList = useSelector((state) => state.devices.list);

  const findDatasourse = () => {
    let dataSource = deviceList.devices.find((item) => item.id === id);
    return dataSource?.personBorrowDevice.map((item) => {
      item.key = item.id;
      return item;
    });
  };

  // console.log(new Date(dataSource[0].lastUseAt).getFullYear());

  return (
    <Table dataSource={findDatasourse()}>
      <Column
        align="center"
        title="Account ID"
        dataIndex="accountId"
        key="accountId"
        // {...getColumnSearchProps("className")}
      />
      <Column
        align="center"
        title="Username"
        dataIndex="username"
        key="username"
        // {...getColumnSearchProps("className")}
      />
      <Column
        align="center"
        title="Teacher Name"
        dataIndex="teacherName"
        key="teacherName"
        // {...getColumnSearchProps("className")}
      />
      <Column
        align="center"
        title="Last use at"
        dataIndex="lastUseAt"
        key="lastUseAt"
        // {...getColumnSearchProps("className")}
      />
    </Table>
  );
}

export default PersonBorrowDevice;
