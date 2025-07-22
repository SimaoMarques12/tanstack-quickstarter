import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/protected')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/protected"!</div>
}
