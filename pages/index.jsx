import { Typography } from "@material-ui/core"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchForm from "../src/components/Form/SearchForm"
import PropertiesTable from "../src/components/PropertiesTable"
import { listRequest } from "../src/store/modules/Empreendimento/action"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listRequest({nome: "", quartos: 0}))  
  }, [])

  return (
    <>
      <Typography paragraph variant="h4" component="h1">Empreendimentos em todo o Brasil!</Typography>
      <SearchForm/>
      <PropertiesTable/>
    </>
  )
}

export default Home
