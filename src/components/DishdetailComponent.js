import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




    
   function RenderDish({dish,comments}) {
        const commentsection = comments.map((comment) => {
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
   const DishDetail=(props)=>{
        return(
            <RenderDish dish={props.dish} comments={props.comments} />
        );
        }



export default DishDetail;