import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center my-[50px] bg-gray-50">
      <section className="my-0 mx-auto py-8 px-10 w-[400px] shadow-2xl rounded-xl ring-1 ring-gray-900/5 text-black">

        <div className="flex flex-col content-center items-center text-center mb-4">
          <span className="h-full fill-inherit text-3xl font-extrabold font-serif">Kobah</span>
          <span className="pt-2 font-medium text-lg">
            <h5>Log in to continue</h5>
          </span>
        </div>

        <div>
          <input name="Email" type="text" placeholder="Enter your email" className="mb-2 w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600 bg-gray-50"></input>
          <input name="Password" type="text" placeholder="Enter your password" className="mb-4 w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600 bg-gray-50"></input>
          <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Log in</button>
        </div>

        <div className="my-6 flex justify-center">
          <a className="text-sm text-blue-600 tracking-wide hover:underline">Can't log in?</a>
          <span className="mx-2 text-sm">•</span>
          <Link to="/auth/register" className="text-sm text-blue-600 tracking-wide hover:underline">Create an account</Link>
        </div>

        <div className="flex flex-col justify-center items-center border border-t-gray-500 border-b-0 border-x-0">
          <h5 className="pt-6 font-extrabold text-gray-500 font-serif">KOBAH</h5>
          <p>A project management platform</p>
        </div>
      </section>
    </div>
  );
}