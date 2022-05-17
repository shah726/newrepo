import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";

export default function Home() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://cms.dev.youverify.co/blogs?_start=0&_limit=90&_sort=createdAt:DESC"
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res);
      });
  }, []);

  return (
    <div>
      <div className={styles.heading}>
        <h1>Blog Post</h1>
      </div>
      <div className={styles.firstCard}>
        {data.map((dat) => (
          <div className={styles.mainCard}>
            <div className={styles.card}>
              <div>
                {/* <Image
                  src={dat.image.url}
                  alt="this is a image"
                  width={300}
                  height={200}
                /> */}
                <img
                  src={dat.image.url}
                  alt="This was a image"
                  width="300"
                  height="200"
                />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.setItem("slug", dat.slug);

                    router.push(`idsingle/?slug=${dat.slug}`);
                  }}
                >
                  <h3 className={styles.title}>{dat.title}</h3>
                </a>
                <div className={styles.autdate}>
                  <h5 className={styles.author}>
                    {dat.author}| {moment(dat.date).format("DD/MM/YYYY")}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
