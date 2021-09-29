import DateFnsUtils from "@date-io/date-fns";
import {
  Chip, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select, TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {
  KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider
} from "@material-ui/pickers";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  daysTitle: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  levelMargin: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function TrainingAddOption({ data, handleClose, open }) {
  const classes = useStyles();
  const [currentOption, setCurrentOption] = useState({
    courseName: "",
    price: 0.0,
    duration: 0,
    trainerName: "",
    companyName: "",
    phone: "",
    websiteName: "",
    startDate: new Date("2014-08-18T21:11:54"),
    endDate: new Date("2014-08-18T21:11:54"),
    startTime: new Date("2014-08-18T21:11:54"),
    EndTime: new Date("2014-08-18T21:11:54"),
    days: [],
    description: "",
    courseStatus: "",
  });

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(currentOption);

  const handleSave = () => {
    console.log("Save button pressed and then store in the Database");
    handleClose(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent>
          <Grid container spacing={2} className={classes.button}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSave()}
              >
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCurrentOption({
                    ...currentOption,
                    courseStatus: "accepted",
                  });
                  console.log(currentOption);
                }}
              >
                Accept
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setCurrentOption({
                    ...currentOption,
                    courseStatus: "rejected",
                  });
                  console.log(currentOption);
                }}
              >
                Reject
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Course Name"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    courseName: e.target.value,
                  })
                }
                value={currentOption.courseName}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    price: parseFloat(e.target.value),
                  })
                }
                value={currentOption.price}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Duration (hours)"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    duration: parseFloat(e.target.value),
                  })
                }
                value={currentOption.duration}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Trainer Name"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    trainerName: e.target.value,
                  })
                }
                value={currentOption.trainerName}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    companyName: e.target.value,
                  })
                }
                value={currentOption.companyName}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    phone: e.target.value,
                  })
                }
                value={currentOption.phone}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Website"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    websiteName: e.target.value,
                  })
                }
                value={currentOption.websiteName}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Start Date"
                  format="MM/dd/yyyy"
                  value={currentOption.startDate}
                  onChange={(e) =>
                    setCurrentOption({
                      ...currentOption,
                      startDate: e,
                    })
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="End Date"
                  format="MM/dd/yyyy"
                  value={currentOption.endDate}
                  onChange={(e) =>
                    setCurrentOption({
                      ...currentOption,
                      endDate: e,
                    })
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Start Time"
                  value={currentOption.startTime}
                  onChange={(e) =>
                    setCurrentOption({
                      ...currentOption,
                      startTime: e,
                    })
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="End Time"
                  value={currentOption.endTime}
                  onChange={(e) =>
                    setCurrentOption({
                      ...currentOption,
                      endTime: e,
                    })
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <FormControl className={classes.levelMargin}>
                <InputLabel id="demo-mutiple-chip-label">Days: </InputLabel>
                <Select
                  labelId="demo-mutiple-chip-label"
                  id="demo-mutiple-chip"
                  multiple
                  value={currentOption.days}
                  onChange={(e) =>
                    setCurrentOption({ ...currentOption, days: e.target.value })
                  }
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {days.map((day) => (
                    <MenuItem key={day} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container className={classes.levelMargin}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Description"
                multiline
                variant="outlined"
                onChange={(e) =>
                  setCurrentOption({
                    ...currentOption,
                    description: e.target.value,
                  })
                }
                value={currentOption.description}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TrainingAddOption;