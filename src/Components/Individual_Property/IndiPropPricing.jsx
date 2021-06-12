import React, { useState } from 'react';
import propertyStyles from './IndividualProperty.module.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import homeSearchStyles from '../Home/Home_Search/HomeSearch.module.css';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const IndiPropPricing = () => {
    const [value, setValue] = useState([null, null]);
    const [guest, setGuest] = useState('');

    const handleGuest = (event) => {
        setGuest(event.target.value);
    };

    return (
        <div>
            <div className={propertyStyles.individualPropPricingMain}>
            </div>
            <div className={propertyStyles.individualPropPricingSUB}>
                <div className={propertyStyles.individualPropTopBreadcrumbDiv}>
                    <div className={propertyStyles.individualPropStartingPrice}>
                        <span style={{ fontSize: '0.35em', color: '#484848', display: 'block', fontFamily: 'Roboto ,sans-serif' }}>Starting</span>
                        ₹
                        <span style={{ fontFamily: 'Roboto ,sans-serif' }}>9999</span>
                        <span style={{ fontSize: '0.35em', color: '#484848', display: 'inline-block', fontFamily: 'Roboto ,sans-serif', paddingLeft: '15px' }}>per night</span>
                    </div>
                    <div className={propertyStyles.individualPropPricingInputsFlex}>
                        <div>
                            <div className={propertyStyles.individualPropPricingInputDanger} style={{ marginBottom: "0px" }}>
                                <div className={propertyStyles.individualPropPricingInputDangerSUB}>
                                    <div style={{ marginRight: '15px' }}> <ErrorOutlineIcon /> </div>
                                    <div style={{ fontWeight: "bold", fontFamily: 'Roboto , sans-serif' }}>Select units</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            <select className={propertyStyles.individualPropPricingUnitSelect}>
                                <option defaultValue >Select units</option>
                                <option value="1">1 units</option>
                                <option value="2">2 units</option>
                            </select>
                        </div>
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateRangePicker
                                    startText="Check In"
                                    endText="Check Out"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} helperText='' className={homeSearchStyles.chckk} size='small' />
                                            <TextField {...endProps} helperText='' className={homeSearchStyles.chckk} size='small' />
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel size='small' id="guest-select-label" className={homeSearchStyles.guestInput} >Select Guests</InputLabel>
                                    <Select
                                        labelId="guest-select-label"
                                        id="guest-select"
                                        autoWidth={true}
                                        size='small'
                                        sx={{ minWidth: '160px' }}
                                        value={guest}
                                        label="Select Guests"
                                        onChange={handleGuest}
                                    >
                                        {new Array(5).fill(0).map((item, index) => {
                                            return <MenuItem key={`${index}gsts`} value={index + 1}>{index === 0 ? `${index + 1} guest` : `${index + 1} guests`}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            <div style={{fontSize: '.875rem', lineHeight: 1.4, color: '#999'}}>
                            Rateplan: No meals provided (European Plan)
                            </div>
                        </div>
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            <button className={propertyStyles.individualPropRqsToBookBtn}>Request To Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
