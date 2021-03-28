const Service = ({type, price, hours}) => {
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