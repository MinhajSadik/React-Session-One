import { Grid, makeStyles, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import axios from 'axios';
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
    type: 'Suplier',
    isCompany: false,
    firstName: '',
    lastName: '',
    mobileNumber: '',
    company: null,
}

const Contacts = () => {
    const classes = useStyles();

    const [currentContact, setCurrentContact] = useState(initialContact);
    // eslint-disable-next-line no-unused-vars
    const [allContacts, setAllContacts] = useState([])

    // const getAllContacts = async () => {
        
    //     await axios({
    //         method: 'POST',
    //         url: `${apiBaseUrl}/Contacts/get_all`,
    //         headers: { 'Content-Type': 'application/json'},
    //     }).then(res => {
    //         console.log("companies", res.data.result);
    //         res.data.result ? setAllContacts(res.data.result) : setAllContacts([])
    //     }).catch(err => console.error(err));
    // }

    useEffect(() => {
        // getAllContacts();
    }, [])


    useEffect(() => {
        console.log(currentContact);

    }, [currentContact])

    return (<>
        <Grid container justifyContent="center" alignItems="center" className={classes.gridmargin}>
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

        <Grid container spacing={1} className={classes.gridmargin}>
            <Grid item xs={6}>
                <Autocomplete
                    id="combo-box-demo"
                    value={currentContact.company}
                    onChange={(e, newValue) => setCurrentContact({...currentContact, company:newValue})}
                    options={allContacts}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField {...params} label="Related-Contact" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={currentContact.type}
                            onChange={(e) => setCurrentContact({...currentContact, type:e.target.value})}
                            label="Age"
                            >
                            <MenuItem value={"Suplier"}>Suplier</MenuItem>
                            <MenuItem value={"Vendor"}>Vendor</MenuItem>
                        </Select>
                </FormControl>
            </Grid>
        </Grid>
</>);
};

export default Contacts;