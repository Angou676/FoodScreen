import React from 'react'
import './syloSelect.css'
import { occasiondata } from '../../dumyDat';
import HeadingSylo from './HeadingSylo';

const SyloSelect = () => {
    return (
        <>
            <HeadingSylo />

            <section className='mxtop pre_block_scroll_flex scroll_br_hide'>
                <div className='container grid_row_bk' >
                    {
                        occasiondata.map(val => (
                            <section>
                                <div className='style_box' >
                                    Birthday
                                </div>
                                <div className='text_bot text_Align fs12 fw600'>
                                    Get this package
                                </div>
                            </section>
                        ))
                    }
                </div>
            </section>

            <hr style={{ backgroundColor: 'purple', height:'1px'}} />
        </>

    )
}

export default SyloSelect