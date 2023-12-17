import { auth } from "@/auth";

const getCurrentUser = async () => {
  const session = await auth()
  return session?.user
}
 
export default getCurrentUser;