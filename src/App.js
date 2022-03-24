import { useState, useRef, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const PrvName = useRef("");

  useEffect(() => {
    PrvName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {PrvName.current}
      </div>
    </>
  );
}
