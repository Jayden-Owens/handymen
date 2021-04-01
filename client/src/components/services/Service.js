import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react';

const Service = ({service_type, price, hours, deleteService, id}) => {
    return (
        <>
            <h1>{service_type}</h1>
            <h3>${price}</h3>
            <h4>{hours}</h4>
            <Button onClick={() => deleteService(id)}>
                Delete Service
            </Button>

            <Button>
            <Link
            to={{
              pathname: `/services/${id}/comments`,
              state: {serviceId: id, service_type}
            }}
          >
            View Reviews
          </Link>
          </Button>

        </>
    )
}

export default Service