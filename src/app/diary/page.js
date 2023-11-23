"use client";
import "@style/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const[isData, setData] = useState([]);

  const endpointAPI = "https://6555c3f284b36e3a431e4764.mockapi.io/diaryku";

  async function getDiary() {
    const res = await axios.get(endpointAPI);
    const data = res.data;

    //ambil judul
    const judul = data.map((item) => item.judul);
    setJudul(judul);

    //ambil isi_diary
    const isi_diary = data.map((item) => item.isi_diary);
    setIsiDiary(isi_diary);
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div className="diary-list-container">
      {judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <Link href={`/diary/${item}/${isiDiary[idx]}`} style={{ textDecoration: 'none' }}>
              <li key={idx}>
                <div className="diary-container">
                  <h1>{judul[idx]}</h1>
                  <p className="p-diary">{isiDiary[idx]}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        "API not loading"
      )}
    </div>
  );
}
