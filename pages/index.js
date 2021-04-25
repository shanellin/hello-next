import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>This is home page.</h1>
      <Link href="/bag">
        <button>Go to Bag.</button>
      </Link>
      <br/>
      <br/>
      <Link href="/fruit">
        <button>Go to Fruit.</button>
      </Link>
      <br />
      <br />
      <Link href="/person">
        <button>Go to Person.</button>
      </Link>
    </>
  )
}
