import { useRouter } from "next/router"

export default function Article() {
  const router = useRouter()
  const articleList = [1, 2, 3, 4, 5]

  return (
    <>
      <h1>This is article.</h1>
      {
        articleList.map(item => {
          return (
            <button onClick={() => router.push(`/article/${item}`)} key={item}>{item}</button>
          )
        })
      }
    </>
  )
}
