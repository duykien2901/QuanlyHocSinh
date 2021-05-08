import React from "react";
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "0",
    firstName: <a href="https://ant.design/components/pagination/">gg</a>,
    lastName: "Brown",
    age: 32,
    address: <a>sss</a>,
    tags: ["nice", "developer"],
  },
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: <a>sss</a>,
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];


function Timetable() {
  return (
    <div
      className="site-layout-background"
      style={{
        margin: "24px",
        minHeight: 360,
        height: "100%",
        display: "flex",
        alignContent: "center",

        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default Timetable;
