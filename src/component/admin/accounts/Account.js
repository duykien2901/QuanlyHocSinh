import { Button, Table, Space, Modal } from "antd";
import Column from "antd/lib/table/Column";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccountUer, getAccountUser } from "../../../redux/actions/auth";
import swal from "sweetalert";
import AccountChange from "./AccountChange";
import { ADD_SCREEN, EDIT_SCREEN } from "../devices/constant";
import { Link } from "react-router-dom";

function Account() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [onShowModalAccount, setOnShowModalAccount] = useState(false);
  const [onScreen, setOnScreen] = useState();
  const [accountId, setAccountId] = useState();
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

  const onTableChange = (pagination, filters, sorter) => {
    console.log(pagination);
    if (currentPage != pagination.current || pageSize != pagination.pageSize) {
      setCurrentPage(pagination.current);
      setPageSize(pagination.pageSize);
    }

    // let sort = sorter.order === "ascend" ? true : false;
    // sorter.order && dispatch(getPageDeviceSorting(currentPage, pageSize, sort));
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
        swal("you dont't delete this account");
      }
    });
  };

  const onShowAddAccount = () => {
    setOnScreen(ADD_SCREEN);
    setOnShowModalAccount(true);
  };

  const onEditAccount = (accountId) => {
    setOnScreen(EDIT_SCREEN);
    setOnShowModalAccount(true);
    setAccountId(accountId);
  };

  const onResetAccountTable = () => {
    dispatch(getAccountUser(currentPage, pageSize));
  };

  const onCloseModalAccount = () => {
    setOnShowModalAccount(true);
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
      {onScreen === ADD_SCREEN && (
        <AccountChange
          screen={onScreen}
          onResetAccountTable={onResetAccountTable}
        />
      )}
      {onScreen === EDIT_SCREEN && (
        <AccountChange
          screen={onScreen}
          accountId={accountId}
          onResetAccountTable={onResetAccountTable}
          onCloseModalAccount={onCloseModalAccount}
        />
      )}
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
      <Button type="primary" onClick={onShowAddAccount}>
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
        onChange={onTableChange}
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
                <Link to={`/admin/account-people/${record.id}`}>
                  <Button ghost type="primary">
                    Watch
                  </Button>
                </Link>
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
                  onClick={() => onEditAccount(record.id)}
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
