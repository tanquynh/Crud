import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  // lifting State Up : Nâng (chuyển) trạng thái từ component con lên component cha
  // Trong React là luông fdữ liệu 1 chiều (one way data binding) nên để có thể cập nhật được
  // trạng thái từ component con lên component cha thì càn 1 sự kiện
  const [color, setColor] = useState("#000000");
  // Cách 2 :
  const handleChangeColor = (e) => {
    setColor(e);
  };
  return (
    <div>
      <h3>Demo lifting State up</h3>
      {/* cách 1: Sử dụng hàm setState */}
      {/* Truyền props từ cha xuống con */}
      {/* <ColorPicker setColorParent={setColor} /> */}
      {/* Xây dựng hàm truyền xuống component con */}
      <ColorPicker ChangeColor={handleChangeColor} />

      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
