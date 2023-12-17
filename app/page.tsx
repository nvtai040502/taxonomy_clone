import { auth } from '@/auth'
import { db } from '@/lib/db'
import Image from 'next/image'

export default async function Home() {
  const users = await db.user.findMany()
  const session = await auth()
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.email}
        </div>
      ))}
      {session?.user?.email}
      {session?.expires}
    </div>
  )
}
