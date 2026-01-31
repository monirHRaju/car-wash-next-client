import Container from '@/components/shared/Container';
import React from 'react';
import ServiceCard from './_components/ServiceCard';
import SearchQuery from './_components/SearchQuery';

const getAllServices = async (searchParams) => {
        const getParams = new URLSearchParams(searchParams).toString();

        console.log('getParams data', getParams)
        const res = await fetch(`https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${getParams}`, {
            cache: 'no-store'
        })
        // await new Promise((resolve) => 
        //     setTimeout(() => {
        //         resolve()
        //     }), 3000
        // )
        const data = await res.json()
        return data
    }

const Services = async ({searchParams}) => {
    
    const sParams = await searchParams
    // console.log('search term',searchTerm)
    
    const servicesList = await getAllServices({...sParams})
 
    return (
        <div className='py-7'>
            <Container>
                <h1 className='text-4xl font-bold mb-6'>Services</h1>
                <SearchQuery/>

                {servicesList?.meta?.total === 0 ? <div className='flex flex-col justify-center items-center h-96 mt-5'>
                        <div className='text-4xl font-semibold'>No Data Found.</div>
                    </div>

               : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                    {
                            servicesList?.data?.map(service => {
                                return <ServiceCard key={service._id} service={service} />
                            })
                        }
                    </div> 
                }
            </Container>
        </div>
    );
};

export default Services;