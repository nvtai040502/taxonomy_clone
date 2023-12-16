import { db } from '@/lib/db'
import Image from 'next/image'

export default async function Home() {
  const users = await db.user.findMany()
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.email}
        </div>
      ))}
    </div>
  )
}
