import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex flex-col absolute justify-center top-0 w-full mt-0 mb-12"></div>
  );
};

