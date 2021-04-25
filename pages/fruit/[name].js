import { useRouter } from "next/router"

export default function FruitName(props) {
  const router = useRouter()

  function goFruit() {
    router.push("/fruit")
  }

  return (
    <>
      <h1>This is {router.query.name}.</h1>
      <button onClick={() => goFruit()}>Back to Fruit</button>
    </>
  )
}
