const React = require('react')
const { default: UserInfo } = require('./UserInfo')


class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
        {/* <UserInfo upload={this.handleChange} /> */}
      </div>
    );
  }
}
module.exports = Upload