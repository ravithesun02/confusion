import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';

function RenderMenu({dish})
{
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />

                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
            </Link>
        </Card>
        
    );
}



  const Menu=(props)=>{

    if(props.dishes.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }
    else if(props.dishes.errmess){
        return(
            <div className="container">
            <div className="row">
               <h4>{props.dishes.errmess}</h4>
            </div>
        </div>
        );
    }
        const menu=props.dishes.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenu dish={dish} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem> <Link to="/home">Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>Menu</h3>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
        }

export default Menu;