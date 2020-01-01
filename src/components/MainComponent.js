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
import {postComment,fetchDishes,fetchComments,fetchLeaders,fetchPromos} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapStateToProps=state=>{
        return{
        dishes:state.dishes,
        comments:state.comments,
        promotions:state.promotions,
        leaders:state.leaders
        }

}
const mapDispatchToProps=(dispatch)=>({
    postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)),
    fetchDishes:()=>{dispatch(fetchDishes())},
    resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
    fetchComments:()=>{dispatch(fetchComments())},
    fetchLeaders:()=>{dispatch(fetchLeaders())},
    fetchPromos:()=>{dispatch(fetchPromos())}
});




class Main extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchLeaders();
        this.props.fetchPromos();
    }

    render() {
        const HomePage= () => {
            return(
                <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]} 
                DishesLoading={this.props.dishes.isLoading}
                DishesErrMess={this.props.dishes.errmess}
                promotion={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
                PromoLoading={this.props.promotions.isLoading}
                PromoErrMess={this.props.promotions.errmess}
                leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
                LeaderLoading={this.props.leaders.isLoading}
                LeaderErrMess={this.props.leaders.errmess}
                />
            );
        }
        const DishWithId=({match})=>{

            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errmess}
                  comment={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}
                  postComment={this.props.postComment}
                  CommentErrMess={this.props.comments.errmess}
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
                    <Route exact path="/contact" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                    <Route path="/about" component={()=> <About leaders={this.props.leaders}/>} />
                    <Redirect to="/home"/>
                </Switch>
            <Footer/>
           </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
