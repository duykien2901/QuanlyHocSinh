import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag, Space, Button, Popconfirm, Input } from "antd";
import apis from "../../../redux/apis";
import {
  getTimetable,
  deleleTimetable,
  deleteTimetable,
} from "../../../redux/actions/timtable";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import swal from "sweetalert";

const { Column } = Table;

function Timetable() {
  const [isLoadding, setIsLoadding] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { path } = useRouteMatch();
  const history = useHistory();

  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.timetables.list);

  const data = dataSource.timetables.map((item) => {
    item.key = item.id;
    return item;
  });


  useEffect(() => {
    dispatch(getTimetable(current, pageSize));
  }, [current, pageSize]);

  const onDelete = (id) => {
    let newTimetables = dataSource.timetables.filter((item) => item.id !== id);
    swal({
      title: "Are you sure",
      text: "Once deleted, you will not be able to recover this timetable!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTimetable(id, newTimetables));
        swal("Your Timetable has been deleted", {
          icon: "success",
        });
      } else {
        swal("you dont't delete this timetable");
      }
    });
  };

  const onPageChange = (page, pageSize) => {
    setCurrent(page);
    setPageSize(pageSize);
  };

  const onSearch = (value) => {
    console.log(value);
  }
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
      <Input.Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <Table
        dataSource={data}
        loading={dataSource.isLoading}
        pagination={{
          defaultCurrent: current,
          defaultPageSize: pageSize,
          pageSizeOptions: [5, 10, 15],
          total: dataSource.total,
          // page,
          // showLessItems: true,
          showSizeChanger: true,
          onChange: onPageChange,
        }}
      >
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
                <Button danger onClick={() => onDelete(record.id)}>
                  Delete
                </Button>
              </Space>
            );
          }}
        />
      </Table>
    </div>
  );
}

export default Timetable;
