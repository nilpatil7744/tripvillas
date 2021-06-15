import React from 'react';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import errorStyles from './ErrorPage.module.css';

export const ErrorPage = () => {
    return (
        <div style={{background: '#f5f1e3', fontFamily: 'sans-serif', height:'100vh', width:"100vw"}}>
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} className={errorStyles.errorModule}>
                <div className={errorStyles.errorIcon}>
                    <LinkOffIcon />
                </div>
                <div className={errorStyles.errorMsg}>Oops! Something went Wrong. Try Again</div>
            </div>
        </div>
    )
}