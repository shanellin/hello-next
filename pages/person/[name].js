import { useRouter } from "next/router"

export default function PersonDetail(props) {
  const router = useRouter()

  function goPerson() {
    router.push("/person")
  }

  return (
    <>
      <h1>This is {router.query.name}'s detail.</h1>
      <button onClick={() => goPerson()}>Back to Person list</button>
    </>
  )
}
