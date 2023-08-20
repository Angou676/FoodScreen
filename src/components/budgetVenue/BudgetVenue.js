import React from 'react'
import './budgetVenue.css'
import Heading from '../common/headingComp/Heading'
import { budgetCafe } from '../../dumyDat'
import StarIcon from '@mui/icons-material/Star';
import veg from '../../assets/images/veg.png'
import nonveg from '../../assets/images/nonveg.png'

const BudgetVenue = () => {
    return (
        <>
            <Heading text={"Venues on a Budget"} />

            <section className='container mxtop'>
                {
                    budgetCafe.map(val => (
                        <div className='bgcart_gradient d_flex'
                            style={{ height: '100px',  marginBottom: '40px', borderRadius: '10px' }}
                        >
                            <div style={{ width: '36%', marginLeft: '10px', margin: '-10px 0px auto 8px', }}>
                                <img src={val} style={{ height: '120px', width: '100%', borderRadius: '20px' }} />
                                <div className='text_bot_blck text_Align fs12 fw600'>
                                    Sylo Select
                                </div>
                            </div>
                            <section style={{ marginLeft: '8px' }}>
                                <div className='text_' >The Dome cafe</div>
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
                                <p className='con_blckp'> HSR layout &#x2022; 4.2 km</p>
                                <p className='con_blckp'> 8 Packages Available</p>
                            </section>

                        </div>
                    ))
                }


            </section>
        </>
    )
}

export default BudgetVenue