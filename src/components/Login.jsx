import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMailOpen, IoLockClosed, IoEnter } from "react-icons/io5";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);
  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
  return (
    <section className='hero has-background-grey-light is-fullheight is-fullwidth'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-4'>
              <form onSubmit={Auth} className='box'>
                {isError && (
                  <p className='has-text-danger has-text-centered'>{message}</p>
                )}
                <h1 className='title is-2'>Sign In</h1>
                <div className='field'>
                  <label className='label'>Email</label>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email'
                    />
                    <span className='icon is-small is-left'>
                      <IoMailOpen />
                    </span>
                  </div>
                </div>
                <div className='field mt-5'>
                  <label className='label'>Password</label>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                    />
                    <span className='icon is-small is-left'>
                      <IoLockClosed />
                    </span>
                  </div>
                </div>
                <div className='field'>
                  <button
                    type='submit'
                    className='button is-success is-fullwidth'>
                    <IoEnter /> {isLoading ? "Loading..." : "Sign In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
