import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import InputWithLabel_Su from '../inputs/InputWithLabel_Su'
import Checkbox_Su from '../inputs/Checkbox_Su'
import InputRadio_Su from '../inputs/InputRadio_Su'
class InputCardContent_CinemaSignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      inputH: '48px', //設定所有input高
      inputmsg: [],
      chooseInputmsg: [],
      cinemadatas: [],
      newdatas: [
        {
          sid: +new Date(),
          name: '',
          id: '',
          tel: '',
          city: '台北市',
          'city-area': '',
          address: '',
          email: '',
          'second-email': '',
          'place-type': '',
          website: '',
          logo: '',
          'hero-img': '',
        },
      ],
    }
  }
  async componentDidMount() {
    try {
      //取得欄位資訊
      //fetch:json-server連線的位址/json中的項目/該項目中id
      const response = await fetch(
        'http://localhost:5555/cinema-sign-inputmsg',
        {
          method: 'GET', //使用GET方法獲取資訊，因為是取得資訊，故不須加body
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText) //如果發生錯誤，丟出錯誤訊息
      const jsonObject = await response.json()
      // console.log('/' + jsonObject[6].selectOptions.map(item => item.name))
      const data = await jsonObject
      await this.setState({ inputmsg: data })
      // await console.log(data)
    } catch (e) {
      //抓到錯誤訊息，以及接下來要做的錯誤處理
      console.log(e)
    }
    try {
      //取得選填欄位資訊
      //fetch:json-server連線的位址/json中的項目/該項目中id
      const response = await fetch(
        'http://localhost:5555/cinema-sign-choose-inputmsg',
        {
          method: 'GET', //使用GET方法獲取資訊，因為是取得資訊，故不須加body
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText) //如果發生錯誤，丟出錯誤訊息
      const jsonObject = await response.json()
      const choosedata = await jsonObject
      await this.setState({ chooseInputmsg: choosedata })
      // await console.log(choosedata)
    } catch (e) {
      //抓到錯誤訊息，以及接下來要做的錯誤處理
      console.log(e)
    }
    try {
      //取得所有戲院資料
      //fetch:json-server連線的位址/json中的項目/該項目中id
      const response = await fetch('http://localhost:5555/cinema', {
        method: 'GET', //使用GET方法獲取資訊，因為是取得資訊，故不須加body
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      if (!response.ok) throw new Error(response.statusText) //如果發生錯誤，丟出錯誤訊息
      const jsonObject = await response.json()
      const cinemadatas = await jsonObject
      await this.setState({ cinemadatas: cinemadatas })
      // await console.log(cinemadatas)
    } catch (e) {
      //抓到錯誤訊息，以及接下來要做的錯誤處理
      console.log(e)
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
              <InputWithLabel_Su
                key={item.id}
                id={item.id}
                inputWidth={item.w}
                inputHeight={this.state.inputH}
                // inputHeight={item.h} //如果想要每個input不一樣高，則在state.inputmsg中分別下高
                inputType={item.inputType}
                inputLabel={item.inputLabel}
                iconLeft={item.iconL}
                iconLeftSize={item.iconLS}
                placeholder={item.placeholder}
                iconRight={item.iconR}
                iconRightSize={item.iconRS}
                selectOptions={item.selectOptions}
              />
            ))}
            <Row>
              <Col>
                <hr style={{ backgroundColor: '#D4D1CC' }} />
              </Col>
              <Col>以下為選填項目</Col>
              <Col>
                <hr style={{ backgroundColor: '#D4D1CC' }} />
              </Col>
            </Row>
            {this.state.chooseInputmsg.map(item => (
              <InputWithLabel_Su
                key={item.id}
                id={item.id}
                inputWidth={item.w}
                inputHeight={this.state.inputH}
                // inputHeight={item.h} //如果想要每個input不一樣高，則在state.inputmsg中分別下高
                inputType={item.inputType}
                inputLabel={item.inputLabel}
                iconLeft={item.iconL}
                iconLeftSize={item.iconLS}
                placeholder={item.placeholder}
                iconRight={item.iconR}
                iconRightSize={item.iconRS}
                selectOptions={item.selectOptions}
              />
            ))}
            <Checkbox_Su
              id="agree-cinema-rules"
              text="我已了解並同意.Movieee戲院服務條款"
              checkRemind="請確認同意服務條款"
            />
            <Button className="bg-warning border-0 px-5">確認送出</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default InputCardContent_CinemaSignUp
