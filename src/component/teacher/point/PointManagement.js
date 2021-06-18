import { FilterOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Popover,
  Row,
  Select,
  Table,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import Column from "antd/lib/table/Column";
import useSelection from "antd/lib/table/hooks/useSelection";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import { FormWrapper, PointWrapper, TableWrapper } from "./style";

const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 8,
  },
};

const fetchData = [
  {
    id: 1,
    courseName: "Toan",
    classroomEntities: [
      {
        id: 1,
        classroomName: "Lop 12A1",
        teacherId: "1",
        location: "Toa A1",
      },
      {
        id: 2,
        classroomName: "Lop 12A2",
        teacherId: "1",
        location: "Toa 2",
      },
    ],
  },
  {
    id: 2,
    courseName: "Van",
    classroomEntities: [
      {
        id: 1,
        classroomName: "Lop 12A4",
        teacherId: "1",
        location: "Toa A1",
      },
      {
        id: 2,
        classroomName: "Lop 12A5",
        teacherId: "1",
        location: "Toa 2",
      },
    ],
  },
];

const fetchStudent = [
  {
    id: 1,
    studentName: "Kien",
  },
  {
    id: 2,
    studentName: "Dao",
  },
];

const { Option } = Select;
function PointManagement() {
  const accountId = useSelector((state) => state.auth.id);
  const [course, setCourse] = useState([]);
  const [classroom, setClassroom] = useState([]);
  const [student, setStudent] = useState([]);
  const [visiblePopover, setVisiblePopover] = useState(false);
  const [form] = useForm();
  useEffect(() => {
    axios.get(`/api/grade/teacher?classroomId=1&courseId=1`, {
      headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
    });
  }, []);
  useEffect(() => {
    setCourse(fetchData);
    // setClassroom(fetchData[0]?.classroomEntities);
    // form.setFieldsValue({
    //   course: "",
    //   classroom: "",
    //   // student: "",
    // });
  }, []);

  const onChange = (e, value) => {
    let courseSelect = fetchData.find((item) => item.courseName === e);
    setClassroom(courseSelect.classroomEntities);
  };

  const classChange = (e, value) => {
    setStudent(fetchStudent);
  };

  const onFinish = (values) => {
    values.student && console.log(values);
  };

  const onVisibleChange = () => {
    setVisiblePopover(!visiblePopover);
  };
  const renderSelectForm = () => {
    return (
      <FormWrapper
        {...layout}
        onFinish={onFinish}
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Course"
          key="course"
          name="course"
          // initialValue={fetchData[0].courseName}
        >
          <Select onChange={onChange} placeholder="select Course">
            {course.map((item) => (
              <Option key={item.id} value={item.courseName}>
                {item.courseName}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Classroom"
          key="Classroom"
          name="classroom"
          // initialValue={fetchData[0]?.classroomEntities[0].classroomName}
        >
          <Select onChange={classChange} placeholder="select classroom">
            {classroom.map((item) => (
              <Option key={item.id} value={item.classroomName}>
                {item.classroomName}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="student" key="Student" name="student">
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {student.map((item) => (
              <Option key={item.id} value={item.studentName}>
                {item.studentName}
              </Option>
            ))}
            <Option key="all" value="">
              all
            </Option>
          </Select>
        </Form.Item>
        <Form.Item className={"form-btn"}>
          <Button htmlType="submit">submit</Button>
          <Button>Reset</Button>
        </Form.Item>
      </FormWrapper>
    );
  };

  return (
    <PointWrapper>
      <Row gutter={[32, 32]}>
        {/* <Col span={6}>{renderSelectForm()}</Col> */}

        <Col span={24} className="wrapper" sketon={true}>
          <div className="filter-btn">
            <Input
              disabled
              value={"ss"}
              className="filter-input"
              suffix={<FilterOutlined />}
            />
            <Popover
              placement={"leftBottom"}
              title={<span>Thong tin</span>}
              content={renderSelectForm()}
              trigger="click"
              visible={visiblePopover}
              onVisibleChange={onVisibleChange}
            >
              <Button type="primary" icon={<FilterOutlined />}>
                Filter
              </Button>
            </Popover>
          </div>
          <TableWrapper className="table-wrapper" opacity={visiblePopover}>
            <Table bordered>
              <Column
                align="center"
                title="Student"
                dataIndex="studentName"
                key="studentName"
              />

              <Column
                align="center"
                title="Course"
                dataIndex="courseName"
                key="courseName"
              />

              <Column
                align="center"
                title="School year"
                dataIndex="schoolYear"
                key="schoolYear"
              />

              <Column align="center" title="Term" dataIndex="term" key="term" />

              <Column
                align="center"
                title="Mid Test"
                dataIndex="midTermTest"
                key="mid_term_test"
              />

              <Column
                align="center"
                title="Final test"
                dataIndex="	finalTermTest"
                key="final_term_test"
              />

              <Column
                align="center"
                title="Quiz1"
                dataIndex="	quiz1"
                key="quiz1"
              />

              <Column
                align="center"
                title="Quiz2"
                dataIndex="	quiz2"
                key="quiz2"
              />

              <Column
                align="center"
                title="Quiz3"
                dataIndex="	quiz3"
                key="quiz3"
              />

              <Column align="center" title="Test" dataIndex="test" key="test" />
            </Table>
          </TableWrapper>
        </Col>
      </Row>
    </PointWrapper>
  );
}

export default PointManagement;
