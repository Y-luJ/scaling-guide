import React from 'react'

export default class Stan extends React.Component {
    render () {
        let stan=this.props.characters.Stan;
        return (
            <div className='app-wrapper'>
                
                <div className='Content'>
                    <div className='photo'>
                        <img src='https://pbs.twimg.com/profile_images/581671879091580928/RXUILDMc_400x400.png'/>
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
                            <div>{stan.Name}</div>
                            <div>{stan.Voice}</div>
                            <div>{stan.Age}</div>
                            <div>{stan.Sign}</div>
                            <div>{stan.Quote}</div>
                        </div> 
                    </div>    
                </div>
                <nav>
                </nav>
            </div>
        )
    }
}