import React from 'react';
import propertyStyles from './IndividualProperty.module.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

export const IndiPropTitle = () => {
    return (
        <div className={propertyStyles.individualPropPicsWalaHeadDiv}>
            <div className={propertyStyles.individualPropPicsWalaSUBDiv}>
                <div className={propertyStyles.individualPropPicsWalaImage1Div}>
                    <div className={propertyStyles.individualPropPicsWalaImage1SUBDiv}>
                        <img src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/29802037/b2dcf98c-c6f0-4bc8-abf1-dcc4b27a00c0_watermarked_image_1024.jpeg" alt="IMG1" />
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
    )
}