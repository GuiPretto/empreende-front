import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import Link from 'next/link'
import { useSelector } from "react-redux";
import { Wrapper } from "./styles";

const PropertiesTable = () => {
    const {empreendimentos} = useSelector(store => store.empreendimentoReducer)

    return (
        <Wrapper>
            <TableContainer style={{height: '400px'}} component={Paper}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">N.º de Quartos</TableCell>
                            <TableCell align="right">Vagas de Estacionamento</TableCell>
                            <TableCell align="right">Contato</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {empreendimentos?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    {item.nome}
                                </TableCell>
                                <TableCell align="right">{item.quartos}</TableCell>
                                <TableCell align="right">{item.vagas}</TableCell>
                                <TableCell align="right">{item.contato}</TableCell>
                                <TableCell align="right"><Link href={'/empreendimentos/[empreendimento]'} as={`/empreendimentos/${item.slug}`}><a>Visualizar</a></Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper>
    )
}

export default PropertiesTable