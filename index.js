import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Onsubmit(props){
  if(props.login){
    return(<div>
      <h1>Welcome Mr. {props.name}</h1>
      <h2>Your UID : {props.uid}</h2>
      <h3>Your Gender : {props.gender}</h3>
      <h4>your submission is : </h4>
      <p>{props.essay}</p>
    </div>)
  }
  else{
    return <NameForm/>
  }
}
function Category(props){
  return(
    <select id="gender" value={props.gender} onChange={props.change} >
    <option value="">--please select one--</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="not say">Rather not to say</option>
    </select>
  )
}
function Form(props){
  return(
  <form onSubmit={props.submit}>
    name:<input id="name" type="text" name="name" onChange={props.change}/>
    UID :<input id="uid" type="text" name="UID" onChange={props.change}/>
    Gender : <Category gender={props.gender} change={props.change}/>
    Essay :<textarea id="essay" placeholder={props.essay} onChange={props.change}/>
    Resume : <input type="file"/>
    <input type="submit" value="submit" />
    <h1>Hello Mr. {props.name}</h1>
    <h2>Preview for your Essay </h2>
    <p>{props.essay}</p>
    
  </form>
  )
}
function Login(props){
  return (
    <div className="Login">
            <h1>Welcome to Submission Portal</h1>
            <form onSubmit={props.onSubmit}>
              <label>
                User ID :  <input id="user" type="text" onChange={props.onChange}/> 
                Password : <input id="pass" type="password" onChange={props.onChange}/>
                <input type="submit" value="Submit"/>
              </label>
            </form>
        </div>
  )
}

class NameForm extends Component{
  constructor(props){
    super(props)
    this.state={name:"", uid:"",login:false,essay:"Please write your submission" , gender:"",user:"",pass:""}
    this.handleonsubmit=this.handleonsubmit.bind(this)
    this.handleonchange=this.handleonchange.bind(this)
  }
  
  handleonsubmit(event){
    const u=["1","2","3"]
    const p=["4","5","6"]
    alert("you have submitted the form");
    event.preventDefault();
    if(p[u.indexOf(this.state.user)]===this.state.pass){
      this.state.login===false?
      this.setState(()=>(
        {login:true})):
      this.setState(()=>(
        {login:false}))
    }
    else{
      alert(`Wrong ID or Password\nPlease enter the credential again`)
      event.target.reset()
    }
  }
  handleonchange(event){
    const target=event.target;
      this.setState(()=>({[target.id]:target.value}))
  }

  render(){
      
      if(this.state.login===false){
        return(
          <>
          <Login onChange={this.handleonchange} onSubmit={this.handleonsubmit} user={this.state.user}/>
          </>
        )
      }
      if(this.state.login===true){
        return (
          <div className="submission">
          <h1>Welcome to Submission Portal</h1>
          <h2>Please all the details in the form and write your submission into Essay and submit</h2>
          <Form submit={this.handleonsubmit} change={this.handleonchange} name={this.state.name}  essay={this.state.essay} gender={this.state.gender} />
          </div>
      )
      }
      // currently not working
      else{
        return <Onsubmit login={this.state.login} name={this.state.name} uid={this.state.uid} essay={this.state.essay} gender={this.state.gender} />
      }
  }
}
root.render(<NameForm/>)