import React from 'react';
import propertyStyles from './IndividualProperty.module.css';

export const IndiPropBreadCrumb = () => {
    return (
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
    )
}
