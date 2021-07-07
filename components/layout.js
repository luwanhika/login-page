import FormLoginHome from "./FormLoginHome"
import Image from 'next/image';


export default function FirstLayout() {

  return (

    <div className="min-h-screen bg-indigo-100">

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-indigo-100">

        <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow">
            <h1 className="text-white text-center text-2xl sm:text-5xl">
              web Developer
            </h1>
            <h2 className="text-center text-blue-200 text-3xl">Brasil</h2>
          </div>
        </div>

        <div className="aaa lg:min-h-screen lg:flex lg:items-center p-12 lg:p-18 xl:p-24">
          <div className="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p-8">
            <div className="sm:flex text-center">
              <Image
                src="/vercel.svg"
                alt="Picture of the author"
                width={150}
                height={150}
                className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full"
              />
              <div className="sm:ml-4 sm:text-left text-center">
                <p className="text-xl">Luwanhika B.H. Chocombongue</p>
                <p className="text-sm text-gray-600">Gerente de projetos</p>
                <div className="mt-4">
                  <button
                    className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 font-semibold rounded-md px-4 py-1 focus:outline-none"
                    type="button"
                  >
                    Minha foto
                  </button>
                </div>
              </div>
            </div>
            <div>
              <FormLoginHome></FormLoginHome>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}