// app/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

let count = 0

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return count
})

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    count += data
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const [counter, setCounter] = useState(0)

  return (
    <Button
      type="button"
      onClick={() => {
        setCounter(prev => prev + 1)
        updateCount({ data: 1 })
      }}
    >
      Add 1 to {counter}?
    </Button>
  )
}