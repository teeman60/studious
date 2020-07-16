import React, { Component } from 'react';

class NewAppointmentForm extends Component {
    
    // state = {  }

    constructor() {
        super()
        this.state = {
            skill_interest: "",
            start_date: "",
            end_date: "",
            max_partners: 1 
        }
    }



    componentDidMount() {
        fetch('http://localhost:3000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                this.state
            )
        })
        .then(res => res.json())
        .then(newApp => {
            console.log(newApp)
        })
    }


    
    render() { 
        return ( 
            <div>
                <form>
                    <select value={null}>
                        {this.props.skills.map(sk => <option>{sk.title}</option>)}
                    </select>
                    <input type="date" placeholder="Start Date" name="start" value={this.state.start} />
                    <input type="date" placeholder="End Date" name="end" value={this.state.end}  />
                    <input type="number" placeholder="Max. Partners" name="partners" value={this.state.partners} />
                    <input type="submt" />
                </form>
            </div>
         );
    }
}





export default NewAppointmentForm;