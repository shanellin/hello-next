import { useRouter } from "next/router"

export default function BagName() {
  const router = useRouter()
  console.log(router.query);

  return (
    <>
      <h1>This is bag page.</h1>
    </>
  )
}
