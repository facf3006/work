import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("API consultada");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("THIS IS WAS COMPUTED");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      {data ? (
        <div>
          O comentário com o nome mais longo é: <br />
          <strong>{getLongestName}</strong>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""} toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}

export default MemoTutorial;
