import { useState } from "react";

export default function Form() {
  const [nama, setNama] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.table(data);
  };
  return (
    <>
      <h1>form input react control</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nama">nama</label>
          <input type="text" id="nama" name="nama" />
        </div>
        <div>
          <label htmlFor="warna">warna favorite</label>
          <input type="text" id="warna" name="warna" />
        </div>
        <div>
          <label htmlFor="palet">palet</label>
          <input type="color" id="palet" name="palet" />
        </div>
        <button>submit</button>
      </form>

      <form>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        {nama.length > 0 && nama.length < 5 && (
          <pre style={{ color: "red" }}>karakter harus lebih dari 5</pre>
        )}
      </form>
    </>
  );
}
