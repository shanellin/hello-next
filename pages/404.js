import { useRouter } from "next/router"

export default function Error404() {
  const router = useRouter()
  return (
    <>
      <h1>This is 404 page.</h1>
      <button onClick={() => router.push("/")}>Go home</button>
    </>
  )
}
