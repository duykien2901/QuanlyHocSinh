import { Button, Table, Space, Modal } from "antd";
import Column from "antd/lib/table/Column";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccountUer, getAccountUser } from "../../../redux/actions/auth";
import swal from "sweetalert";
import AccountChange from "./AccountChange";

function Account() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [onShowModalAccount, setOnShowModalAccount] = useState(false);
  const accountList = useSelector((state) => state.accounts.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountUser(currentPage, pageSize));
  }, [dispatch, pageSize, currentPage]);

  const renderDataSource = () => {
    return accountList.accounts.map((item) => {
      item.key = item.id;
      return item;
    });
  };

  const onDeleteAccount = (id) => {
    swal({
      title: "Are you sure",
      text: "Once deleted, you will not be able to recover this account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteAccountUer(id, currentPage, pageSize));
        swal("Your Account has been deleted", {
          icon: "success",
        });
      } else {
        swal("you dont't delete this timetable");
      }
    });
  };

  const renderModalAccount = () => (
    <Modal
      visible={onShowModalAccount}
      title="List Person Borrow"
      centered
      // onOk={() => setOnShowModalBorrow(false)}
      onCancel={() => setOnShowModalAccount(false)}
      width={700}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
    >
      <AccountChange />
    </Modal>
  );
  return (
    <div
      style={{
        margin: "24px",
        minHeight: 360,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      {renderModalAccount()}
      <Button type="primary" onClick={() => setOnShowModalAccount(true)}>
        Add
      </Button>
      <Table
        dataSource={renderDataSource()}
        loading={accountList.isLoading}
        pagination={{
          defaultCurrent: currentPage,
          defaultPageSize: pageSize,
          pageSizeOptions: [5, 10, 15],
          total: accountList.total,
          showSizeChanger: true,
        }}
      >
        <Column align="center" dataIndex="id" title="id" key="id" />
        <Column
          align="center"
          dataIndex="username"
          title="Username"
          key="username"
        />
        <Column
          align="center"
          dataIndex="password"
          title="Password"
          key="Password"
          ellipsis={true}
        />
        <Column
          align="center"
          dataIndex="permission"
          title="Permission"
          key="permission"
        />
        <Column
          align="center"
          title="Information"
          key="information"
          render={(text, record) => {
            return (
              <Space>
                <Button ghost type="primary">
                  Watch
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
                  onClick={() => setOnShowModalAccount(true)}
                >
                  Edit
                </Button>
                <Button danger ghost onClick={() => onDeleteAccount(record.id)}>
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

export default Account;
