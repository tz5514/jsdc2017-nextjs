import styled from 'styled-components'

export default class IndexPage extends React.Component {
  state = {
    active: false
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        <RedTextButton onClick={this.handleClick} active={this.state.active}>Click me</RedTextButton>
      </div>
    )
  }
}

const Button = styled.button`
  color: #FFF;
  background-color: #009688;
  padding: 8px;
  border: 1px solid #DDD;
  border-radius: 10px;
  opacity: ${props => props.active ? '1' : '0.5'};

  &:hover {
    background-color: green;
  }
`

const RedTextButton = styled(Button)`
  color: red;
`