import { Button, Table, Space } from "antd";
import Modal from "antd/lib/modal/Modal";
import Column from "antd/lib/table/Column";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import {
  deleteDevice,
  getPageDevice,
  getPageDeviceSorting,
} from "../../../redux/actions/device";
import swal from "sweetalert";
import { ADD_SCREEN, BORROW_SCREEN, EDIT_SCREEN } from "./constant";
import DeviceChange from "./DeviceChange";
import PersonBorrowDevice from "./PersonBorrowDevice";
function Device() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [onShowModalBorrow, setOnShowModalBorrow] = useState(false);
  const [onShowModalAdd, setOnShowModalAdd] = useState(false);
  const [onScreen, setOnScreen] = useState();
  const [modalBorrowId, setModalBorrowId] = useState();

  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.list);

  const dataSource = devices.devices.map((item) => ({
    id: item.id,
    key: item.id,
    deviceName: item.deviceName,
    status: item.status,
  }));

  const { path } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPageDevice(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const onTableChange = (pagination, filters, sorter) => {
    console.log(pagination);
    if (currentPage != pagination.current || pageSize != pagination.pageSize) {
      setCurrentPage(pagination.current);
      setPageSize(pagination.pageSize);
    }

    let sort = sorter.order === "ascend" ? true : false;
    sorter.order && dispatch(getPageDeviceSorting(currentPage, pageSize, sort));
    // : dispatch(getPageDevice(currentPage, pageSize));
  };

  const onShowPersonBorrow = (id) => {
    setOnShowModalBorrow(true);
    setOnScreen(BORROW_SCREEN);
    setModalBorrowId(id);
  };

  const onAddDevice = () => {
    setOnShowModalBorrow(true);
    setOnScreen(ADD_SCREEN);
  };

  const onEditDevice = (id) => {
    setOnShowModalBorrow(true);
    setOnScreen(EDIT_SCREEN);
    setModalBorrowId(id);
  };

  const resetDeviceField = () => {
    dispatch(getPageDevice(currentPage, pageSize));
    onCloseModalAfterUpdate();
  };

  const onCloseModalAfterUpdate = () => {
    setOnShowModalBorrow(false);
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
        dispatch(deleteDevice(id, currentPage, pageSize));
        swal("Your Timetable has been deleted", {
          icon: "success",
        });
      } else {
        swal("you dont't delete this timetable");
      }
    });
  };

  const onClick = () => {
    axios
      .get("/user/redirect?id=1", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        window.location.href = res.data;
      });
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
      <Modal
        visible={onShowModalBorrow}
        title="List Person Borrow"
        centered
        onOk={() => setOnShowModalBorrow(false)}
        onCancel={() => setOnShowModalBorrow(false)}
        width={700}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        {onScreen === BORROW_SCREEN && (
          <PersonBorrowDevice id={modalBorrowId} />
        )}

        {onScreen === ADD_SCREEN && (
          <DeviceChange
            screen={onScreen}
            resetDeviceField={resetDeviceField}
            onCloseModal={onCloseModalAfterUpdate}
          />
        )}

        {onScreen === EDIT_SCREEN && (
          <DeviceChange
            screen={onScreen}
            deviceId={modalBorrowId}
            resetDeviceField={resetDeviceField}
          />
        )}
      </Modal>

      <Button type="primary" onClick={onAddDevice}>
        Add
      </Button>

      <Table
        size="large"
        dataSource={dataSource}
        loading={devices.isLoading}
        pagination={{
          defaultCurrent: currentPage,
          defaultPageSize: pageSize,
          pageSizeOptions: [5, 10, 15],
          total: devices.total,
          showSizeChanger: true,
        }}
        onChange={onTableChange}
      >
        <Column align="center" title="Id" dataIndex="id" key="id" />
        <Column
          align="center"
          title="Device Name"
          dataIndex="deviceName"
          key="deviceName"
          // {...getColumnSearchProps("className")}
        />
        <Column
          align="center"
          title="Status"
          dataIndex="status"
          key="status"
          sorter={true}
          // {...getColumnSearchProps("teacherName")}
        />
        <Column
          align="center"
          title="Borrow"
          key="borrow"
          render={(text, record) => {
            return (
              <Space size="middle">
                <Button
                  type="primary"
                  onClick={() => onShowPersonBorrow(record.id)}
                  ghost
                >
                  watch
                </Button>
              </Space>
            );
          }}
        />
        <Column
          align="center"
          title="Action"
          key="action"
          render={(text, record) => {
            return (
              <Space size="middle">
                <Button
                  type="primary"
                  ghost
                  onClick={() => onEditDevice(record.id)}
                >
                  Edit
                </Button>
                <Button danger ghost onClick={() => onDelete(record.id)}>
                  Delete
                </Button>
              </Space>
            );
          }}
        />
      </Table>
      <button onClick={onClick}>a</button>
    </div>
  );
}

export default Device;
