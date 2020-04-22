import React from "react"
import { useRouter } from "next/router"
import { useAuth } from "react-use-auth"

const restrictedPaths = ["/users", "/users/[id]"]
interface Props {}
const GateKeeper: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  React.useEffect(() => {
    if (restrictedPaths.includes(router.asPath) && !isAuthenticated()) {
      router.replace("/404")
    }
  }, [router.asPath])

  const okToGo = isAuthenticated() || !restrictedPaths.includes(router.asPath)

  return okToGo ? <>{children}</> : null
}
export default GateKeeper
