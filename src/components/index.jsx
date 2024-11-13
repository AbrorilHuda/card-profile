import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function IndexContent() {
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation("tidur ae");
  }, []);
  const inputRef = useRef();
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <p>desa : {location}</p>
      <button onClick={() => setLocation("somalang")}>tekan</button>
      <hr />
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  );
}
