import React from 'react'
import Heading from '../common/headingComp/Heading'
import './occasion.css'
import { occasiondata } from '../../dumyDat'

const Occasion = () => {
    return (
        <>
            <Heading text={"Dinesh, What's your occasion?"}/>
            <section className='pre_block_scroll_flex scroll_br_hide'>
                <div className='container grid-row' >
                    {
                        occasiondata.map(val => (
                            <div>
                                <img src={val} />
                                <div className='text_Align fs12 fw600'>Birthday</div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Occasion