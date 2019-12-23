import React ,{Component} from 'react';
import {Breadcrumb , BreadcrumbItem,Button,Form,FormGroup,Label,Col,Input,FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contacttype:'Tel.',
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }
        };
        this.handelInputChange=this.handelInputChange.bind(this);
        this.handelSubmit=this.handelSubmit.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }

    handelInputChange(event)
    {
        const target=event.target;
        const value=target.value === "checkbox" ? target.checked : target.value;
        const name=target.name;

       this.setState({
           [name]:value
       });
    }
    handelSubmit(event)
    {
        console.log("current state is "+JSON.stringify(this.state));
        alert("current state is "+JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true},
        });
    }

    validate(firstname,lastname,telnum,email)
    {
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:''
        };
        if(this.state.touched.firstname &&(firstname.length<3 || firstname.length>10))
        errors.firstname='Enter appropriate First Name';
        if(this.state.touched.lastname &&(lastname.length<3 || lastname.length>10))
        errors.lastname='Enter appropriate Last Name';

        const reg=/^\d+$/;

        if(this.state.touched.telnum && !reg.test(telnum))
        errors.telnum='Enter appropriate Phone number';
        if(this.state.touched.email && email.split('').filter(x=>x==='@').length!=1)
        errors.email='Enter appropriate Email id';

       // console.log(errors);
        return errors;

    }

    render(){

        const error=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);

        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem> <Link to="/home">Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h4>Location Information</h4>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <address>
                        121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Submit us Your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handelSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={9}>
                                        <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handelInputChange} valid={error.firstname===''} invalid={error.firstname!==''} onBlur={this.handleBlur('firstname')}/>
                                        <FormFeedback> {error.firstname} </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={9}>
                                        <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handelInputChange} valid={error.lastname===''} invalid={error.lastname!==''} onBlur={this.handleBlur('lastname')}/>
                                        <FormFeedback> {error.lastname} </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                                    <Col md={9}>
                                        <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number" value={this.state.telnum} onChange={this.handelInputChange} valid={error.telnum===''} invalid={error.telnum!==''} onBlur={this.handleBlur('telnum')}/>
                                        <FormFeedback> {error.telnum} </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={9}>
                                        <Input type="email" id="email" name="email" placeholder="Email id" value={this.state.email} onChange={this.handelInputChange} valid={error.email===''} invalid={error.email!==''} onBlur={this.handleBlur('email')}/>
                                        <FormFeedback> {error.email} </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:5 ,offset:2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handelInputChange}/>{' '}
                                                <strong>May we contact you ?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3 ,offset:1}}>
                                        <Input type="select" name="contacttype" value={this.state.contacttype} onChange={this.handelInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={9}>
                                        <Input type="textarea" id="message" name="message" placeholder="Your Feedback" rows="12" value={this.state.message} onChange={this.handelInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:10,offset:2}}>
                                        <Button type="submit" color="primary">Send Feedback</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
        );
    }
   
    
}

export  default Contact;