import { redirect, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(other)/redirect')({
  beforeLoad: async () => {
    throw redirect({
      to: '/posts',
    })
  },
})
