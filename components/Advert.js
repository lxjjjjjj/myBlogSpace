import '../static/style/components/Advert.css'
import { Divider } from 'antd'
const Advert = () => {
    return (
        <div className="ad-div comm-box">
            <Divider >实习经历</Divider>
            <div>
                知乎2019.11-至今：
            <div>
                    使用react-hooks实现移动端开发
            </div>
            </div>
            <div>
                腾讯2019.07-10：
            <div>
                    使用ts+react+webpack开发控制台系统
            </div>
            </div>
            <div>
                小米2019.05-07：
            <div>
                    使用redux开发中台系统
            </div>
            </div>
        </div>
    )
}

export default Advert