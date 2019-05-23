import React from 'react'

// 父層傳入參數
// key={item.cinemaid}
// img={'http://localhost:3000/images/' + item.cinemaImg}
// address={item.cinemaAddress}
// phone={item.cinemaPhone}
// taxid={item.cinemaTaxid}
// web={item.cinemaWeb}
// email={item.cinemaEmail}
// awesome={item.cinemaAwesome}
// pageviews={item.cinemaPageViews}
// collection={item.cinemaCollection}
// awesomeClick={this.awesomeClick} ---f
// pageviewsClick={this.pageviewsClick} ---f
// collectionClick={this.collectioClick} ---f

class CardLargeKaga extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            awesome: props.awesome,
            pageviews: props.pageviews,
            collection: props.collection,
        }
    }
    componentDidMount() {
        // this.setState({ viewStar: nowstar })
    }
    awesomeCardClick = () => {}
    pageviewsCardClick = () => {}
    collectionCardClick = () => {}
    render() {
        return (
            <>
                <div className="col-10 my-3">
                    <div
                        className="card"
                        style={{
                            height: '450px',
                            overflow: 'hidden',
                            background: '#28333d',
                            boxShadow: '0 0 2px #000000',
                        }}
                    >
                        <div className="row no-gutters h-100">
                            <div className="col-md-6">
                                <img
                                    src={this.props.img}
                                    className="card-img h-100"
                                    alt="..."
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="col-md-6 d-flex flex-column h-100">
                                {/* 上方區塊 */}
                                <div className="d-flex h-100 my-2">
                                    <div className="col-3 d-flex flex-column justify-content-around ml-4 px-0">
                                        <h4 className="mr-3">地址</h4>
                                        <h4 className="mr-3">電話</h4>
                                        <h4 className="mr-3">統一編號</h4>
                                        <h4 className="mr-3">官方網站</h4>
                                        <h4 className="mr-3">電子信箱</h4>
                                    </div>
                                    <div className="col-9 d-flex flex-column justify-content-around pl-0">
                                        {this.props.address ? (
                                            <h5>{this.props.address}</h5>
                                        ) : (
                                            <h5>暫無資料</h5>
                                        )}
                                        {this.props.phone ? (
                                            <h5>{this.props.phone}</h5>
                                        ) : (
                                            <h5>暫無資料</h5>
                                        )}
                                        {this.props.taxid ? (
                                            <h5>{this.props.taxid}</h5>
                                        ) : (
                                            <h5>暫無資料</h5>
                                        )}
                                        {this.props.web ? (
                                            <a
                                                href={this.props.web}
                                                target="_blank"
                                            >
                                                <i
                                                    className="fas fa-external-link-square-alt mb-2"
                                                    style={{ fontSize: '25px' }}
                                                />
                                            </a>
                                        ) : (
                                            <h5>暫無資料</h5>
                                        )}
                                        {this.props.email ? (
                                            <h5>{this.props.email}</h5>
                                        ) : (
                                            <h5>暫無資料</h5>
                                        )}
                                    </div>
                                </div>
                                {/* 下方區塊 */}
                                <div
                                    className="d-flex mb-4 mt-3"
                                    style={{ fontSize: '25px' }}
                                >
                                    <div
                                        className="mx-4"
                                        onClick={this.awesomeCardClick}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fas fa-thumbs-up mr-2" />
                                        {this.props.awesome}
                                    </div>
                                    <div
                                        className="mx-5"
                                        onClick={this.pageviewsCardClick}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fas fa-eye mr-2" />
                                        {this.props.pageviews}
                                    </div>
                                    <div
                                        className="ml-4"
                                        onClick={this.collectionCardClick}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fas fa-bookmark mr-2" />
                                        {this.props.collection}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default CardLargeKaga
