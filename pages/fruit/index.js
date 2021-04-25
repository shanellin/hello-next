import { useRouter } from "next/router"

const fruitList = [
  "apple",
  "banana",
  "watermelon"
]

export default function FruitName() {
  const router = useRouter()
  return (
    <>
      <h1>Pick your fruit.</h1>
      {
        fruitList.map(item => {
          return (
            <button onClick={() => router.push(`/fruit/${item}`)} key={item}>{item}</button>
          )
        })
      }
    </>
  )
}
