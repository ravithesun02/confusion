import React from 'react';
import {Card,CardBody,CardImg,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import { Loading } from './LoadingComponent';
import {baseURL} from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';

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
        {
           // console.log(JSON.stringify(Item));
            return(
                <FadeTransform in transformProps={{
                    exitTransform:'scale(0.5) translateY(-50%)'
                }}>
               
            <Card>
                <CardImg src={baseURL+Item.image} alt={Item.name}/>
                <CardBody>
                    <CardTitle>{Item.name}</CardTitle>
                    {Item.designation ? <CardSubtitle>{Item.designation}</CardSubtitle> :null}
                    <CardText>{Item.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        );
    }
}

function Home(props)
{
   // console.log(JSON.stringify(props));
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard Item={props.dish} isLoading={props.DishesLoading} errMess={props.DishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard Item={props.promotion} isLoading={props.PromoLoading} errMess={props.PromoErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard Item={props.leader} isLoading={props.LeaderLoading} errMess={props.LeaderErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;