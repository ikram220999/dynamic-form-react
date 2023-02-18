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

  return (
    <>

      <div>
        {input ? input.map((data, id) => {
          return (
            <>
              <input name={data} placeholder={data}></input>
              <br></br>
            </>
          )
        }) : ""}

      </div>
    </>
  )
}

export default App;