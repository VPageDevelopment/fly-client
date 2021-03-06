import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button , Table} from 'semantic-ui-react';

import {getSingleCustomer} from './../../api/Customer';

class ViewSingleCustomerContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:'',
                customer:[]
            }
        }
        this.setCustomerSingleData = this.setCustomerSingleData.bind(this);  
    }

   setCustomerSingleData(id){
    return getSingleCustomer(id).
                then((data)=>{
                    const customer = data;
                    return this.setState({
                        id,
                        data:{customer}
                    });
                })    
          
   }


    componentWillMount(){

        this.setCustomerSingleData(this.props.id);
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Customer
                    </Header>
                    <NavLink to="/user/customer">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to={`/user/customer/edit/${this.props.id}`}>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/customer">
                        <Button content='Delete' color='purple' icon='trash' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <div className="sub-content-wrapper">
                    <Table color="purple" celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Field Name</Table.HeaderCell>
                            <Table.HeaderCell>Field Value</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                {console.log(this.state.data.customer)}
                                <Table.Cell>Customer Name</Table.Cell>
                                <Table.Cell>{this.state.data.customer.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Customer Email</Table.Cell>
                                <Table.Cell>{this.state.data.customer.email}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Customer Address</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.customer.address}, {this.state.data.customer.city}-{this.state.data.customer.zipCode},{this.state.data.customer.state}.{this.state.data.customer.country}.
                                </Table.Cell>
                            </Table.Row>
                            
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ViewSingleCustomerContent;