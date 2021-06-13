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
import DoneIcon from '@material-ui/icons/Done';

export const IndiPropPricing = () => {
    const [noOfUnits, setNoOfUnits] = useState(null);
    const [value, setValue] = useState([null, null]);
    const [guest, setGuest] = useState('');

    const handleUnits = (e) => {
        if (e.target.value === 'Select units') {
            setNoOfUnits(null);
        } else {
            setNoOfUnits(e.target.value);
        }
    }

    const handleGuest = (event) => {
        setGuest(event.target.value);
    };

    return (
        <div>
            <div className={propertyStyles.individualPropPricingMain}>
            </div>
            <div className={propertyStyles.individualPropPricingSUB}>
                <div style={{paddingTop:'20px'}} className={propertyStyles.individualPropTopBreadcrumbDiv}>
                    <div className={propertyStyles.individualPropStartingPrice}>
                        <span style={{ fontSize: '0.35em', color: '#484848', display: 'block', fontFamily: 'Roboto ,sans-serif' }}>Starting</span>
                        ₹
                        <span style={{ fontFamily: 'Roboto ,sans-serif' }}>9999</span>
                        <span style={{ fontSize: '0.35em', color: '#484848', display: 'inline-block', fontFamily: 'Roboto ,sans-serif', paddingLeft: '15px' }}>per night</span>
                    </div>
                    <div className={propertyStyles.individualPropPricingInputsFlex}>
                        {noOfUnits === null ? <div>
                            <div className={propertyStyles.individualPropPricingInputDanger} style={{ marginBottom: "0px" }}>
                                <div className={propertyStyles.individualPropPricingInputDangerSUB}>
                                    <div style={{ marginRight: '15px' }}> <ErrorOutlineIcon /> </div>
                                    <div style={{ fontWeight: "bold", fontFamily: 'Roboto , sans-serif' }}>Select units</div>
                                </div>
                            </div>
                        </div> :
                            <div>
                                <div className={propertyStyles.individualPropPricingInputSuccess}>
                                    <div style={{ fontWeight: 'bolder' }}>
                                        <div className={propertyStyles.individualPropPricingInputSuccessFlexWrap}>
                                            <div><DoneIcon /></div>
                                            <div style={{ flex: '1' }}>Your dates are available to book</div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            <select onChange={handleUnits} className={propertyStyles.individualPropPricingUnitSelect}>
                                <option selected value={null} >Select units</option>
                                <option value={1}>1 units</option>
                                <option value={2}>2 units</option>
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
                            <div style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>
                                Rateplan: No meals provided (European Plan)
                            </div>
                        </div>
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            <div style={{display: 'flex', flexWrap: 'wrap', margin: 0, padding: 0, listStyle: 'none', marginLeft:'-40px'}}>
                                <div style={{width: '45%', paddingLeft: '5%', margin: 0}}>
                                    <p style={{margin: '0 0 20px 0', fontWeight: 'bolder'}}>
                                        Total
                                        <span style={{display: 'block', fontWeight: 'normal', fontSize: "0.8em"}}>Includes taxes & </span>
                                        <span style={{display: 'block', fontWeight: 'normal', fontSize: "0.8em"}}> fees </span>
                                    </p>
                                </div>
                                <div style={{width: '45%', paddingLeft: '5%', margin: 0}}>
                                    <p  style={{margin: '0 0 20px 0', fontWeight: 'bolder', textAlign:'right'}}>
                                        <span>₹170819.95</span>
                                        <span style={{display: 'block', fontWeight: 'normal', fontSize: "0.8em", color:'#0f7ae5'}}>View details</span>
                                    </p>
                                </div>
                                {/* <div class="uk-width-1-2 uk-hidden@m">
                                    <a class="uk-button uk-button-small uk-button-default " href="" style="float: right;padding: 5px 15px;line-height: 20px;" uk-toggle="target: #bookingsummary">
                                        <span style="display: block;" class="uk-text-bold">₹170819.95</span>
                                        <span style="display: block;font-size: 0.8em;">View details</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                        <div style={{ padding: '15px 0px 0px 0px' }}>
                            {noOfUnits === null ?<button className={propertyStyles.individualPropRqsToBookBtn}>Request To Book</button>
                            : <button style={{backgroundColor:'#1e87f0'}} className={propertyStyles.individualPropRqsToBookBtn}>Request To Book</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
