import { Component } from 'react';
import axios from 'axios';
import Service from './Service';
class Services extends Component {
    state = { services: [] }
    componentDidMount () {
        const { handymenId } = this.props.location.state
        axios.get(`/api/handymen/${handymenId}/services`)
            .then( res => {
                this.setState({ services: res.data })
            })
            .catch( err => console.log(err))
    }
    addService = ( service ) => {
        const { handymenId } = this.props
        axios.post(`/api/handymen/${handymenId}/services`, { service })
            .then( res => {
                const { services } = this.state
                this.setState({ services: [...services, res.data ]})
            })
            .catch( err => console.log(err))
    } 
    deleteService = (id) => {
        const {handymenId} = this.props
        axios.delete(`/api/handymen/${handymenId}/services/${id}`)
            .then( res => {
                const { services } = this.state
                this.setState({ services: services.filter( s => s.id !== id)})
            })
            .catch( err => console.log(err))
    }
    render() {
        const { services } = this.state
        const { handymenId } = this.props.location.state
        return (
            <>
            { services.map( s =>
                <Service key={s.id} {...s} deleteService={this.deleteService} />
                )}
            </>
        )
    }
}
export default Services