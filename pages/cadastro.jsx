import { Button } from "@material-ui/core"
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
  }, [])

  return (
    <>
      <PageHeader title="Novo empreendimento">
        <Button onClick={submitForm} type="button" size="large" variant="contained" color="primary">Salvar</Button>
      </PageHeader>
      <SaveForm setSubmitForm={setSubmitForm}/>
    </>
  )
}

export default Cadastro
