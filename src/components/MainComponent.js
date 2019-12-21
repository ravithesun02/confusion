import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/DISHES';
import { COMMENT } from '../shared/COMMENT';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            
        };
    }
    render() {
        const HomePage= () => {
            return(
                <Home />
            );
        }
        return (
           <div>
            <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=> <Menu dish={this.state.dishes}/> }/>
                    <Redirect to="/home"/>
                </Switch>
            <Footer/>
           </div>
        );
    }
}

export default Main;
