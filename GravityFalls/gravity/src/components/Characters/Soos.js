import React from 'react'

export default class Soos extends React.Component {
    render () {
        let soos=this.props.characters.Soos;
        return (
            <div className='app-wrapper'>
               
                <div className='Content'>
                    <div className='photo'>
                        <img src='https://images.8tracks.com/cover/i/012/536/373/S1e11_soos_fez-4610.jpg?rect=0,0,570,570&q=98&fm=jpg&fit=max'/>
                    </div>
                    <div className='Details'>
                        <div className='questionary'>
                            <div>Name</div>
                            <div>Voice</div>
                            <div>Age</div>
                            <div>Sign</div>
                            <div>Quote</div>
                        </div>
                        <div className='info'>
                            <div>{soos.Name}</div>
                            <div>{soos.Voice}</div>
                            <div>{soos.Age}</div>
                            <div>{soos.Sign}</div>
                            <div>{soos.Quote}</div>
                        </div> 
                    </div>    
                </div>
                <nav>
                </nav>
            </div>
        )
    }
}