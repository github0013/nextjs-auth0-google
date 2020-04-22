import Link from "next/link"
import React from "react"
interface Props {}

const index: React.FC<Props> = (props) => {
  return (
    <p>
      <Link href="/users">
        <a>/users (must login)</a>
      </Link>
    </p>
  )
}
export default index
