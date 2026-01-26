import Container from "@/components/shared/Container";
import React from "react";

const getSingleServices = async (id) => {
        const res = await fetch(`https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`)
        const data = await res.json()
        return data
    }

const ServiceDetails = async ({ params }) => {
  const { slug } = await params;
  
  const service = await getSingleServices(slug)
  console.log(service.data)

  return (
    <div className="py-7">
      <Container>
        <h1 className="text-4xl font-bold mb-6">Service Details</h1>
        {/* service details */}
        <div className="">
          
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
