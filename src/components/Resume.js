import React from 'react';
import Image from 'react-image-resizer';
import resume from '../static/resume.png'

const Resume = () => {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                img src={resume} alt="resume" className="center"
                height={1000}
                width={1000}
            />
        </div>
    );
}
  
export default Resume;