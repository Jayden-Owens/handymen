const Service = ({type, price, hours, deleteService, id}) => {
    return (
        <>
            <h1>{type}</h1>
            <h3>${price}</h3>
            <h4>{hours}</h4>
            <button onClick={() => deleteService(id)}>
                Delete Service
            </button>

        </>
    )
}

export default Service