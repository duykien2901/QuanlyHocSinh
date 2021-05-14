import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag, Space, Button } from "antd";
import apis from "../../../redux/apis";
import { getTimetable, deleleTimetable, deleteTimetable } from "../../../redux/actions/timtable";
import { Link, useRouteMatch } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import Loading from "../../../commom/Loading";

const { Column, ColumnGroup } = Table;

function Timetable() {
  const [isLoadding, setIsLoadding] = useState(false);
  const { path } = useRouteMatch();

  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.timetables.list);

  const data = dataSource.timetables.map((item) => {
    item.key = item.id;
    return item;
  });
<<<<<<< HEAD
=======

>>>>>>> 8eaf0d8... push code

  useEffect(() => {
    // dispatch(getTimetable());
  }, []);

 

  const onDelete = (id) => {
    let newTimetables = dataSource.timetables.filter((item) => item.id !== id);
    dispatch(deleteTimetable(id, newTimetables));
  }
  console.log("re-render");
  return (
    <div
      className="site-layout-background"
      style={{
        margin: "24px",
        minHeight: 360,
        height: "100%",
        // display: "flex",
        // alignContent: "center",
        // flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Link to={`${path}/add`}>
        <Button type="primary">Add</Button>
      </Link>
      {dataSource.isLoading ? (
        <Loading />
      ) : (
        <Table dataSource={data}>
          <Column title="Id" dataIndex="id" key="id" />
          <Column title="Classroom" dataIndex="className" key="className" />
          <Column title="Teacher" dataIndex="teacherName" key="teacherName" />
          <Column title="Subject" dataIndex="courseName" key="courseName" />
          <Column title="Day of Week" dataIndex="dayOfWeek" key="dayOfWeek" />
          <Column title="Shift" dataIndex="shift" key="shift" />

          <Column
            title="Action"
            key="action"
            render={(text, record) => {
              return (
                <Space size="middle">
                  <Link to={`${path}/edit/${record.id}`}>
                    <Button type="primary" ghost>
                      Edit
                    </Button>
                  </Link>
                  <Button danger onClick={() => onDelete(record.id)}>Delete</Button>
                </Space>
              );
            }}
          />
        </Table>
      )}
    </div>
  );
}

export default Timetable;
