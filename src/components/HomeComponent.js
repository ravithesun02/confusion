import React from 'react';
import {Card,CardBody,CardImg,CardTitle,CardSubtitle,CardText} from 'reactstrap';

function RenderCard({Item})
{
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
                    <RenderCard Item={props.dish}/>
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