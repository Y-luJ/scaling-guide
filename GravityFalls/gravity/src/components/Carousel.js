import React from 'react'

export default class Carousel extends React.Component { 
    constructor(props) {
        
        super(props);
        this.slides=this.props.slides;
        this.state= {
            i: 0,
        }
        this.slider=this.slider.bind(this);
        } 
    slider() {
                this.setState({i: this.state.i+1});
                this.slides[this.state.i].className='slide showing';
                this.slides[this.state.i-1].className='slide';
                console.log(this.state.i)
                }
    componentDidMount() {
        this.timer=setInterval(
            () => this.slider(this.slides), 1000
        )
    }
    componentWillMount() {
        setTimeout(
        () => clearInterval(this.timer), 5000
        )
    }
    render () {

        return (
                <ul className='Carousel' id='slides'>
                {this.slides.map(slide => 
                        <li key={this.slides.length--} className={slide.className}><img src={slide.img} alt='' /></li>    
                    )  
                    }
                </ul>  
            );
    }
}


   