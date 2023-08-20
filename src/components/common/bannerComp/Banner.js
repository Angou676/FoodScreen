import React, { useState } from 'react'
import './banner.css'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
];

function Banner() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box className="mxtop">
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label} style={{ padding: '0px 3%' }}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                className='banner_img'
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <div className='conatiner d_flex_cen mtop_smmid'>
                {
                    images.map((step, index) => {
                        return <div className='steper' id={activeStep === (index) ? "active" : "normal"} />
                    })
                }
            </div>
        </Box >
    );
}


export default Banner