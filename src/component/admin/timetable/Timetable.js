import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag, Space, Button, Popconfirm, Input, Row } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import apis from "../../../redux/apis";
import {
  getTimetable,
  deleleTimetable,
  deleteTimetable,
  searchTimetable,
  searchTimetableDetails,
} from "../../../redux/actions/timtable";
import { TableWrapper } from "./style";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import swal from "sweetalert";
import Search from "antd/lib/transfer/search";

const { Column } = Table;

function Timetable() {
  const [isLoadding, setIsLoadding] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [valueSearch, setValueSearch] = useState("");
  const [searchDetals, setSearchDetails] = useState({
    className: "",
    teacherName: "",
    courseName: "",
  });
  const { path } = useRouteMatch();
  const history = useHistory();

  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.timetables.list);

  const data = dataSource.timetables.map((item) => {
    item.key = item.id;
    return item;
  });

  useEffect(() => {
    dispatch(searchTimetableDetails(current, pageSize, searchDetals));
  }, [dispatch, current, pageSize, searchDetals]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    setSearchDetails((searchDetals) => ({
      ...searchDetals,
      [dataIndex]: selectedKeys[0] ? selectedKeys[0] : "",
    }));
    confirm();
  };

  const handleReset = (clearFilters, selectedKeys, dataIndex) => {
    clearFilters();
    setSearchDetails((searchDetals) => ({
      ...searchDetals,
      [dataIndex]: "",
    }));
  };

  const onDelete = (id) => {
    swal({
      title: "Are you sure",
      text: "Once deleted, you will not be able to recover this timetable!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTimetable(id, current, pageSize, searchDetals));
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
    setValueSearch(value);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters, selectedKeys, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  });
  return (
    <TableWrapper
      style={{
        margin: "50px 24px 24px",
        minHeight: 360,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <div className="title">
        <div className="title-timtable">Table Timetable</div>
        <div className="comment">Here is a subtitle for this table</div>
      </div>
      <Row
        justify="end"
        style={{
          padding: "80px 24px 0px 24px",
        }}
      >
        <Link to={`${path}/add`}>
          <Button type="primary" className="add-btn">
            <PlusOutlined />
            Add
          </Button>
        </Link>
      </Row>

      <Table
        dataSource={data}
        loading={dataSource.isLoading}
        pagination={{
          defaultCurrent: current,
          defaultPageSize: pageSize,
          pageSizeOptions: [5, 10, 15],
          total: dataSource.total,
          showSizeChanger: true,
          onChange: onPageChange,
        }}
      >
        <Column align="center" title="Id" dataIndex="id" key="id" />
        <Column
          align="center"
          title="Classroom"
          dataIndex="className"
          key="className"
          {...getColumnSearchProps("className")}
        />
        <Column
          align="center"
          title="Teacher"
          dataIndex="teacherName"
          key="teacherName"
          {...getColumnSearchProps("teacherName")}
        />
        <Column
          align="center"
          title="Subject"
          dataIndex="courseName"
          key="courseName"
          {...getColumnSearchProps("courseName")}
        />
        <Column
          align="center"
          title="Day of Week"
          dataIndex="dayOfWeek"
          key="dayOfWeek"
        />
        <Column align="center" title="Shift" dataIndex="shift" key="shift" />

        <Column
          align="center"
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
    </TableWrapper>
  );
}

export default Timetable;
