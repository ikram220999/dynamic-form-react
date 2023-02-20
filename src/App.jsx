import React, { useState } from "react";

const App = () => {

  // FIRST APPROACH 
  // const input = [
  //   {
  //     type: "text",
  //     name: "name",
  //     placeholder: "name"
  //   },
  //   {
  //     type: "email",
  //     name: "email",
  //     placeholder: "email"
  //   },
  //   {
  //     type: "password",
  //     name: "password",
  //     placeholder: "password"
  //   }
  // ];

  // SECOND APPROACH 
  // const input = [
  //  "name", "email", "password"
  // ];

  // THIRD APPROACH
  const input = 
    {
      types: ["text", "email", "password"],
      names: ["name", "email", "password"],
      placeholders: ["name", "email", "password"]
    }
  

  
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
      {input.types ? input.types.map((data, id) =>
      (
        <>
          <input key={id}  type={input.types[id]} name={input.names[id]} placeholder={input.placeholders[id]}              className="mb-2"
            onChange={handleInput} required
          ></input> <br />
        </>
      )
      ) : ""}
    </>
  )
}
export default App;