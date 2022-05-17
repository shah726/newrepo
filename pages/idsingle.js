import { useEffect, useState } from "react";
import single from "../components/single.module.css";
export default function single1() {
  const [sigdata, setSigdata] = useState([]);
  // if (window !== undefined) {
  //   var id = window.localStorage.getItem("slug");
  // }

  // const queryParams = new URLSearchParams(window.location.search);
  // console.log(queryParams);

  // const id = queryParams.get("slug");

  useEffect(() => {
    var id = localStorage.getItem("slug");
    fetch(`https://cms.dev.youverify.co/blogs/?slug=${id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setSigdata(res);
      });
  }, []);

  return (
    <div>
      {sigdata.map((sid) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          <div>
            <h1 style={{ textAlign: "center" }}>{sid.title}</h1>
            <img src={sid.image.url} />
            <h1>{sid.teaser}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
