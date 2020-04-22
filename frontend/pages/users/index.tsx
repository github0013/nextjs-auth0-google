import React from "react"
import { useAuth } from "react-use-auth"
import Link from "next/link"
interface Props {}

const UserIndex: React.FC<Props> = (props) => {
  return (
    <p>
      <Link href={`/users/${useAuth().user.sub}`}>user page</Link>
    </p>
  )
}
export default UserIndex
