import { Button, Grid, useMediaQuery  } from "@material-ui/core";
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-material-ui";
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from "react-redux";
import { listRequest } from "../../../store/modules/Empreendimento/action";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Link from "next/link";

const SearchForm = () => {
    const dispatch = useDispatch();
    const mobile = useMediaQuery('(min-width:600px)');
    const { loading } = useSelector(store => store.loadingReducer)

    const schema = Yup.object().shape({
        nome: Yup.string(),
        quartos: Yup.number(),
    });

    return (
        <Formik
            initialValues={{
                nome: '',
                quartos: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(listRequest({nome: values.nome, quartos: values.quartos ? values.quartos : 0}))
                setSubmitting(false);
            }}
        >
            {({submitForm, isSubmitting, touched, errors}) => (
                <Form>
                    <Grid container direction={mobile ? "row" : "column"} alignItems="flex-start" justifyContent="center" spacing={2}>
                        <Grid item>
                            <Field
                                component={TextField}
                                required
                                size="small"
                                variant="outlined"
                                name="nome"
                                type="text"
                                label="Nome"
                            />
                        </Grid>
                        <Grid item>
                            <Field
                                component={TextField}
                                size="small"
                                variant="outlined"
                                name="quartos"
                                type="number"
                                label="N.º de Quartos"
                            />
                        </Grid>
                        <Grid item>
                            <Button size="large" disabled={loading} variant="contained" color="primary" onClick={submitForm}>Pesquisar<SearchOutlinedIcon/></Button>
                        </Grid>
                        <Grid item>
                            <Link passHref href={'/cadastro'}><Button type="button" size="large" variant="contained" color="primary"><a>Cadastrar Novo</a><AddOutlinedIcon/></Button></Link>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    )
}

export default SearchForm