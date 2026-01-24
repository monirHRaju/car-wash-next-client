import Container from '@/components/shared/Container';
import React from 'react';
import ServiceCard from './_components/ServiceCard';

const getAllServices = async () => {
        const res = await fetch('https://car-washing-system-cleanify-server.vercel.app/api/v1/services')
        const data = await res.json()
        return data
    }

const Services = async () => {
    
    const services = await getAllServices()

    // console.log(services?.data)
    
    return (
        <div className='py-7'>
            <Container>
                <h1 className='text-4xl font-bold mb-6'>Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        services?.data?.map(service => {
                            return <ServiceCard key={service._id} service={service} />
                        })
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;