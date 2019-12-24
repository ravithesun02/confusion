import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponents';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';

const mapStateToProps=state=>{
        return{
        dishes:state.dishes,
        comments:state.comments,
        promotions:state.promotions,
        leaders:state.leaders
        }

}


class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const HomePage= () => {
            return(
                <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
                promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
                leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                />
            );
        }
        const DishWithId=({match})=>{

            return(
                <DishDetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId))[0]}
                  comment={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}
                />
            );

        }
        return (
           <div>
            <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/> }/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route path="/about" component={()=> <About leaders={this.props.leaders}/>} />
                    <Redirect to="/home"/>
                </Switch>
            <Footer/>
           </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
