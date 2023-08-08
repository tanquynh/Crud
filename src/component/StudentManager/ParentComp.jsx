import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";
import Student from "./Student";

function ParentComp() {
  // R-1: Khai báo state lưu trữ thông tin students
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Vân Anh",
      studentAge: "20",
      gender: "nữ",
      birthDay: "12/02/2000",
      birthPlace: "HN",
      address: "HN",
    },
    {
      studentId: "SV002",
      studentName: "Trang",
      studentAge: "21",
      gender: "nữ",
      birthDay: "22/05/2002",
      birthPlace: "HCM",
      address: "HN",
    },
    {
      studentId: "SV003",
      studentName: "Thùy",
      studentAge: "19",
      gender: "nữ",
      birthDay: "08/02/2004",
      birthPlace: "DN",
      address: "HN",
    },
  ]);

  // C-1 toggle create student
  const [toggle, setToggle] = useState(false);
  const [actionName, setActionName] = useState("Add");

  // C-2 Xây dựng hàm để truyền xuống component con
  const handleToggleAction = (toggle, action) => {
    setToggle(toggle);
    setActionName(action);
  };

  // C-11 Viết hàm handleSubmitAdd để lấy được thông tin từ component ở Form lên

  const handleSubmitAdd = (newStudent, toggle) => {
    setStudents([...students, newStudent]);
    setToggle(toggle);
  };

  // u-3: Khai báo state để lưu trữ  student
  const [selectStudent, setSelectStudent] = useState({});
  console.log(students);
  // U-4 Khai báo hàm để truyển xuống listStudent => Student
  const handleEdit = (selectStudent, toggle, action) => {
    setSelectStudent(selectStudent);
    setToggle(toggle);
    setActionName(action);
  };
  // U-14 viết hàm handleSubmitUpdate
  const handleSubmitUpdate = (objStudent, toggle) => {
    const update = students.map((e) =>
      e.studentId === objStudent.studentId ? objStudent : e
    );
    setStudents(update);
    setToggle(toggle);
  };
  const handleDelete = (studentDeleteId) => {
    const deleteData = students.filter(
      (item) => item.studentId !== studentDeleteId
    );
    setStudents(deleteData);
  };
  // const handleSearch = () => {}
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}

          {/* C-3 Truyền xuống component control */}
          <Control
            handleToggleAction={handleToggleAction}
            toggle={toggle}
            // handleSearch={handleSearch}
          />

          {/* END CONTROL */}
          {/* START LIST STUDENT */}

          {/* R2-Truyền data xuống component con (ListStudent) */}
          {/* U-5 Truyền hàm xuống component list Student */}
          <ListStudent
            ListStudentProps={students}
            handleEdit={handleEdit}
            toggle={toggle}
            handleDelete={handleDelete}
          />

          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {/* C-6 Sử dụng toggle để mở chức năng bật tắt */}
      {/* U-8 truyền ActionName để xử lý button sang updates */}
      {/* U-11 Truyền selectStudent xuống */}
      {/* U-14 truyền hàm handleSubmitUpdate s */}

      {toggle ? (
        <Form
          handleSubmitAdd={handleSubmitAdd}
          actionName={actionName}
          selectStudent={selectStudent}
          handleSubmitUpdate={handleSubmitUpdate}
        />
      ) : (
        ""
      )}

      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default ParentComp;
