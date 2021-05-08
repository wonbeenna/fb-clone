import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image='https://t1.daumcdn.net/cfile/tistory/2224AA35583C9DBE33'
                profileSrc='https://user-images.githubusercontent.com/12670730/113008567-6ebdcb80-9177-11eb-91bd-6863196d9cd3.png'
                title='Been'
            />
            <Story 
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU'
                profileSrc='https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg'
                title='Rafeh Qaze'
            />
            <Story 
                image='https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=evJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                profileSrc='https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630'
                title='Frankie'
            />
            <Story 
                image='https://t1.daumcdn.net/cfile/tistory/2358093C583C99A42A'
                profileSrc='https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635'
                title='Aaron Bernath'
            />
        </div>
    )
}

export default StoryReel;
