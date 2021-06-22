import React from "react";
import { Table, Row, Space, Button } from "antd";
import Column from "antd/lib/table/Column";
import { DeviceWrapper, ModalWrapper } from "../../teacher/device/style";
import { PlusOutlined } from "@ant-design/icons";

function Device() {
  return (
    <DeviceWrapper
      style={{
        margin: "50px 24px 24px",
        minHeight: 360,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <div className="title">
        <div className="title-device">Table Device</div>
        <div className="comment">Here is a subtitle for this table</div>
      </div>
      <ModalWrapper
        // visible={onShowModalBorrow}
        title="List Person Borrow"
        centered
        // onOk={() => setOnShowModalBorrow(false)}
        // onCancel={() => setOnShowModalBorrow(false)}
        width={700}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        {/* {onScreen === BORROW_SCREEN && (
          <PersonBorrowDevice id={modalBorrowId} />
        )}

        {onScreen === ADD_SCREEN && (
          <DeviceChange screen={onScreen} resetDeviceField={resetDeviceField} />
        )}

        {onScreen === EDIT_SCREEN && (
          <DeviceChange
            screen={onScreen}
            deviceId={modalBorrowId}
            resetDeviceField={resetDeviceField}
            onCloseModal={onCloseModalAfterUpdate}
          />
        )} */}
      </ModalWrapper>

      <Row
        justify="end"
        style={{
          padding: "80px 24px 0px 24px",
        }}
      >
        <Button
          type="primary"
          // onClick={onAddDevice}
          className="add-btn"
        >
          <PlusOutlined />
          Add
        </Button>
      </Row>
      <Table
        size="large"
        // dataSource={dataSource}
        // loading={devices.isLoading}
        pagination={
          {
            // defaultCurrent: currentPage,
            // defaultPageSize: pageSize,
            // pageSizeOptions: [5, 10, 15],
            // total: devices.total,
            // showSizeChanger: true,
          }
        }
        // onChange={onTableChange}
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
                  // onClick={() => onShowPersonBorrow(record.id)}
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
                  // onClick={() => onEditDevice(record.id)}
                >
                  Edit
                </Button>
                <Button
                  danger
                  ghost
                  // onClick={() => onDelete(record.id)}
                >
                  Delete
                </Button>
              </Space>
            );
          }}
        />
      </Table>
    </DeviceWrapper>
  );
}

export default Device;
