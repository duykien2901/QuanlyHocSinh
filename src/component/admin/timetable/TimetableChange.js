import React, { useEffect, useState } from "react";

import { Col, Row, Form, Input, Button, Select } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { TimetableChangeWrapper } from "./style";
import apis from "../../../redux/apis";
import { addTimetable, changeTimetable } from "../../../redux/actions/timtable";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 18,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

function TimetableChange() {
  const { change } = useParams();
  const [isDefaulTeacher, setIsDefaulTeacher] = useState(true);
  const [isDefaulClass, setIsDefaulClass] = useState(true);
  const [isDefaulSubject, setIsDefaulSubject] = useState(true);
  const [refesh, setRefesh] = useState(null);

  const [isAddingScreen, setIsAddingScreen] = useState(
    change === "add" ? true : false
  );

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const timetableState = useSelector(
    (state) => state.timetables.list.timetables
  );
  const teacherState = useSelector((state) => state.teachers.list.listTeacher);
  const classState = useSelector((state) => state.classes.list.listClass);
  const courseState = useSelector((state) => state.courses.list.listCourse);

  const [form] = Form.useForm();

  const timetableDefault = isAddingScreen
    ? null
    : timetableState.find((item) => {
        return item.id === parseInt(id);
      });

  useEffect(() => {
    if (timetableDefault === undefined) {
      history.push("/admin/timetable");
    }
  }, []);

  useEffect(() => {
    change !== "add" &&
      form.setFieldsValue({
        id: timetableDefault?.id,
        teacherId: `${timetableDefault?.teacherName} - ${timetableDefault?.teacherId}`,
        classroomId: timetableDefault?.className,
        courseId: timetableDefault?.courseName,
        shift: timetableDefault?.shift,
        dayOfWeek: timetableDefault?.dayOfWeek,
      });
  }, [id]);

  const onFinish = (values) => {
    // if not change, set default values when submit
    if (isDefaulClass) values.classroomId = timetableDefault.classroomId;
    if (isDefaulSubject) values.courseId = timetableDefault.courseId;
    if (isDefaulTeacher) values.teacherId = timetableDefault.teacherId;

    values.shift = parseInt(values.shift);
    values.dayOfWeek = parseInt(values.dayOfWeek);
    if (isAddingScreen) {
      addTimetable(values);
      form.setFieldsValue({
        id: "",
        teacherId: "",
        classroomId: "",
        courseId: "",
        shift: "",
        dayOfWeek: "",
      });
    } else {
      delete values.id;
      changeTimetable(parseInt(id), values);
    }
  };

  const onChange = (e, option) => {
    option.key.includes("Teacher")
      ? setIsDefaulTeacher(false)
      : option.key.includes("Class")
      ? setIsDefaulClass(false)
      : setIsDefaulSubject(false);
  };

  const onGoBack = () => {
    history.goBack();
  };
  return (
    <TimetableChangeWrapper>
      <Button onClick={onGoBack} className="btn-back">
        <ArrowLeftOutlined />
      </Button>

      <Col span={18} offset={2}>
        <div className="content">
          <Row className="title-change">
            {change === "add" ? "Thêm thời khóa biểu" : "Sửa thời khóa biểu"}
          </Row>

          <Form
            {...layout}
            form={form}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            layout="vertical"
          >
            <Row>
              <Col span={12} className="form-item">
                <Form.Item
                  name="teacherId"
                  label="Teacher"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select onChange={onChange}>
                    {teacherState.map((teacher) => {
                      return (
                        <Select.Option
                          key={`Teacher ${teacher?.id}`}
                          value={teacher?.id}
                        >
                          {`${teacher?.teacherName} - ${teacher?.id}`}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="classroomId"
                  label="Classroom"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select onChange={onChange}>
                    {classState.map((classroom) => {
                      return (
                        <Select.Option
                          key={`Class ${classroom.id}`}
                          value={classroom?.id}
                        >
                          {classroom?.classroomName}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="courseId"
                  label="Subject"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select onChange={onChange}>
                    {courseState.map((course) => {
                      return (
                        <Select.Option
                          onChange={onChange}
                          key={`Course ${course.id}`}
                          value={course?.id}
                        >
                          {course?.courseName}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12} className="form-item">
                {isAddingScreen ? null : (
                  <Form.Item
                    name="id"
                    label="Id"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input disabled />
                  </Form.Item>
                )}
                <Form.Item
                  name="shift"
                  label="Shift"
                  rules={[
                    {
                      required: true,
                    },
                    {
                      validator(_, values) {
                        if (isNaN(values)) {
                          return Promise.reject("Not a number");
                        }
                        if (values <= 0 || values >= 8) {
                          return Promise.reject("Incorrect shift");
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="dayOfWeek"
                  label="Day Of Week"
                  rules={[
                    {
                      required: true,
                    },
                    {
                      validator(_, values) {
                        if (isNaN(values)) {
                          return Promise.reject("Not a number");
                        }
                        if (values <= 0 || values >= 8) {
                          return Promise.reject("Incorrect day");
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <div className="btn-submit">
              <Button type="primary" htmlType="submit">
                <SaveOutlined />
                {/* {isAddingScreen ? "Add Timetable" : "Save Timetable"} */}
                Save
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </TimetableChangeWrapper>
  );
}

export default TimetableChange;
