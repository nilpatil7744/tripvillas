import React from 'react'
import { NavBar } from '../Home_NavBar/NavBar'
import { HomeSearch } from './Home_Search/HomeSearch'

export const Home = () => {
    return (
        <div>
            <NavBar/>
            <HomeSearch/>
        </div>
    )
}
