import React from 'react';
import { NavBar } from '../Home_NavBar/NavBar';
import propertyStyles from './IndividualProperty.module.css';
import { IndiPropPricing } from './IndiPropPricing';
import { IndiPropBreadCrumb } from './IndiPropBreadCrumb';
import { IndiPropPolicies } from './IndiPropPolicies';
import { IndiPropMap } from './IndiPropMap';
import { AmenitiesBox } from './AmenitiesBox';
import { IndiPropOverview } from './IndiPropOverview';
import { IndiPropToggleMenu } from './IndiPropToggleMenu';
import { IndiPropTitle } from './IndiPropTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHotel } from '../../Redux/SingleHotel/action';
import { useParams } from 'react-router-dom';

export const IndividualProperty = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.singleHotels.data);
    const isLoading = useSelector(state => state.singleHotels.isLoading);
    const isError = useSelector(state => state.singleHotels.isError);

    useEffect(() => {
        dispatch(getHotel(id));
        console.log(id);
        console.log(data);
    }, [dispatch])

    return (
        <div>
            <NavBar />
            <div className={propertyStyles.individualPropMainFlexDiv674}>
                <div>
                    <IndiPropBreadCrumb/>
                    <IndiPropTitle/>
                    <IndiPropToggleMenu/>
                    <IndiPropOverview/>
                    <AmenitiesBox/>
                    <IndiPropMap/>
                    <IndiPropPolicies/>
                </div>
                <IndiPropPricing/>
            </div>
        </div>
    )
}