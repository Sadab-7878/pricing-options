import React from 'react';
import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from "react-icons/io5";
const Feature = ({feature}) => {
    return (
        <div>

            <p className='flex items-center gap-2'><IoCheckmarkCircle className='text-green-500'/>{feature}</p>
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired,
}

export default Feature;