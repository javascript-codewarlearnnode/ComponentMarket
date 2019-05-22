import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import InputText_Su from '../inputs/InputText_Su'
import Captcha from 'captcha-mini'
class InputCardContent_MemberLogin extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.memberdata)
    console.log(this.props.cinemadata)
    console.log(props.handleLoginClick)
    this.state = {
      inputH: '48px', //設定所有input高，這裡有設的話，下面的h就不用設，記得引入元件要抓的state項目要跟著改!
      inputmsg: [//設定Input內容
        {
          id: 'email',
          w: '',
          h: '',
          iconL: 'fas fa-envelope',
          iconLS: '28px',
          placeholder: '請輸入您的E-mail信箱',
          iconR: '',
          iconRS: '',
        },
        {
          id: 'pwd',
          w: '',
          h: '',
          iconL: 'fas fa-key',
          iconLS: '28px',
          placeholder: '請輸入您的密碼',
          iconR: '',
          iconRS: '',
        },
      ],
      usertext: [//儲存使用者輸入的文字
        {
          email: '',
          pwd: '',
          captcha:'',
          captchatext:''
        },
      ],
    }
  }
//頁面生成完，產生驗證碼
  componentDidMount() {
    let captcha = new Captcha({//設定驗證碼樣式，如果不設定則帶入預設值)
      lineWidth: 1,   //线条宽度
      lineNum: 3,       //线条数量
      dotR: 2,          //点的半径
      dotNum: 20,       //点的数量
      preGroundColor: [255, 255],    //前景色区间
      backGroundColor: [0, 120], //背景色区间
      fontSize: 24,           //字体大小
      fontFamily: ['Noto Sans TC', 'Arial'],  //字体类型
      fontStyle: 'stroke',      //字体绘制方法，有fill和stroke
      length: 4    //验证码长度
    });
    //把生成的驗證碼丟到canvas容器中，然後callback把它(參數自訂為r)設定給state
    captcha.draw(document.querySelector('#captcha'), r => {
      let newstate = [...this.state.usertext]
      newstate[0].captcha=r
      console.log(r, '驗證碼');
    });
  }
//輸入框onchange事件
  handleInputTextChange = event => {
    let value = event.target.value //拿到value
    let name = event.target.name //拿到input的name
    console.log(event.target.name)
    let newtext = [...this.state.usertext] //先複製出要改變的state
    console.log(newtext)

    //判斷如果拿到的name屬於state裡面的屬性，就把剛才複製的state的該項目更新，然後再setState回去
    if (name === 'email' || name === 'pwd' || name === 'captcha' || name === 'captchatext') {
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
            <form name="userLogin" method="POST">
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
            </form>
            <Row className="my-4 d-flex justify-content-between">
              <input 
               className="border border-warning rounded font-c-primary"
               style={{background:"#1f242a"}}
               name="captchatext" 
               type="text" 
               placeholder="請輸入右方的驗證碼" 
               onChange={this.handleInputTextChange}
               />
              <canvas 
              width="200" 
              height="48" 
              id="captcha"
              ></canvas>
            </Row>
            <Button
              className="bg-warning border-0 px-5"
              onClick={this.props.handleMemberLoginClick(this.state.usertext)}
            >
              登入
            </Button>

          </Card.Body>
        </Card>
      </>
    )
  }
}

export default InputCardContent_MemberLogin
