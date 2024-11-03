import React from 'react'
import Video from '../components/Video'
import CreatorBanner1 from '../components/CreatorBanner1';
import CreatorBanner2 from '../components/CreatorBanner2';

const Creator = () => {
  return (
    <div>
        <Video/>
        <div>
          <div>
            <CreatorBanner1/>
          </div>

          <div>
            {/* <CreatorBanner2/> */}
          </div>
        </div>
    </div>
  )
}

export default Creator;


