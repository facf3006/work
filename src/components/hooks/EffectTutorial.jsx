import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API foi consultada!");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>EffectTutorial{data} </div>;
}

export default EffectTutorial;
