import React from 'react';
import {Card,CardBody,CardImg,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({Item , isLoading,errMess})
{
    if(isLoading){
        return (
            <Loading/>
        );
    }
    else if(errMess){
        return( <h4>{errMess}</h4>);
       
    }
    else
        return(
            <Card>
                <CardImg src={Item.image} alt={Item.name}/>
                <CardBody>
                    <CardTitle>{Item.name}</CardTitle>
                    {Item.designation ? <CardSubtitle>{Item.designation}</CardSubtitle> :null}
                    <CardText>{Item.description}</CardText>
                </CardBody>
            </Card>
        );
}

function Home(props)
{
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard Item={props.dish} isLoading={props.DishesLoading} errMess={props.DishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard Item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard Item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;