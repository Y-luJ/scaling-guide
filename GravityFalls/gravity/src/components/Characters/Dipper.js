import React from 'react'

export default class Dipper extends React.Component {
    render () {
        let dipper=this.props.characters.Dipper;
        return (
            <div className='app-wrapper'>
                <div className='Content'>
                    <div className='photo'>
                        <img src='https://pbs.twimg.com/profile_images/654859204809904128/Bh1OLoET_400x400.png'/>
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
                            <div>{dipper.Name}</div>
                            <div>{dipper.Voice}</div>
                            <div>{dipper.Age}</div>
                            <div>{dipper.Sign}</div>
                            <div>{dipper.Quote}</div>
                        </div> 
                    </div>    
                </div>
            </div>
        )
    }
}