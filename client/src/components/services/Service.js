import { Link } from 'react-router-dom'

const Service = ({service_type, price, hours, deleteService, id}) => {
    return (
        <>
            <h1>{service_type}</h1>
            <h3>${price}</h3>
            <h4>{hours}</h4>
            <button onClick={() => deleteService(id)}>
                Delete Service
            </button>
            <Link
            to={{
              pathname: `/services/${id}/comments/`,
              state: {ServiceId: id}
            }}
          ><br></br>
            View Comments
          </Link>
        

        </>
    )
}

export default Service