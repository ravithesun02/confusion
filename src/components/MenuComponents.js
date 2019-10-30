import React, { Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            selecteddish:null
        }
    }
    onDishselect(dish)
    {
        this.setState({selecteddish:dish});
    }

    render(){

        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishselect(dish)}>
                        
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail dishes={this.state.selecteddish} />

                </div>
            </div>
        );
    }
}

export default Menu;