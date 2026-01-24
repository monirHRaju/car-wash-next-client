import Container from '@/components/shared/Container';
import React from 'react';

const ServiceDetails = async ({params}) => {
    const resParams = await params;
    console.log(resParams);
    return (
        <div className="py-7">
            <Container>
                <h1 className="text-3xl font-bold">Service Details for {resParams.slug}</h1>
            </Container>
        </div>
    );
};

export default ServiceDetails;