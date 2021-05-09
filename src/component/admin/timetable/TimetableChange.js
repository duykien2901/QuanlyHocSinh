import React, { useEffect } from "react";

import { Col, Row, Form, Input, InputNumber, Button, Select } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getListTeacher } from "../../../redux/actions/teacher";
import { TimetableChangeWrapper } from "./style";

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 14,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function TimetableChange() {
  const { change } = useParams();
  const { id } = useParams();
  console.log("idParam => ", id);
  const dispatch = useDispatch();

  const timetableState = useSelector(
    (state) => state.timetables.list.timetables
  );
  const teacherState = useSelector((state) => state.teachers.list);
  const classState = useSelector((state) => state.classes.list);
  const courseState = useSelector((state) => state.courses.list);

  const timetableDefault = timetableState.find((item) => {
    return item.id === parseInt(id);
  });

  const defaultTeacher = teacherState.listTeacher.find((item) => {
    return item.id === timetableDefault?.teacherId;
  });

  console.log(defaultTeacher);

  useEffect(() => {
    dispatch(getListTeacher());
  }, []);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <TimetableChangeWrapper>
      <Col span={16} offset={4}>
        <Row>Sửa thời khóa biểu</Row>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            name="id"
            label="Id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input defaultValue={id} disabled/>
          </Form.Item>
          <Form.Item
            name="teacherName"
            label="Teacher"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select defaultValue={defaultTeacher?.teacherName}>
              {teacherState.listTeacher.map((teacher) => {
                return (
                  <Select.Option key={teacher.id}>
                    {teacher?.teacherName}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </TimetableChangeWrapper>
  );
}

export default TimetableChange;
