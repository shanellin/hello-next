import { useRouter } from "next/router"

export const getStaticProps = async (context) => {
  console.log(`Catch getStaticProps!!!`);
  // console.log(context);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.name}`)
  const json = await res.json()
  return {
    revalidate: 10,
    props: {
      content: json,
    }
  }
}
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { name: "1" } },
      { params: { name: "2" } },
    ],
    fallback: true
  }
}
export default function ArticlePost(props) {
  const router = useRouter()
  const { content } = props

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  function goArticle() {
    router.push("/article")
  }

  return (
    <>
      <h1>This is article {router.query.name}</h1>
      <div>UserId : {content.userId}</div>
      <div>Id : {content.id}</div>
      <div>Title : {content.title}</div>
      <div>Body : {content.body}</div>
      <br/>
      <button onClick={() => goArticle()}>Back to Article</button>
    </>
  )
}
