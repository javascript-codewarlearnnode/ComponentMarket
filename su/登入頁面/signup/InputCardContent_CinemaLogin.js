import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import InputText_Su from '../inputs/InputText_Su'
//代的Input是純ICON、無Label的
class InputCardContent_CinemaLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      inputH: '48px', //設定所有input高
      inputmsg: [
        {
          id: 'account',
          w: '100%',
          h: '48px',
          iconL: 'fas fa-envelope',
          iconLS: '28px',
          placeholder: '請輸入您的E-mail信箱',
          iconR: '',
          iconRS: '',
        },
        {
          id: 'pwd',
          w: '',
          h: '48px',
          iconL: 'fas fa-key',
          iconLS: '28px',
          placeholder: '請輸入您的密碼',
          iconR: '',
          iconRS: '',
        },
      ],
      usertext: [
        {
          account: '',
          pwd: '',
        },
      ],
    }
  }
  handleInputTextChange = event => {

    let value = event.target.value
    let name = event.target.name
    console.log(event.target.name)
    let newtext = [...this.state.usertext]
    console.log(newtext)

    if (name === 'account' || name === 'pwd') {
      newtext[0][name] = value

      this.setState({ usertext: newtext }, () =>
        console.log(this.state.usertext)
      )
    }
  }
  render() {
    return (
      <>
        <Card
          className="card-box text-center signcard"
          style={{ width: '600px' }}
        >
          <Card.Body className="p-5 signcard">
            {this.state.inputmsg.map(item => (
              <Row className="my-4">
                <Col // 這裡是input的col
                  className="p-0 border border-warning rounded d-flex flex-nowrap align-items-center"
                  style={{ width: `${item.w}` }}
                >
                  <InputText_Su
                    key={item.id}
                    id={item.id}
                    inputWidth={item.w}
                    inputHeight={this.state.inputH}
                    // inputHeight={item.h} //如果想要每個input不一樣高，則在state.inputmsg中分別下高
                    iconLeft={item.iconL}
                    iconLeftSize={item.iconLS}
                    placeholder={item.placeholder}
                    iconRight={item.iconR}
                    iconRightSize={item.iconRS}
                    onChange={this.handleInputTextChange}
                  />
                </Col>
              </Row>
            ))}

            {/* <button type="submit" className="bg-warning border-0 px-5">登入</button> */}
            <Button className="bg-warning border-0 px-5"
              onClick={this.props.handleCinemaLoginClick(this.state.usertext)}>登入</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default InputCardContent_CinemaLogin
