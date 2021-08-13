import { OpenStreetMapProvider } from "leaflet-geosearch";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from 'formik-material-ui-lab';
import { useState } from "react";
import { MapInputOption } from "./styles";
import { Field } from "formik";

const MapInput = ({setFieldValue}) => {
    const [results, setResults] = useState([])
    const provider = new OpenStreetMapProvider();

    const handleResults = async (e) => {
        setResults(await provider.search({ query: e }))
    }

    const getEnderecoAjustado = (enderecoOriginal) => {
        if (!enderecoOriginal) return null
        return {
            nome: enderecoOriginal.label,
            longitude: enderecoOriginal.x,
            latitude: enderecoOriginal.y,
            limites: [{
                coordenadas: [
                    {
                        longitude: enderecoOriginal.bounds[0][0],
                        latitude: enderecoOriginal.bounds[0][1]
                    },
                    {
                        longitude: enderecoOriginal.bounds[1][0],
                        latitude: enderecoOriginal.bounds[1][1]
                    }	
                ]
            }]
        }
    }
    
    return (
        <>
            <Field
                name="endereco"
                component={Autocomplete}
                options={results}
                getOptionLabel={(results) => results.nome ? results.nome : results.label} 
                onChange={(_, v) => setFieldValue('endereco', getEnderecoAjustado(v))}
                renderInput={(params) => (
                    <TextField {...params} onChange={(e) => handleResults(e.target.value)} label="Endereço" margin="normal" variant="outlined" />
                )}
                renderOption={(option) => <MapInputOption>{option.label}</MapInputOption>}
            />
        </>
    );
}

export default MapInput