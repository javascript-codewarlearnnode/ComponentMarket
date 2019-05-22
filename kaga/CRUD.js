import React from 'react'
class CRUD extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            wantUpdatesData: '',
            updateToStatesData: '',
        }
    }

    async componentDidMount() {
        try {
            //C 新增使用者資料
            const data = this.state.wantUpdatesData
            try {
                const res = await fetch('http://localhost:5555/cinemaCard', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }),
                })
                const jsonObject = await res.json()
                await this.setState({ updateToStatesData: jsonObject }, () => {
                    alert('資料已成功新增!')
                    //把當初開啟的modal關掉
                    this.handleModalClose()
                })
            } catch (e) {
                console.log(e)
            }

            //R 讀取使用者資料
            const response = await fetch('http://localhost:5555/cinemaCard', {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
            })
            if (!response.ok) throw new Error(response.statusText)
            const jsonObject = await response.json()
            await this.setState({ total: jsonObject.total })
        } catch (e) {
            console.log(e)
        } finally {
        }
    }
    //U D 更新使用者資料
    handleClick = value => async () => {
        try {
            // data是改變後的資料
            const data = { total: this.state.total + value }
            //網址請加上資料分頁的id
            const response = await fetch('http://localhost:5555/cinemaCard', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
            })
            const jsonObject = await response.json()
            console.log(jsonObject)
            // 資料庫改變完再回來拿原本的data改變state進而渲染整個頁面
            await this.setState(data)
        } catch (e) {
            console.log(e)
        } finally {
        }
    }

    render() {
        return
    }
}

export default CRUD
