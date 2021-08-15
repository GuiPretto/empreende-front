import { Button } from "@material-ui/core"
import Head from "next/head"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import SaveForm from "../src/components/Form/SaveForm"
import PageHeader from "../src/components/PageHeader"
import { prepararNovoRequest } from "../src/store/modules/Empreendimento/action"

const Cadastro = () => {
  const dispatch = useDispatch()
  const [submitForm, setSubmitForm] = useState(() => () => {})

  useEffect(() => {
    dispatch(prepararNovoRequest())
  }, [dispatch])

  return (
    <>
      <Head>
        <title>Cadastro</title>
        <meta property="og:title" content="Cadastro" key="title" />
      </Head>
      <PageHeader title="Novo empreendimento">
        <Button onClick={submitForm} type="button" size="large" variant="contained" color="primary">Salvar</Button>
      </PageHeader>
      <SaveForm setSubmitForm={setSubmitForm}/>
    </>
  )
}

export default Cadastro
