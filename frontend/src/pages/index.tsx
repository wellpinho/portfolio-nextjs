import { contact } from "@/objects";
import Layout from "./components/layouts/Layout";

export default function Home({ props }: any) {
  console.log(props)
  const { name, phone, email, description, tags } = contact

  return (
    <Layout
      name={name}
      phone={phone}
      email={email}
      description={description}
      tags={tags}
    ></Layout >
  )
}
