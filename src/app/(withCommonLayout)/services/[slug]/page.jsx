import React from 'react';

const ServiceDetails = async () => {
    const resParams = await useParams;
    console.log(resParams);
    return (
        <div>
            Service Details Page for 
        </div>
    );
};

export default ServiceDetails;