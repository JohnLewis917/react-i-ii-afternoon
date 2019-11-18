import React, {Component}from 'react'
import Card from './Card'
import Data from './Data'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrows'




class CardDeck extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    goToPreviousCard = () => {

    }
    goToNextSlide = () => {

    }


    render() {
        return (

            <div className="cardDeck">
                    
                <Card/>
                <Data/>
                <LeftArrow 
                goToPreviousCard={this.goToPreviousCard}/>
                <RightArrow
                goToNextCard={this.goToNextCard}/>

            </div>
        )
    }

}