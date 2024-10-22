import React from 'react';
import { useParams } from 'react-router-dom';

const serviceInfo = {
  design: {
    title: "Web Design",
    description: "Will create beautiful and user-friendly designs for your website."
  },
  development: {
    title: "Web Development",
    description: "Building robust and scalable web applications using the latest technologies."
  }
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = serviceInfo[serviceId];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-details">
      <h2>{service.title}</h2>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetails;