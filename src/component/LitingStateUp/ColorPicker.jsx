import React from "react";
// Cách 1 -Để lấy props: nhận props từ cha => Lấy tất cả các props từ cha
// function ColorPicker(props)

// Cách 2 -Để lấy props: sử dụng destructoring => lấy ra những props cụ thể
// function ColorPicker({ setColorParent })
// const handleColorPicker = (e) => {};
// setColorParent(e.target.value);
// Cách 1 -LiftingState
function ColorPicker({ ChangeColor }) {
  const handleChangeColor = (e) => {
    ChangeColor(e.target.value);
  };
  return (
    <div>
      {/* <input type="color" onChange={handleColorPicker} /> */}
      <input type="color" onChange={handleChangeColor} />
    </div>
  );
}

export default ColorPicker;
