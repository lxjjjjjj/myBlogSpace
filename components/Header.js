import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import '../static/style/components/Header.css'
import { Row, Col, Menu, Icon } from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
    const [navArray, setNavArray] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()


    }, [])
    //跳转到列表页
    const handleClick = (e) => {
        console.log(e.key)

        if (e.key == 0) {
            Router.push('/index')
        } else {
            Router.push('/list?id=' + e.key)
        }


    }
    console.log(navArray)
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={13} xl={11}>
                    <span className="header-logo">
                        <Link href={{ pathname: '/index' }}>
                            <a> 无比快乐的嘻嘻嘻嘻嘻嘻哈哈哈</a>
                        </Link>
                    </span>
                    <span className="header-txt">前端小白的博客</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                    <Menu
                        mode="horizontal"
                        onClick={handleClick}
                    >
                        <Menu.Item key="0">
                            <Icon type="home" />
                            博客首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <Icon type={item.icon} />
                                        {item.typeName} 
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header