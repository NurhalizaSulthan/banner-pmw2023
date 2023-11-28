"use client";
import "@style/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [tulis, setTulis] = useState("");
  const [diary, setDiary] = useState([]);

  const submitDisabled = tulis.trim() === "";


  function handlerTambahNama() {
    setDiary(tulis);
  }
  function handlerGantiNama(event) {
    event.preventDefault();
    setTulis(event.target.value);
  }

  useEffect(() => {
    console.log("Isi Diary: " + diary);
  }, [diary]);

  function handlerKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handlerTambahNama();
    }
  }

  async function postDiary() {
    const updateDiary = [...isLoading, tulis];
    setIsLoading(updateDiary)
    setTulis("");
  }

  const endpointAPI = "https://6555c3f284b36e3a431e4764.mockapi.io/diaryku";

  async function getDiary() {
    try {
      const res = await axios.get(endpointAPI);
      const data = res.data;

      //ambil judul
      const judul = data.map((item) => item.judul);
      setJudul(judul);

      //ambil isi_diary
      const isi_diary = data.map((item) => item.isi_diary);
      setIsiDiary(isi_diary);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <>
      <div className="body">
        <div className="banner-container">
          <div className="input-name">
            <form>
              <input
                type="text"
                placeholder="Tuliskan nama"
                name="search"
                onChange={handlerGantiNama}
                value={tulis}
                onKeyDown={handlerKeyDown}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "12px",
                }}
              />
            </form>
          </div>
          <div className="cta-banner-wrap">
            {/* Tombol cta */}
            <button
              className={`cta-button ${submitDisabled ? "disabled" : "active"}`}
              onClick={submitDisabled ? null : handlerTambahNama}
            >
              <p>{submitDisabled ? "Disable" : "Submit"}</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        {judul.length > 0 ? (
          <ul>
            {judul.map((item, idx) => (
              <Link
                href={`/diary/${item}/${isiDiary[idx]}`}
                style={{ textDecoration: "none" }}
              >
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
    </>
  );
}
