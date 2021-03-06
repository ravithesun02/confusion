import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,BreadcrumbItem,Breadcrumb,Button,Modal,ModalHeader,ModalBody,Row,Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm ,Control,Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseURL} from '../shared/baseUrl';
import {Fade,FadeTransform,Stagger} from 'react-animation-components';


const required=(val)=>(val) && val.length;
const minLength=(len)=>(val)=>(val) &&(val.length>=len);
const maxLength=(len)=>(val)=>!(val)||(val.length<=len);

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state={
            isModalOpen:false
        }
        this.handleToggleModal=this.handleToggleModal.bind(this);
        this.handleComments=this.handleComments.bind(this);
    }

    handleToggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleComments(values){
        this.handleToggleModal();
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment);
    }


    render(){
        return(
            <>
                <Button outline onClick={this.handleToggleModal}> <span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.handleToggleModal}>
                <ModalHeader toggle={this.handleToggleModal}>Submit Comment</ModalHeader>
                <ModalBody className="m-4">
                    <LocalForm onSubmit={(values)=>this.handleComments(values)}> 
                        <Row className="form-group">
                            <Label htmlForm="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                           
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text model=".author" id="author" name="author" className="form-control" placeholder="Your Name"
                            validators={{
                                required,minLength:minLength(3),maxLength:maxLength(15)
                            }}
                            />
                            <Errors className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required:'Required ',
                                minLength:'It should be greater than 3',
                                maxLength:'It should be less than 16'
                            }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" row="6" placeholder="Your feedback" className="form-control"
                            validators={{
                                required,minLength:minLength(10)
                            }}
                            />
                            <Errors
                            className="text-danger"
                            model=".comment"
                            show="touched"
                            messages={{
                                required:'Required',
                                minLength:'Comment should be greater than 10 characters'
                            }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
        );
    }
   
}

function RenderComment({dish,postComment,comment,CommentErrMess})
{
    const commentsection = comment.map((comment) => {
        return (
            <Stagger in>
            <div key={comment.id}>
                <Fade in>
            <dl className="row">
                <dt className="col-md-12">{comment.comment}</dt>
                <dd>
                    <span>--{comment.author}</span>
                    <span> , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</span>
                </dd>
            </dl>
            </Fade>
            </div>
            </Stagger>
        );
    });
    if(CommentErrMess)
    {
     return(
         <div className="container">
         <div className="row">
            <h4>{CommentErrMess}</h4>
         </div>
     </div>
     );
    }
    else{
        return(
            <>
            {commentsection}
            <CommentForm dishId={dish.id} postComment={postComment}/>
            </>
        );
    }
}
    
   function RenderDish({dish,comment,postComment,isLoading,errMess,CommentErrMess}) {
      
      
       
        
        if(isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if(errMess){
            return(
                <div className="container">
                <div className="row">
                   <h4>{errMess}</h4>
                </div>
            </div>
            );
        }

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
                            <FadeTransform in transformProps={{
                                exitTransform:'scale(0.5) translateY(-50%)'
                            }}>
                        <Card>
                            <CardBody>
                                <CardImg top src={baseURL+dish.image} alt={dish.name}>
                                </CardImg>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </FadeTransform>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                           <RenderComment dish={dish} postComment={postComment} comment={comment} CommentErrMess={CommentErrMess}/>
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
            <RenderDish dish={props.dish} comment={props.comment} postComment={props.postComment} isLoading={props.isLoading} errMess={props.errMess} CommentErrMess={props.CommentErrMess} />
        );
        }



export default DishDetail;