import { useRouter } from "next/router"

export default function PersonComponet(props) {
  const router = useRouter()
  return (
    <>
      <h1>Person list</h1>
      <div>person's name is :</div>
      <br/>
      {
        props.person ? props.person.map((item, index) => {
          return (
            <button onClick={() => router.push(`/person/${item.name}`)} key={index}>{item.name}</button>
          )
        }) : null
      }
    </>
  )
}

// PersonComponet.getInitialProps = async (context) => {
//   console.log(`Catch getInitialProps!!!`);
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   let json = await res.json()
//   return {
//     person: json
//   }
// }

export const getServerSideProps = async (context) => {
  console.log(`Catch getServerSideProps!!!`);
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  return {
    props: {
      person: json,
    }
  }
}
