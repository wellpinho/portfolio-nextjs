import { contact } from "@/objects";
import { Button } from "@nextui-org/react";
import { FilePdf } from "phosphor-react";
import Layout from "./components/layouts/Layout";

export default function Home() {
  const { name, phone, email, description, tags } = contact

  return (
    <Layout name={name} phone={phone} email={email} description={description} tags={tags}>
      <h1>Hello World</h1>
      <Button color={"gradient"}>
        Resume
        <FilePdf size={18} weight="bold" />
      </Button>
    </Layout >
  )
}
