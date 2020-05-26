import React from 'react'

export default class Wendy extends React.Component {
    render () {
        let wendy=this.props.characters.Wendy;
        return (
            <div className='app-wrapper'>
               
                <div className='Content'>
                    <div className='photo'>
                        <img src='https://pbs.twimg.com/profile_images/661236347177336832/pr_7Mv6v_400x400.jpg'/>
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
                            <div>{wendy.Name}</div>
                            <div>{wendy.Voice}</div>
                            <div>{wendy.Age}</div>
                            <div>{wendy.Sign}</div>
                            <div>{wendy.Quote}</div>
                        </div> 
                    </div>    
                </div>
                <nav>
                </nav>
            </div>
        )
    }
}