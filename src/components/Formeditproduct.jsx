import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Formeditproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
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
      <h2 className='subtitle'>Edit Produk</h2>
      <div className='card is-shadowless'>
        <div className='card-content'>
          <div className='content'>
            <form onSubmit={updateProduct}>
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

export default Formeditproduct;
