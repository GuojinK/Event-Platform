import {Button, Container, MenuItem, TextField, Typography, Stack ,Card} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from "@mui/material/Divider";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

import TimePickerCPN from "./TimePickerCPN";
import UploadImage from "./UploadImage";
import CalendarCPN from "./CalendarCPN";


export default function EventPost() {

    const startString = {label: "start time"}


    const categories = [
        {
            value: 'AM',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];


    const [category, setCurrency] = useState('EUR');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };


    return (

        <Container>
            <Stack>
                <Paper sx={{marginX: 10, marginTop: 3, marginBottom: 8}}>

                    <Stack sx={{padding: 1, marginX: 6}}>

                        <Typography fontSize={30} fontWeight={500}> Post Your Own Event </Typography>
                    </Stack>
                    <Stack sx={{padding: 1, marginX: 6}}>

                        <Typography fontSize={18}> Fulfill the information to publish an new event </Typography>
                    </Stack>

                    <Stack direction={"row"} sx={{padding: 1, marginX: 6}}>
                        <AssignmentIcon fontSize={"large"}> </AssignmentIcon>
                        <Typography fontSize={26} fontWeight={500}> Basic Info</Typography>
                    </Stack>
                    <Stack sx={{padding: 1, marginLeft: 6, marginRight: 72}}>
                        <TextField
                            required
                            label="Event title"
                            maxRows={5}
                            multiline
                            helperText="Please enter your event name"
                        />
                    </Stack>

                    <Stack direction={"row"} sx={{padding: 1, marginLeft: 6,}}>
                        <Stack width={135}>
                            <TextField
                                required
                                label="Participant"

                                helperText="How many people?"
                            />
                        </Stack>

                        <Stack sx={{marginLeft: 6}}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                required
                                label="Category"
                                value={category}
                                onChange={handleChange}
                                helperText="Please select a category"
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Stack>
                    </Stack>

                    <Stack sx={{padding: 1, marginLeft: 6, marginRight: 40}}>
                        <TextField

                            label="Description"
                            multiline
                            rows={4}
                            helperText="Give a brief introduction about your event to attract more partners"
                        />

                    </Stack>


                    <Stack spacing={1} sx={{padding: 1, marginLeft: 6, marginRight: 40, marginTop:1}}>
                        <Typography fontSize={20} fontWeight={300}> Upload an image:</Typography>
                        <Card>

                        <UploadImage></UploadImage>
                        </Card>
                    </Stack>


                    <Divider sx={{marginX: 6, marginY: 2}} variant="middle"/>

                    <Stack direction={"row"} sx={{padding: 1, marginX: 6, marginTop: 2}}>
                        <LocationOnIcon fontSize={"large"}> </LocationOnIcon>
                        <Typography fontSize={26} fontWeight={500}>Location</Typography>
                    </Stack>

                    <Stack direction={"row"} sx={{padding: 1, marginLeft: 6, marginRight: 40}}>
                        <TextField
                            required
                            fullWidth
                            label="Address line 1"
                            helperText="street address"
                        />
                        <TextField sx={{marginLeft: 6}}
                                   fullWidth
                                   label="Address line 2"
                        />
                    </Stack>
                    <Stack direction={"row"} sx={{padding: 1, marginLeft: 6, marginRight: 40}}>
                        <TextField
                            required
                            fullWidth
                            label="Suburb"
                            helperText=""
                        />
                        <TextField sx={{marginLeft: 6}}
                                   id="outlined-select-currency"
                                   select
                                   required
                                   fullWidth
                                   label="State"
                                   value={category}
                                   onChange={handleChange}

                        >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField sx={{marginLeft: 6}}
                                   required
                                   fullWidth
                                   label="Postcode"
                                   helperText=""
                        />

                    </Stack>

                    <Divider sx={{marginX: 6, marginY: 2}} variant="middle"/>

                    <Stack direction={"row"} sx={{padding: 1, marginX: 6, marginTop: 2}}>
                        <CalendarMonthIcon fontSize={"large"}> </CalendarMonthIcon>
                        <Typography fontSize={26} fontWeight={500}>Date and time</Typography>
                    </Stack>

                    <Stack direction={"row"} sx={{padding: 1, marginLeft: 6, marginRight: 40}}>

                        <Stack>
                            <CalendarCPN label={"Start time"}></CalendarCPN>
                        </Stack>
                        <Stack sx={{marginLeft: 3}}>
                            <TimePickerCPN></TimePickerCPN>
                        </Stack>

                    </Stack>

                    <Stack direction={"row"} sx={{padding: 1, marginLeft: 6, marginRight: 40, marginTop:2}}>
                        <Stack>
                            <CalendarCPN label={"End time"}></CalendarCPN>
                        </Stack>
                        <Stack sx={{marginLeft: 3}}>
                            <TimePickerCPN></TimePickerCPN>
                        </Stack>
                    </Stack>

                    <Stack direction={"row"} sx={{padding: 1, marginLeft: 6, marginRight: 50, marginY: 5}}>

                        <Button variant={"outlined"} align={"right"}> Cancel </Button>
                        <Button variant={"contained"} align={"right"} sx={{marginLeft: 2}}> Confirm </Button>
                    </Stack>

                </Paper>

            </Stack>
        </Container>


    );


}