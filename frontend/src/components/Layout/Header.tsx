import React from "react"
import Link from "next/link"
import { useAuth } from "react-use-auth"
interface Props {}

const Header: React.FC<Props> = (props) => {
  const methods = useAuth()
  const { isAuthenticated, login, logout } = methods

  return (
    <div>
      <span style={{ paddingRight: "1rem" }}>
        <Link href="/">
          <a>top</a>
        </Link>
      </span>
      {isAuthenticated() ? (
        <>
          <span style={{ paddingRight: "1rem" }}>
            <Link href="/users">
              <a>users</a>
            </Link>
          </span>
          <span>
            <button onClick={logout}>logout</button>
          </span>
        </>
      ) : (
        <span>
          <button onClick={login}>login</button>
        </span>
      )}
    </div>
  )
}
export default Header
