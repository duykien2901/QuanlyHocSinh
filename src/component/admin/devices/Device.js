import { Button, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { getPageDevice } from "../../../redux/actions/device";
function Device() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.list);
  const dataSource = devices.devices.map((item) => {
    item.key = item.id;
    return item;
  });

  const { path } = useRouteMatch();

  useEffect(() => {
    dispatch(getPageDevice(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
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
      <Link to={`${path}/add`}>
        <Button type="primary">Add</Button>
      </Link>
      <Table
        dataSource={dataSource}
        loading={devices.isLoading}
        pagination={{
          defaultCurrent: currentPage,
          defaultPageSize: pageSize,
          pageSizeOptions: [5, 10, 15],
          total: dataSource.total,
          showSizeChanger: true,
          onChange: onPageChange,
        }}
      >
        <Column title="Id" dataIndex="id" key="id" />
        <Column
          title="Device Name"
          dataIndex="deviceName"
          key="deviceName"
          // {...getColumnSearchProps("className")}
        />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          // {...getColumnSearchProps("teacherName")}
        />
        <Column
          title="Username Borrow"
          dataIndex="username"
          key="username"
          // {...getColumnSearchProps("courseName")}
        />
        <Column title="Teacher" dataIndex="teacherName" key="teacherName" />
        <Column title="Last used" dataIndex="lastUseAt" key="lastUseAt" />
      </Table>
    </div>
  );
}

export default Device;
