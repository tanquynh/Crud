import React, { useEffect, useState } from "react";

// C-12 lấy hàm handleSubmitAdd về
// U-9 nhận actionName
// U-15 nhận hàm handleSubmitUpdate
function Form({
  handleSubmitAdd,
  actionName,
  selectStudent,
  handleSubmitUpdate,
}) {
  console.log(selectStudent);
  // C-7: Khai báo state để lưu trữ các giá trị trong ô input
  const [inputForm, setInputForm] = useState({
    studentId: "",
    studentName: "",
    studentAge: "",
    gender: "",
    birthDay: "",
    birthPlace: "",
    address: "",
  });

  // C-8 Sử dụng cú pháp destructoring để lấy các key có trong state
  const {
    studentId,
    studentName,
    studentAge,
    gender,
    birthDay,
    birthPlace,
    address,
  } = inputForm;
  // C10 viết hàm handleChangeInput để lấy tất cả giá trị ô input
  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setInputForm({ ...inputForm, [nameInput]: valueInput });
  };
  // C13: Viết handleSubmitForm để submit form và gửi state cho component cha
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmitAdd(inputForm, false);
  };
  // U-10 Khai báo hàm
  const handleUpdateForm = (e) => {
    e.preventDefault();
    handleSubmitUpdate(inputForm, false);
  };
  // U-12 Sử dụng useEffect để thực hiện dữ liệu cho người dùng
  useEffect(() => {
    setInputForm(selectStudent);
  }, [selectStudent]);

  return (
    // C-9 Thêm value name, sự kiện onChange, onClick
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  value={studentId}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={studentName}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentAge"
                  value={studentAge}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control "
                  name="gender"
                  value={gender}
                  onChange={handleChangeInput}
                >
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nữ"}>Nữ</option>
                  <option value={"khác"}>Khác</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  name="birthDay"
                  value={birthDay}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="birthPlace"
                  value={birthPlace}
                  onChange={handleChangeInput}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            {actionName === "Add" ? (
              <button
                type="submit"
                className="btn btn-primary me-2 "
                onClick={handleSubmitForm}
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary me-2 "
                onClick={handleUpdateForm}
              >
                Update
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
