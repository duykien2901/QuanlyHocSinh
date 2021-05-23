import React, { useEffect, useState } from "react";

import { Col, Row, Form, Input, Button, Select } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { TimetableChangeWrapper } from "./style";
import apis from "../../../redux/apis";
import { addTimetable, changeTimetable } from "../../../redux/actions/timtable";

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
        classroomId: timetableDefault.className,
        courseId: timetableDefault.courseName,
        shift: timetableDefault.shift,
        dayOfWeek: timetableDefault.dayOfWeek,
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
      })
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
      <Button onClick={onGoBack}>Back</Button>
      <Col span={16} offset={4}>
        <Row>
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
          {isAddingScreen ? null : (
            <Form.Item
              name="id"
              label="Id"
              // initialValue={timetableDefault?.id}
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
            name="teacherId"
            label="Teacher"
            rules={[
              {
                required: true,
              },
            ]}
            // initialValue={
            //   isAddingScreen
            //     ? refesh
            //     : `${timetableDefault?.teacherName} - ${timetableDefault?.teacherId}`
            // }
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
            // initialValue={timetableDefault?.className}
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
            // initialValue={timetableDefault?.courseName}
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

          <Form.Item
            name="shift"
            label="Shift"
            // initialValue={timetableDefault?.shift}
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
            // initialValue={timetableDefault?.dayOfWeek}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              {isAddingScreen ? "Add Timetable" : "Change Timetable"}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </TimetableChangeWrapper>
  );
}

export default TimetableChange;
