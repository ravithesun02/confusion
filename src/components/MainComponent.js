import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishselect(dishId)}/>
                <DishDetail dish={
                    this.state.dishes.filter((dish) => dish.id === this.state.selecteddish)[0]} 
                    comments={this.state.comments}/>
            </div>
        );
    }
}

export default Main;
