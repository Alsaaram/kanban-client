import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticated/auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center bg-gray-50">
      <section className="my-0 mx-auto py-8 px-10 w-[400px] shadow-2xl rounded-xl ring-1 ring-gray-900/5 text-black">

        <div className="flex flex-col content-center items-center text-center mb-4">
          <h1 className="text-3xl font-extrabold font-serif">Kobah</h1>
          <h5 className="pt-2 font-medium text-lg">Sign up to continue</h5>
        </div>

        <div>
          <input name="Email" type="text" placeholder="Enter your email" className="mb-2 w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600 bg-gray-50"></input>
          <input name="Password" type="text" placeholder="Enter your password" className="mb-2 w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600 bg-gray-50"></input>
          <input name="PasswordConfirm" type="text" placeholder="Confirm your password" className="mb-2 w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600 bg-gray-50"></input>
          <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Sign up</button>
        </div>

        <div className="my-6 flex justify-center">
          <Link to="/auth/login" className="text-sm text-blue-600 tracking-wide hover:underline">Already have an account? Log in</Link>
        </div>

        <div className="flex flex-col justify-center items-center border border-t-gray-500 border-b-0 border-x-0 font-extrabold text-gray-500 font-serif">
          <h5 className="pt-6">KOBAH</h5>
          <h6 className="text-sm">A project management platform</h6>
        </div>
      </section>
    </div>
  )
}
