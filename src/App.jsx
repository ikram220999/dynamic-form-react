import React, { useState } from "react";

const App = () => {
  const input = [
    "name",
    "email",
    "password"
  ];


  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  console.log("data", data)

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {input ? input.map((data, id) =>
      (
        <>
          <input key={id} name={data} placeholder={data} className="mb-2"
            onChange={handleInput}
          ></input> <br />
        </>
      )
      ) : ""}
    </>
  )
}

export default App;