import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex flex-col justify-center my-[50px] min-h-[calc(100vh-100px)] ring">
      <section className="flex flex-col my-0 mx-auto w-[400px] py-8 px-10 shadown-2xl rounded-[3px] border-box ring">
        <div className="flex flex-col content-center items-center text-center mb-4 ring">
          <span className="inline-block relative leading-none select-none whitespace-normal h-10 ring">
            <div className="h-full fill-inherit text-3xl font-extrabold">Kobah</div>
          </span>
          <div className="flex flex-col pt-6 content-center items-center font-medium text-lg">
            <h5>Log in to continue</h5>
          </div>
        </div>
      </section>
    </div>
  );
}