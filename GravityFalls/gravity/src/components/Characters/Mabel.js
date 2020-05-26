import React from 'react'

export default class Mabel extends React.Component {
    render () {
        let mabel=this.props.characters.Mabel;
        return (
            <div className='app-wrapper'>
               
                <div className='Content'>
                    <div className='photo'>
                        <img src='https://www.meme-arsenal.com/memes/b2b9f39229a3be706037f35f655396d5.jpg'/>
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
                            <div>{mabel.Name}</div>
                            <div>{mabel.Voice}</div>
                            <div>{mabel.Age}</div>
                            <div>{mabel.Sign}</div>
                            <div>{mabel.Quote}</div>
                        </div> 
                    </div>    
                </div>
                <nav>
                </nav>
            </div>
        )
    }
}