import { Typography } from "@material-ui/core"
import Head from "next/head"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchForm from "../src/components/Form/SearchForm"
import PropertiesTable from "../src/components/PropertiesTable"
import { listRequest } from "../src/store/modules/Empreendimento/action"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listRequest({nome: "", quartos: 0}))  
  }, [dispatch])

  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="title" />
      </Head>
      <Typography paragraph variant="h4" component="h1">Empreendimentos em todo o Brasil!</Typography>
      <SearchForm/>
      <PropertiesTable/>
    </>
  )
}

export default Home
