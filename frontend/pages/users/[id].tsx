import React from "react"
import { useAuth } from "react-use-auth"
interface Props {}

const UserDashboard: React.FC<Props> = (props) => {
  return <pre>{JSON.stringify(useAuth().user, null, 2)}</pre>
}
export default UserDashboard
