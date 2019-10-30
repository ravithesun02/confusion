import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import {COMMENT} from '../shared/COMMENT';

class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state={comments:COMMENT}
    }
    
    renderDish(dish) {
        const commentsection = this.state.comments.map((comment) => {
            return (
                <div key={comment.id}>
                <dl className="row">
                    <dt className="col-md-12">{comment.description}</dt>
                    <dd>
                        <span>{comment.author}</span>
                        <span>{comment.time}</span>
                    </dd>
                </dl>
                </div>
            );
        });
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardImg top src={dish.image} alt={dish.name}>
                                </CardImg>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {commentsection}
                        </div>

                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render(){
        return(
            this.renderDish(this.props.dishes)
        );
    }

}

export default DishDetail;