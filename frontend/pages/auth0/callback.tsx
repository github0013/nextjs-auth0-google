import React from "react"
import { useAuth } from "react-use-auth"
interface Props {}

const callback: React.FC<Props> = (props) => {
  const { handleAuthentication } = useAuth()
  React.useEffect(() => {
    handleAuthentication({ postLoginRoute: "/users" })
  }, [])
  return <>loading ...</>
}
export default callback
