import React from 'react'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            fname : "",
            lname : "",
            gender :"",
            age: null,
            destination:"",
            diet :{
                issugar : false,
                isvitamine : true,
                iscalci : false
            }
        } 
        this.change = this.change.bind(this)
    }

    change(event) {
        const { name, value, type, checked} = event.target
        type=== "checkbox" ? this.setState( {
            diet : {
            [name] : checked
        }
        }):
        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <main>
            <form>
                <input type="text" placeholder="First_Name" name="fname" value={this.state.fname} onChange={this.change} /> <br /><br />
                <input type="text" placeholder="Last_Name" name="lname" value={this.state.lname} onChange={this.change}/>  <br /><br />
                <input type="text" placeholder="Age" name="age" value={this.state.age } onChange={this.change} / >  <br /><br />
                <label><input type="radio"  name="gender" value="male" onChange={this.change} checked={this.state.gender==="male"} />male</label> <br /><br />
                <label><input type="radio"  name="gender" value="female" onChange={this.change} checked={this.state.gender==="female"} />female</label> <br /><br />

                <select name="destination" onChange={this.change}>
                    <option>-- Select destination -- </option>
                    <option value="Indore"> Indore </option>
                    <option value="Bhopal"> Bhopal </option>
                    <option value="delhi"> Delhi </option>
                    <option value="Bombay"> Bombay </option>
                </select><br/><br/>

                <label><input type="checkbox" name="issugar" onChange={this.change} checked={this.state.diet.issugar}/>Sugar</label> <br />
                <label><input type="checkbox" name="isvitamine" onChange={this.change} checked={this.state.diet.isvitamine}/>Vitamine</label><br />
                <label><input type="checkbox" name="iscalci" onChange={this.change} checked={this.state.diet.iscalci}/>Calcium</label> <br />
                <hr />
            </form>
            <h1> Your Info</h1>

            <p>Name : {this.state.fname} {this.state.lname}</p>
            <p>Age : {this.state.age}</p>
            <p>Gender : {this.state.gender}</p>
            <p>Destination : {this.state.destination}</p>

            <p> Sugar : {this.state.diet.issugar?"YES":"NO"}</p>
            <p>Vitamine : {this.state.diet.isvitamine?"YES":"NO"}</p>
            <p>Calcium : {this.state.diet.iscalci?"YES":"NO"}</p>

            </main>
        )
    }
}
export default Form