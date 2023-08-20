import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Heading from '../common/headingComp/Heading';
import { popularVenue } from '../../dumyDat'
import './popularVenue.css'
import veg from '../../assets/images/veg.png'
import nonveg from '../../assets/images/nonveg.png'

const PopularVenue = () => {
    return (
        <>
            <section className='container d_flex_cen d_flex_jc_align'>
                <StarIcon />
                <h3>Most Popular Venue</h3>
                <StarIcon />
            </section>

            <section className='block_scroll_ scroll_br_hide' >
                <div className='d_flex'>
                    {
                        popularVenue.map(val => {
                            return <div className='con_blck'>
                                <img src={val} style={{ height: '180px', width: '160px', borderRadius: '20px' }} />
                                <div className='text_' >The Dome cafe</div>
                                <p> HSR layout &#x2022; 4.2 km</p>
                                <p> 8 Packages Available</p>
                                <div className='d_flex_betwn d_flex_jc_align mtop_smmid' style={{ color: 'grey' }}>
                                    <span className='d_flex_jc_align'>
                                        <StarIcon style={{ fontSize: '20px' }} />
                                        4.5
                                    </span>
                                    &#x2022;
                                    ₹₹
                                    &#x2022;
                                    <div>
                                        <img src={veg} style={{ height: '20px' }} />
                                        &nbsp;
                                        <img src={nonveg} style={{ height: '20px' }} />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default PopularVenue