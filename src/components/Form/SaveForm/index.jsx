import dynamic from 'next/dynamic'
import { Grid, useMediaQuery } from "@material-ui/core";
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-material-ui";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";
import { salvarRequest } from '../../../store/modules/Empreendimento/action';
import MaskedInput from 'react-text-mask';
import { useEffect } from 'react';
import { useState } from 'react';

const SaveForm = ({ setSubmitForm }) => {
    const dispatch = useDispatch();
    const mobile = useMediaQuery('(min-width:600px)');
    const [setValues, setSetValues] = useState(() => () => {})
    const { empreendimentoAtual } = useSelector(store => store.empreendimentoReducer)

    useEffect(() => {
        setValues({...initialValues, ...empreendimentoAtual})
    }, [empreendimentoAtual])

    const MapInput = dynamic(
        () => import('./MapInput'),
        {
            // eslint-disable-next-line react/display-name
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    )

    const Map = dynamic(
        () => import('../../Map'),
        {
            // eslint-disable-next-line react/display-name
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    )

    const initialValues = {
        nome: '',
        quartos: '',
        area: '',
        contato: '',
        vagas: '',
        endereco: null,
        ...empreendimentoAtual
    }

    const schema = Yup.object().shape({
        nome: Yup.string()
            .required('Required'),
        quartos: Yup.number()
            .required('Required'),
        area: Yup.number()
            .required('Required'),
        contato: Yup.string()
            .required('Required'),
        vagas: Yup.number()
            .required('Required'),
        endereco: Yup.object()
            .required('Required'),
    });

    const TextMaskCustom = (props) => {
        const { inputRef, ...other } = props;

        return (
            <MaskedInput
                {...other}
                ref={(ref) => {
                    inputRef(ref ? ref.inputElement : null);
                }}
                mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,]}
                placeholderChar={'\u2000'}
                showMask
            />
        );
    }

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(salvarRequest(values))
                    setSubmitting(false);
                }}
            >
                {({ submitForm, isSubmitting, touched, errors, values, setValues, setFieldValue }) => {
                    setSubmitForm(() => submitForm)
                    setSetValues(() => setValues)
                    
                    return (
                        <Form id="cadastro-empreendimento">
                            <Grid container direction={mobile ? "row" : "column"} alignItems="center" justifyContent="center" spacing={4}>
                                <Grid item>
                                    <Field
                                        component={TextField}
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
                                        name="area"
                                        type="number"
                                        label="Área (m²)"
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        component={TextField}
                                        size="small"
                                        variant="outlined"
                                        name="contato"
                                        type="tel"
                                        label="Contato"
                                        InputProps={{
                                            inputComponent: TextMaskCustom,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container direction={mobile ? "row" : "column"} alignItems="center" justifyContent="center" spacing={4}>
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
                                    <Field
                                        component={TextField}
                                        size="small"
                                        variant="outlined"
                                        name="vagas"
                                        type="number"
                                        label="Vagas de Estacionamento"
                                    />
                                </Grid>

                            </Grid>
                            <MapInput setFieldValue={setFieldValue} />
                            <Map actualAdress={values.endereco} />
                        </Form>
                    )
                }}
            </Formik>
        </Wrapper>
    )
}

export default SaveForm