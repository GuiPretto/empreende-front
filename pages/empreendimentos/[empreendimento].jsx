import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../../src/components/PageHeader'
import { deletarRequest, prepararEditarRequest } from '../../src/store/modules/Empreendimento/action'
import EmpreendimentoContent from '../../src/components/EmpreendimentoContent'
import Link from 'next/link'
import Head from 'next/head'

const Empreendimento = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { empreendimentoAtual } = useSelector(store => store.empreendimentoReducer)
    const { empreendimento } = router.query
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        empreendimento && dispatch(prepararEditarRequest(empreendimento, 'SLUG'))
    }, [empreendimento])

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleDelete = (id) => {
        handleCloseModal()
        id && dispatch(deletarRequest(id))
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>{empreendimentoAtual ? empreendimentoAtual.nome : "Empreendimento"}</title>
                <meta property="og:title" content={empreendimentoAtual ? empreendimentoAtual.nome : "Empreendimento"} key="title" />
            </Head>
            <PageHeader title={empreendimentoAtual?.nome}>
                <Link href={{pathname: '/edicao', query: { id: empreendimentoAtual?.id }}}>
                    <Button type="button" size="large" variant="contained" color="primary">
                        <a>Editar</a>
                    </Button>
                </Link>
                <Button onClick={() => setModalOpen(true)} type="button" size="large" variant="contained" color="primary">Excluir</Button>
                <Dialog
                    open={modalOpen}
                    onClose={handleCloseModal}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Excluindo empreendimento"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Deseja realmente excluir esse empreendimento?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleCloseModal} color="primary">
                            Não
                        </Button>
                        <Button onClick={() => handleDelete(empreendimentoAtual?.id)} color="primary" autoFocus>
                            Sim
                        </Button>
                    </DialogActions>
                </Dialog>
            </PageHeader>
            <EmpreendimentoContent empreendimento={empreendimentoAtual} />
        </>
    )
}

export default Empreendimento