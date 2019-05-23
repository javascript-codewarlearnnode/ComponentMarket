import React from 'react'
import { Link } from 'react-router-dom'
const CardKagaBox = props => {
    console.log(props)
    return (
        <>
            <Link
                key={props.id}
                className="col-3 flex-column aCardText position-relative"
                to={props.link}
            >
                {/* 外框＋底圖 */}
                <div
                    className="card text-center flex-column border-0 cardAreaBgKaga"
                    style={{
                        backgroundImage: `url(${props.img})`,
                    }}
                >
                    {/* 上方淺色遮罩 */}
                    <div className="pr-1 cardTopMaskKaga" />

                    {/* 下方深色遮罩 */}
                    <div className="h-30 d-flex flex-column justify-content-center cardBottomMaskKaga">
                        {/* 下方遮罩內文字 */}
                        <h6 className="card-title mb-1">{props.subtitle}</h6>
                        <h4 className="card-title m-0">{props.title}</h4>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default CardKagaBox
