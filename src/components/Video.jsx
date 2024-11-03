import React from 'react';

const Video = () => {
    return (
        <div className="relative w-full lg:h-screen h-auto lg:pt-0 overflow-hidden">
            <video
                className="lg:fixed lg:top-0 lg:left-0 w-full lg:h-full object-cover lg:z-0"
                autoPlay
                loop
                muted
                src="https://cdn.prod.website-files.com/666285153da630124c201ec0%2F66cfcfc01d8bac1df212bee5_Hero%20Video%2015%20MB%20%281%29-transcode.mp4" 
            />
        </div>
    );
};

export default Video;
