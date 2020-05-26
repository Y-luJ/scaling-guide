import React from 'react'

export default class Ford extends React.Component {
    render () {
        let ford=this.props.characters.Ford;
        return (
            
            <div className='app-wrapper'>
                
                <div className='Content'>
                    <div className='photo'>
                        <img src='https://pm1.narvii.com/6132/3ea6dfbb67a97a40a2851902167ba0b367c6286b_hq.jpg'/>
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
                            <div>{ford.Name}</div>
                            <div>{ford.Voice}</div>
                            <div>{ford.Age}</div>
                            <div>{ford.Sign}</div>
                            <div>{ford.Quote}</div>
                        </div> 
                    </div>    
                </div>
                <nav>
                </nav>
            </div>
        )
    }
}