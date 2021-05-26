import { Input, Form, Button, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDevice, changeDevice } from "../../../redux/actions/device";
import { ADD_SCREEN, EDIT_SCREEN } from "./constant";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const { Option } = Select;

const validateMessages = {
  required: "${label} is required!",
};

function DeviceChange({ screen, deviceId, resetDeviceField, onCloseModal }) {
  const listDevice = useSelector((state) => state.devices.list);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    if (screen === ADD_SCREEN) {
      const add = new Promise((resolve, reject) => {
        dispatch(addDevice(values, resolve, reject));
      });
      form.setFieldsValue({
        deviceName: "",
        status: "",
      });
      await add;
      resetDeviceField();
    } else {
      const change = new Promise((resolve, reject) => {
        dispatch(changeDevice(values, deviceId, resolve, reject));
      });
      await change;
      resetDeviceField();
      // onCloseModal();
    }
  };

  const [form] = Form.useForm(); // custom field default
  useEffect(() => {
    if (deviceId) {
      let defaultDevice = listDevice.devices.find(
        (item) => item.id === deviceId
      );

      form.setFieldsValue({
        deviceName: defaultDevice.deviceName,
        status: defaultDevice.status,
      });
    }
  }, [deviceId]);

  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      validateMessages={validateMessages}
      onFinish={onFinish}
      layout="vertical"
      // initialValues={{
      //   deviceName: screen === EDIT_SCREEN ? deviceName : "",
      // }}
    >
      <Form.Item
        label="Device Name"
        name="deviceName"
        rules={[
          {
            required: true,
          },
        ]}
        // initialValue={screen === EDIT_SCREEN ? defaulDeviceName : ""}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Option key="0" value={0}>
            0
          </Option>
          <Option key="1" value={1}>
            1
          </Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {screen === ADD_SCREEN ? "Add" : "Edit"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default DeviceChange;
