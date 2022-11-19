import React, { useState } from "react";

const BasicForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email,
        password,
      };

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
    } else {
      alert("pleasse enter");
    }
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            W
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {allEntry.map((curElem) => {
          const { id, email, password } = curElem;
          return (
            <>
              <div key={id}>
                <p>Email:{email}</p>
                <p> password :{password}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BasicForms;
