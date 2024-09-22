import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticated/auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/auth/login">Login Page</Link>
    </div>
  )
}
