import { Button } from "@material-ui/core"
import { useState } from "react"
import { useDispatch } from "react-redux"
import SaveForm from "../src/components/Form/SaveForm"
import PageHeader from "../src/components/PageHeader"
import { useRouter } from 'next/router'
import { useEffect } from "react"
import { prepararEditarRequest } from "../src/store/modules/Empreendimento/action"
import Head from "next/head"

const Edicao = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const [submitForm, setSubmitForm] = useState(() => () => {console.log('teste')})

  useEffect(() => {
    id && dispatch(prepararEditarRequest(id, 'ID'))
  }, [id])

  return (
    <>
      <Head>
        <title>Edição</title>
        <meta property="og:title" content="Edição" key="title" />
      </Head>
      <PageHeader title="Editar empreendimento">
        <Button onClick={submitForm} type="button" size="large" variant="contained" color="primary">Salvar</Button>
      </PageHeader>
      <SaveForm setSubmitForm={setSubmitForm}/>
    </>
  )
}

export default Edicao
