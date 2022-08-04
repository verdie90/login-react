import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Formaddproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
      });
      navigate("/product");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className='title'>Produk</h1>
      <h2 className='subtitle'>Tambah Produk</h2>
      <div className='card is-shadowless'>
        <div className='card-content'>
          <div className='content'>
            <form onSubmit={saveProduct}>
              <p className='has-text-centered'>{msg}</p>
              <div className='field'>
                <label className='label'>Nama Produk</label>
                <div className='control'>
                  <input
                    className='input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Nama Produk'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Harga</label>
                <div className='control'>
                  <input
                    className='input'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type='text'
                    placeholder='Harga'
                  />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <button type='submit' className='button is-primary'>
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formaddproduct;
