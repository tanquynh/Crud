import React from "react";
import Student from "./Student";

// R3 : Nhận dữ liệu từ cha bằng Props
// U-6 Nhận hàm handleEdit từ parent
function ListStudent({ ListStudentProps, handleEdit, handleDelete }) {
  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* R4 : Duyệt qua các phần tử và truyền xuống component Student */}
            {ListStudentProps.map((element, index) => (
              <Student
                // key={index} // xem lại
                studentKey={index}
                inforStudent={element}
                handleEditStudent={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
