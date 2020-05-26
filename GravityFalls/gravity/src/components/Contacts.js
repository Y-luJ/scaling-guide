import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagramSquare, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

export default class Contacts extends React.Component {
    render () {
        return (
            <div className='Contacts'>
                <div className='SocialMedia'>
                <FontAwesomeIcon icon={faTwitter} className='socialIcon' /> 
                <FontAwesomeIcon icon={faInstagramSquare} className='socialIcon' /> 
                <FontAwesomeIcon icon={faFacebookF} className='socialIcon' /> 
                </div>
                <FontAwesomeIcon icon={faEnvelope} className='contactIcon' /> 
                <FontAwesomeIcon icon={faMapMarkerAlt} className='contactIcon' /> Gravity Falls, Oregon, USA
            </div>
        )
    }
}