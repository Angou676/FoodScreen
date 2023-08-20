import React from 'react'
import { popularVenue } from '../../dumyDat'
import './customerReview.css'

const CustomerReview = () => {
    return (
        <>
            <h3 className='mxtop text_Align'>
                See what our <span className='text_gradient'>customers</span> say
            </h3>

            <section className='block_scroll_cus scroll_br_hide' >
                <div className='d_flex'>
                    {
                        popularVenue.map(val => {
                            return <div className='con_block'>
                                <div>
                                    <iframe
                                        style={{ height: '250px', width: '200px', borderRadius: '20px' }}
                                        src="https://www.youtube.com/embed/fsQVfQt0HOk"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer;
                                    autoplay; clipboard-write;
                                     encrypted-media; gyroscope; 
                                     picture-in-picture; web-share"
                                        allowfullscreen
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default CustomerReview