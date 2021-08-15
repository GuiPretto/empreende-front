import { IconButton, Container, Grid, Typography } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";
import React from "react";

const PageHeader = ({children, title}) => {

    return (
        <Container style={{marginTop: '80px'}} maxWidth={'md'}>
            <Grid container wrap="nowrap" direction={'row'}>
                <Grid container item justifyContent='flex-start' alignItems='center'>
                    <Link passHref href="/"><IconButton><ArrowBackIcon/></IconButton></Link>
                    <Typography style={{marginLeft: '28px'}} variant='h5' component='h1'>{title}</Typography>
                </Grid>
                <Grid container item justifyContent='flex-end' alignItems='center' spacing={2}>
                    {React.Children.map(children, child => (
                        <Grid item>
                            {React.cloneElement(child, {style: {...child.props.style}})}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>       
    )
}

export default PageHeader