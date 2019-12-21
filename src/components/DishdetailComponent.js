import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';




    
   function RenderDish({dish,comment}) {
        const commentsection = comment.map((comment) => {
            return (
                <div key={comment.id}>
                <dl className="row">
                    <dt className="col-md-12">{comment.comment}</dt>
                    <dd>
                        <span>{comment.author}</span>
                        <span>{comment.date}</span>
                    </dd>
                </dl>
                </div>
            );
        });
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem> <Link to="/menu">Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                    </div>
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
            <RenderDish dish={props.dish} comment={props.comment} />
        );
        }



export default DishDetail;