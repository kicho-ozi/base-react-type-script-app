import React, { useRef, useState } from "react";

interface EventsExampleProps {}

const EventsExample: React.FunctionComponent<EventsExampleProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("drop");
  };
  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"></input>
      <input ref={inputRef} type="text" placeholder="Неуправляемый"></input>
      <button onClick={clickHandler}>Не нажимай</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: isDrag ? "blue" : "red",
          marginTop: "15px",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
