import Head from "next/head"
import { ReactNode } from "react";
import Navbar from "../ui/Navbar";

type Props = {
  children: ReactNode,
  name: string
  phone: string
  email: string
  description: string
  tags: string
};

const Layout = ({ children, name, phone, email, description, tags }: Props) => {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="author" content={`${name} - ${email} - ${phone}`} />
        <meta name="description" content={description} />
        <meta name="keywords" content={tags} />
      </Head>

      <Navbar />
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}

export default Layout