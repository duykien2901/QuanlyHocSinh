import React, { useEffect, useState } from "react";
import { Button, Table, Space } from "antd";
import Modal from "antd/lib/modal/Modal";
import "antd/dist/antd.css";
import Column from "antd/lib/table/Column";
import { useParams } from "react-router";
import apis from "../../../redux/apis";

function Timetable() {
  const [timetable, setTimetable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    apis.timetable
      .getTimetableFromStudentId(id)
      .then((res) => {
        setTimetable(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const dataSource = () => {
    let data = timetable.map((item) => ({
      time: `Thứ ${item.dayOfWeek}, Tiết ${item.shift}`,
      className: item.className,
      teacherName: item.teacherName,
      courseName: item.courseName,
    }));
    return data;
  };
  return (
    <div
      style={{
        margin: "24px",
        minHeight: 360,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Table
        size="large"
        dataSource={dataSource()}
        loading={isLoading}
        bordered
        pagination={false}
        // onChange={onTableChange}
      >
        <Column
          align="center"
          title="Time"
          dataIndex="time"
          key="time"
          bordered={false}
        />
        <Column
          align="center"
          title="Classroom"
          dataIndex="className"
          key="className"
          editable={true}
        />
        <Column
          align="center"
          title="Teacher"
          dataIndex="teacherName"
          key="teacherName"
        />
        <Column
          align="center"
          title="Subject"
          dataIndex="courseName"
          key="courseName"
        />
      </Table>
    </div>
  );
}

export default Timetable;
