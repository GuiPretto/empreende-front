import { Wrapper, Items, Item, Contact } from "./styles"
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import HotelIcon from '@material-ui/icons/Hotel';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import dynamic from "next/dynamic"
import { Paper, Typography, Tooltip } from "@material-ui/core"

const EmpreendimentoContent = ({ empreendimento }) => {
    const Map = dynamic(
        () => import('../Map'),
        {
            // eslint-disable-next-line react/display-name
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    )

    return (
        <Wrapper>
            <Items>
                <Paper elevation={3} style={{ width: '96px', height: '128px' }}>
                    <Item>
                        <Tooltip title="Vagas de Estacionamento">
                            <DriveEtaIcon style={{ fontSize: 40 }} />
                        </Tooltip>
                        <Typography variant="h6" component="p">{empreendimento?.vagas}</Typography>
                    </Item>
                </Paper>
                <Paper elevation={3} style={{ width: '96px', height: '128px' }}>
                    <Item>
                        <Tooltip title="Área (em m²)">
                            <AspectRatioIcon style={{ fontSize: 40 }} />
                        </Tooltip>
                        <Typography variant="h6" component="p">{empreendimento?.area}m²</Typography>
                    </Item>
                </Paper>
                <Paper elevation={3} style={{ width: '96px', height: '128px' }}>
                    <Item>
                        <Tooltip title="Número de quartos">
                            <HotelIcon style={{ fontSize: 40 }} />
                        </Tooltip>
                        <Typography variant="h6" component="p">{empreendimento?.quartos}</Typography>
                    </Item>
                </Paper>
            </Items>
            <Contact>
                <Typography variant="h6" component="p">Contato:</Typography>
                <Typography variant="h6" component="h6"><a href={`tel:${empreendimento?.contato}`}>{empreendimento?.contato}</a></Typography>
            </Contact>
            {empreendimento?.endereco && (
                <Map actualAdress={empreendimento.endereco} />
            )}
        </Wrapper>
    )
}

EmpreendimentoContent.displayName = "EmpreendimentoContent"

export default EmpreendimentoContent
