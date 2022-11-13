import React, { useEffect, useState } from "react";
import TabelBuku from "./TabelBuku";
import axios from "axios";

function ManajemenBuku() {
  // PART DATA
  const [formMode, setFormMode] = useState("");
  const [books, setBooks] = useState([]);
  const [inputForm, setInputForm] = useState();

  // PART EVENT HANDLING
  function showCreateForm() {
    setFormMode("show");
  }
  function showEditForm() {
    setFormMode("show");
  }

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  function handleJudul(e) {
    setInputForm({ ...inputForm, judul: e.target.value });
  }
  function handlePengarang(e) {
    setInputForm({ ...inputForm, pengarang: e.target.value });
  }

  function submitForm(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/book/add", inputForm)
      .then(() => {
        alert("Data berhasil ditambahkan!");
        retrieveData();
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>
        Tambah Buku
      </button>

      {/* input form */}
      {formMode === "show" && (
        <div id="form" className="card py-2 my-3 bg-secondary">
          <div className="card-body">
            <h4>Form Buku</h4>
            <form className="row" onSubmit={submitForm}>
              <div className="col-6">
                <input
                  type="text"
                  name="judul"
                  className="form-control mx-2"
                  placeholder="Judul..."
                  onChange={handleJudul}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="pengarang"
                  className="form-control mx-2"
                  placeholder="Pengarang..."
                  onChange={handlePengarang}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {/* tabel data buku */}
      <TabelBuku showEdit={showEditForm} books={books} />
      {/* <p>{JSON.stringify(books)}</p> */}
    </div>
  );
}

export default ManajemenBuku;
