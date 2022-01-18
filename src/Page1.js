import React from 'react'
import { Link } from 'react-router-dom'

export const Page1 = () => {
    return (
        <div>
            <h3>Page1</h3>
            <Link to="/page1/detailA">Detail A</Link>
            <br />
            <Link to="/page1/detailBunko">Detail B</Link>
        </div>
    )
}

export default Page1
