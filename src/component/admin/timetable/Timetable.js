import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag, Space } from "antd";
import apis from "../../../redux/apis";
import { getTimetable } from "../../../redux/actions/timtable";
import { Link, useRouteMatch } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import Loading from "../../../commom/Loading";

const { Column, ColumnGroup } = Table;

function Timetable() {
  const { path } = useRouteMatch();

  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.timetables.list);

  const data = dataSource.timetables.map((item) => {
    item.key = item.id;
    return item;
  });

  useEffect(() => {
    dispatch(getTimetable());
  }, []);

  const onClick = () => {
    dispatch(getTimetable());

    console.log(dataSource);
  };

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
                  <Link to={`${path}/edit/${record.id}`}>Edit</Link>
                  <a>Delete</a>
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
