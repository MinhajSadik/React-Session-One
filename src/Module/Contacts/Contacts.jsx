import { Grid, makeStyles, TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center"
    },
    button:{
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    gridmargin:{
        marginBottom: theme.spacing(1),
    }
}))

const initialContact = {
    status: true,
    isCompany: false,
    firstName: '',
    lastName: '',
    mobileNumber: '',
}

const Contacts = () => {
    const classes = useStyles();

    const [currentContact, setCurrentContact] = useState(initialContact);
    const [allContacts, setAllContacts] = useState([])

    const getAllContacts = async () => {
        
    }
    useEffect(() => {
        console.log(currentContact);

    }, [currentContact])

    return (<>
        <Grid container justify="center" alignItems="center" className={classes.gridmargin}>
            <Grid item xs={6}>
            <FormControlLabel
            control={
                <Switch
                    checked={currentContact.status}
                    onChange={(e) => setCurrentContact({...currentContact, status:e.target.checked})}
                    name="checkedB"
                    color="primary"
                    />
                    }
                    label="Active"
                />
            </Grid>

            <Grid item xs={6}>
            <FormControlLabel
            control={
                <Switch
                    checked={currentContact.isCompany}
                    onChange={(e) => setCurrentContact({...currentContact, isCompany:e.target.checked})}
                    name="checkedB"
                    color="primary"
                    />
                    }
                    label="Compnay"
                />
            </Grid>
            
        </Grid>

        <Grid container spacing={1} className={classes.gridmargin}>
            <Grid item xs={3}>
                <TextField id="outlined-besic" label='First-Name' variant='outlined' fullWidth
                value={currentContact.firstName} onChange={(e) => setCurrentContact({...currentContact, firstName:e.target.value})} />
            </Grid>
            <Grid item xs={3}>
                <TextField id="outlined-besic" label='Last-Name' variant='outlined' fullWidth
                value={currentContact.lastName} onChange={(e) => setCurrentContact({...currentContact, lastName:e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-besic" label='Mobile-Number' variant='outlined' fullWidth
                value={currentContact.mobileNumber} onChange={(e) => setCurrentContact({...currentContact, mobileNumber:e.target.value})} />
            </Grid>
        </Grid>

</>);
};

export default Contacts;