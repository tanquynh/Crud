import React, { useState } from "react";

function TodoList() {
  // Todolist = ["homework", "go to sleep"..]
  // Bước 1: khai báo các state lưu trữ dữ liệu
  // + state todo chứ tất cả dữ liệus từ nguồi dùng
  const [todo, setTodo] = useState([]);
  // + state lấy dữ liệu từ ô input người dùng nhập vào
  const [text, setText] = useState("");
  // Bước 2: Viêt shamf handleChangeInput để lấy dữ liệu từ ô Input
  const handleChangeInput = (e) => {
    setText(e.target.value);
  };
  // Bước 3: Viết hàm handleAddTodo để thêm dữ liệu người dùng vào state todo
  const handleAddTodo = () => {
    setTodo([...todo, { text: text, complete: false }]);
    setText("");
  };
  // Bước 5: dùng splice() để xóa theo vị trí index
  const handleDelete = (id) => {
    const deteteTodo = [...todo];
    deteteTodo.splice(id, 1);
    setTodo(deteteTodo);
  };
  // Bước 6: Chức năng complete (hoàn thành)
  const handleToggle = (id) => {
    const todoComplete = todo.map((e, i) =>
      id === i ? { ...e, complete: !e.complete } : e
    );
    setTodo(todoComplete);
  };
  // bước 7 chức năng Update
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");
  // lấy index của phần tử (lấy id =index)
  const handleEdit = (id) => {
    // set lại giá trị ở vịt trí index
    setEditIndex(id);
    // set lại giá trị ô input
    setEditText(todo[id].text);
  };
  // hàm handleUpdate để cập nhật lại giá trị
  // arrName[vị trí index] = giá trị mới
  const handleUpdate = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);
    setEditIndex(-1);
  };
  return (
    <div>
      <h3>Todolist</h3>
      <input type="text" value={text} onChange={handleChangeInput} />
      <button onClick={handleAddTodo}>Add</button>
      {/* Bước 4: Hiển thị dư liệu từ todo */}
      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => handleToggle(index)}
                  style={{
                    textDecoration: element.complete ? "line-through" : "none",
                  }}
                >
                  {element.text}
                </span>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
