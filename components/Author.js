
import {Avatar,Divider} from 'antd'
import '../static/style/components/Author.css'
const Author =()=>{
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src={'https://wx3.sinaimg.cn/mw690/006Ul03Sly1gbbhm4knc0j31o0280e81.jpg'} /></div>
            <div className="author-introduction">
               技术和才艺于一身的程序媛，专注于WEB和移动前端开发。
                <Divider >社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author