import React from 'react'
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import './syloSelect.css'

const HeadingSylo = () => {
    return (
        <>
            <section className=' d_flex_betwn d_flex_cen' style={{ marginTop: '50px' }}>
                <div className='d_flex_cen' style={{ width: '30%', }}>
                    <div style={{ borderTop: '2px solid purple', width: '100%', height: '1px' }} />
                    <ArrowLeftSharpIcon style={{ color: 'purple', marginTop: '-11px', marginLeft: '-11px', height: '24px' }} />
                </div>
                <div style={{ width: '40%', color: 'purple', marginTop: '-15px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}
                    className='text_gradient'
                    >
                        Sylo Select
                    </div>
                    <div className='fw600' style={{ fontSize: '11px', color: 'black' }}>
                        Exclusive Celebration divlans
                    </div>
                </div>
                <div className='d_flex_cen' style={{ width: '30%' }}>
                    <ArrowRightSharpIcon style={{ color: 'purple', marginTop: '-11px', marginRight: '-11px', height: '24px' }} />
                    <div style={{ borderTop: '2px solid purple', width: '100%', height: '1px' }} />
                </div>
            </section>
        </>
    )
}

export default HeadingSylo