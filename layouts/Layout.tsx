import React from "react";

import Head from "next/head";
import Link from "next/link";

const Layout = ({children}) => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-gray-400 mr-4">
                Home
              </a>
            </Link>
            
            
          </div>
          <div>
            <Link href="/login">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-gray-400 mr-4">
                Entrar
              </a>
            </Link>
            <Link href="/register">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-gray-400">
                Cadastrar
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="form-signin">
        {children}
      </div>
     
    </>
  );
};

export default Layout;