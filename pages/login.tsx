import React, {SyntheticEvent, useState} from "react";
import Layout from "../layouts/Layout";
import Head from "next/head"
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

  //   await fetch(input: 'http://localhost:8000/api/login', init:{
  //     method: "POST",
  //     headers: {'Content-Type': 'application/json'},
  //     credentials: 'include',
  //     body: JSON.stringify(value:{
  //       email,
  //       password
  //     })
  //   });

  //   await router.push(url:'/');
  }

  return (
    <Layout>
      <div className="m-auto lg:min-h-screen lg:flex lg:items-center w-full max-w-xs">
        <form onSubmit={submit} className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">
          <input
            placeholder="Digite seu e-mail"
            className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
            type="email"
            name="email"
            id="email-address"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Digite sua senha"
            className=" mt-4 flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="mt-4 flex-1 w-full  btn btn-success">
            Entrar
          </button>
        </form>
      </div>
      
    </Layout>
  );
};

export default Login;