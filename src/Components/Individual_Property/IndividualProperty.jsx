import React from 'react';
import { NavBar } from '../Home_NavBar/NavBar';
import propertyStyles from './IndividualProperty.module.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';

export const IndividualProperty = () => {
    return (
        <div>
            <NavBar />
            <div className={propertyStyles.individualPropMainFlexDiv674}>
                <div>
                    <div className={propertyStyles.individualPropTopBreadcrumbDiv}>
                        <ul className={propertyStyles.individualPropTopBreadcrumbUL}>
                            <li className={propertyStyles.individualPropTopBreadcrumbLI}>Home</li>
                            <li className={propertyStyles.individualPropTopBreadcrumbLI}>India</li>
                            <li className={propertyStyles.individualPropTopBreadcrumbLI}>Goa</li>
                            <li className={propertyStyles.individualPropTopBreadcrumbLI}>Siolim</li>
                            <li className={propertyStyles.individualPropTopBreadcrumbLI}>Property #29802037</li>
                        </ul>
                        <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
                    </div>
                    <div className={propertyStyles.individualPropPicsWalaHeadDiv}>
                        <div className={propertyStyles.individualPropPicsWalaSUBDiv}>
                            <div className={propertyStyles.individualPropPicsWalaImage1Div}>
                                <div className={propertyStyles.individualPropPicsWalaImage1SUBDiv}>
                                    <img src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/29802037/b2dcf98c-c6f0-4bc8-abf1-dcc4b27a00c0_watermarked_image_1024.jpeg" alt="IMG1" />
                                    {/* <div data-src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/29802037/b2dcf98c-c6f0-4bc8-abf1-dcc4b27a00c0_mob_thumbnail.jpeg" style="height: 100%; background-size: cover; background-image: url('https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/29802037/b2dcf98c-c6f0-4bc8-abf1-dcc4b27a00c0_mob_thumbnail.jpeg'); uk-img="target: !.uk-slideshow-items"></div> */}
                                    {/* <div className={propertyStyles.bgImg1}></div> */}
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className={propertyStyles.individualPropPicsWalaImage2Div}>
                                    <div className={propertyStyles.individualPropPicsWalaImage2SUBDiv}>
                                        <img src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/29802037/01_watermarked_image_1024.jpeg" alt="IMG2" />
                                    </div>
                                </div>
                                <div className={propertyStyles.individualPropPicsWalaImage2Div}>
                                    <div className={propertyStyles.individualPropPicsWalaImage2SUBDiv}>
                                        <img src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/29802037/dsc_0010_watermarked_image_1024.jpeg" alt="IMG3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={propertyStyles.individualPropPicsWalaTitleHeadDiv}>
                            <div className={propertyStyles.individualPropPicsWalaTitleSubDiv}>
                                <h1 style={{ fontSize: '30px !important', fontWeight: 300 }}>2bhk Complex Villa
                                    <div style={{ display: 'block', marginTop: '20px', fontSize: '0.5em', color: '#484848' }} >
                                        <span className={propertyStyles.individualPropLocIcon}> <LocationOnOutlinedIcon /> </span>
                                        <span>Siolim, Goa, India | Marna</span>
                                    </div>
                                </h1>
                                <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
                                <div className={propertyStyles.individualPropTopTagsHeadDiv}>
                                    <div>
                                        <span>VILLA</span>
                                    </div>
                                    <div>
                                        <span>2 BEDROOMS</span>
                                    </div>
                                    <div>
                                        <span>2 BATHROOMS</span>
                                    </div>
                                    <div>
                                        <span>5 MAX GUESTS</span>
                                    </div>
                                    <div>
                                        <span>WIFI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropToggleMenu}>
                        <ul className={propertyStyles.individualPropToggleMenuUL}>
                            <li className={propertyStyles.individualPropToggleMenuLI}>
                                <InfoOutlinedIcon style={{ color: '#999' }} /> <span>OVERVIEW</span>
                            </li>
                            <li className={propertyStyles.individualPropToggleMenuLI}>
                                <LocalOfferOutlinedIcon style={{ color: '#999' }} /> <span>AMENITIES</span>
                            </li>
                            <li className={propertyStyles.individualPropToggleMenuLI}>
                                <LocationOnOutlinedIcon style={{ color: '#999' }} /> <span>MAP</span>
                            </li>
                            <li className={propertyStyles.individualPropToggleMenuLI}>
                                <TocOutlinedIcon style={{ color: '#999' }} /> <span>POLICIES & FEES</span>
                            </li>
                        </ul>
                    </div>
                    <div id={propertyStyles.individualPropOverview}>
                        <div className={propertyStyles.individualPropOverView2}>
                            <div className={propertyStyles.individualPropOverView2LEFT}>
                                <div className={propertyStyles.individualPropTypeOfProperty}>
                                    <div className={propertyStyles.individualPropTypeOfPropertyText}>
                                        <span>Villa</span>
                                        <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Type Of Property</span>
                                    </div>
                                </div>
                                <div className={propertyStyles.individualPropBedAndBath}>
                                    <div>
                                        <span>2</span>
                                        <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                                    </div>
                                </div>
                                <div className={propertyStyles.individualPropBedAndBath}>
                                    <div>
                                        <span>2</span>
                                        <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                                    </div>
                                </div>
                                <div className={propertyStyles.individualPropBedAndBath}>
                                    <div>
                                        <span>2</span>
                                        <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                                    </div>
                                </div>
                                <div className={propertyStyles.individualPropBedAndBath}>
                                    <div>
                                        <span>2</span>
                                        <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                                    </div>
                                </div>
                            </div>
                            <div className={propertyStyles.individualPropOverView2RIGHT}>
                                <div className={propertyStyles.individualPropContentDesc}>
                                    It is a 2 BHK Row Villa apartment setup with Gated 24 hr security.The complex has a Lawn tennis court and a swimming pool.Good for a small family or 02 Couples.Super Clean Apartment With the provision of Sofa Sets and Queen size beds the Apartment can accommodate up to 05 persons ( 02 couples or a couple with 02 Kids) Both the bedrooms have air conditioning.The Hall is provided with a 40' LCD TV With satellite connection. The cook will prepare food for the guest on the charges of INR.1000 for per day, if the guest wish to have meals outside then the restaurant is only 2 km's away, & the grocery store is 500m away from the property
                                </div>
                                <div style={{ marginTop: '15px', fontWeight: 'bolder', textAlign: 'left' }}>Best For</div>
                                <div className={propertyStyles.individualPropTopTagsHeadDiv}>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>VILLA</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>2 BEDROOMS</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>2 BATHROOMS</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>5 MAX GUESTS</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>WIFI</span>
                                    </div>
                                </div>
                                <br />
                                <div style={{ color: '#1e87f0', textDecoration: 'none', cursor: 'pointer' }}>What can you do in & around Marna, Siolim</div>
                            </div>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropAmenitiesMain}>
                        <div style={{ fontSize: '1.5rem', lineheight: 1.5, color: '#333', textAlign: 'left' }}>Key Amenities</div>
                        <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
                        <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                        </div>
                        <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Living Room</div>
                        <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                            <div style={{ padding: '7px 15px 8px 0px' }}>
                                <span style={{ border: '1px solid #ddddde', color: '#666' }}>POWER BACKUP</span>
                            </div>
                        </div>
                        <div style={{ alignContent: 'space-around', flexWrap: 'wrap', display: 'flex' }}>
                            <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                                <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bedroom 1</div>
                                <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>AC</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>WARDROBE</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>BALCONY</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>1 QUEEN BED(S)</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                                <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bedroom 2</div>
                                <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>AC</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>WARDROBE</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>1 QUEEN BED(S)</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                                <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bathroom 1</div>
                                <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>WESTERN TOILET</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>TOILET PAPER</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>JET SPRAY</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>BATH TUB</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>SANITIZER</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                                <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bathroom 2</div>
                                <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>WESTERN TOILET</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>JET SPRAY</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>BATH TUB</span>
                                    </div>
                                    <div style={{ padding: '7px 15px 8px 0px' }}>
                                        <span style={{ border: '1px solid #ddddde', color: '#666' }}>SANITIZER</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropMapsMain}>
                        <div style={{ fontSize: '1.5rem', lineHeight: 1.5, color: '#333', textAlign: 'left' }}>Map</div>
                        <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
                        <div className={propertyStyles.individualPropRealMap}>
                            <div className={propertyStyles.yeHaiMapWalaDiv}>

                            </div>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropMapsMain}>
                        <div style={{ fontSize: '1.5rem', lineHeight: 1.5, color: '#333', textAlign: 'left' }}>Policies & Fees</div>
                        <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
                        <div className={propertyStyles.individualPropPoliciesMain}>
                            <div className={propertyStyles.individualPropPoliciesMainFirstCol}>
                                <div style={{ marginBottom: '10px', fontWeight: 'bolder', textAlign: 'left' }}>Default Cancellation Policy</div>
                                <div className={propertyStyles.individualPropStringentDiv}>
                                    <p style={{ margin: '0 0 20px 0' }}>
                                        <strong>Stringent</strong>: No charges will be levied if booking is canceled 61 days prior to check-in. If cancellation is done between 30 to 60 days prior to check-in, 50% of the total booking amount will be charged. Post that, there will be no refund.
                                    </p>
                                </div>
                            </div>

                            <div className={propertyStyles.individualPropPoliciesMainFirstCol}>
                                <div style={{ marginBottom: '10px', fontWeight: 'bolder', textAlign: 'left' }}>House Rules</div>
                                <div className={propertyStyles.individualPropStringentDiv}>
                                    <p> Loud Music not allowed. Pets not allowed. Stags / All Male Groups not allowed. Feel at home treat it as your own home dont abuse things appliances. kindly dont pluck the fruits and flowers in the complex. Drink responsibly and definitely not in the pool. Smokers may smoke in the common airy areas and the balcony only. Smoking in the bedrooms especially in the bed is strictly not acceptable. Please bear in mind that you are required to use the drying lines (Provided) to dry your clothes after wash. The apartment complex management does not allow clothes to be hung on the balcony railing. The swimming pool is closed post 8 pm. Swimwear is Mandatory for use of pool. As required by law every Guest above the age of 18 must carry a Government issued Photo ID Card, and present it to the caretaker upon request, alongside signing the Guest Register with complete name, email ID and contact number</p>
                                </div>
                            </div>
                            <div className={propertyStyles.individualPropPoliciesMainFirstCol}>
                                <div style={{ marginBottom: '10px', fontWeight: 'bolder', textAlign: 'left' }}>Cleaning Fee</div>
                                <div className={propertyStyles.individualPropStringentDiv}>
                                    <p>
                                        Cleaning Fee INR 327.00 Fixed Amount Per Stay
                                    </p>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>
                <div>
                    <div className={propertyStyles.individualPropPricingMain}>
                    </div>
                    <div className={propertyStyles.individualPropPricingSUB}>
                        <div className={propertyStyles.individualPropTopBreadcrumbDiv}>
                            <div className={propertyStyles.individualPropStartingPrice}>
                                <span style={{ fontSize: '0.35em', color: '#484848', display: 'block', fontFamily:'Roboto ,sans-serif'}}>Starting</span>
                                ₹
                                <span style={{fontFamily:'Roboto ,sans-serif' }}>9999</span>
                                <span style={{ fontSize: '0.35em', color: '#484848', display: 'inline-block', fontFamily:'Roboto ,sans-serif', paddingLeft: '15px' }}>per night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
