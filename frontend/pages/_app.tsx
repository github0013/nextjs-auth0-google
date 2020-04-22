import { AppProps } from "next/app"
import React from "react"
import { AuthProvider } from "react-use-auth"
import { useRouter } from "next/router"
import { Header } from "../src/components/Layout"
import { GateKeeper } from "../src/components/utils"

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // https://github.com/Swizec/useAuth/blob/v0.6.1/src/AuthProvider.tsx#L58
  const callbackDomain =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}`
      : "http://localhost:8000"
  // https://github.com/Swizec/useAuth/blob/v0.6.1/src/AuthProvider.tsx#L58

  // just to overwrite redirectUri (default to http.../auth0_callback)
  const auth0_params = {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    redirectUri: `${callbackDomain}/auth0/callback`,
  }

  return (
    <AuthProvider
      navigate={router.push}
      auth0_domain={process.env.AUTH0_DOMAIN}
      auth0_client_id={process.env.AUTH0_CLIENT_ID}
      auth0_audience_domain={null}
      auth0_params={auth0_params}
    >
      <Header />
      <GateKeeper>
        <Component {...pageProps} />
      </GateKeeper>
    </AuthProvider>
  )
}

export default App
