import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/DISHES';
import { COMMENT } from '../shared/COMMENT';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selecteddish:null,
            comments:COMMENT
        };
    }
    onDishselect(dishId) {
        this.setState({ selecteddish: dishId });
        console.log(this.state.selecteddish);
    }
    render() {
        return (
           <div>
               <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishselect(dishId)}/>
                <DishDetail dish={
                    this.state.dishes.filter((dish) => dish.id === this.state.selecteddish)[0]} 
                    comments={this.state.comments}/>
                    <Footer/>
            </div>
        );
    }
}

export default Main;
