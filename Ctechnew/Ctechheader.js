import React from "react";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import "../Styles/Ctechnew.css";


const menu = (
    <Menu
        style={{
            background: "black",
        }}

        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Why Canara tech?
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        About us
                    </a>
                ),

            },

        ]}
    />
);



const menu1 = (
    <Menu
        style={{
            background: "black",
        }}
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Education
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        IT Solutions
                    </a>
                ),

            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        E-Commerce
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Mobile application
                    </a>
                ),

            },
            {
                key: '5',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Web page
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Client Required
                    </a>
                ),

            },

        ]}
    />
);



const menu2 = (
    <Menu
        style={{
            background: "black",
        }}

        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Product 1
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Product 2
                    </a>
                ),

            },

        ]}
    />
);




const menu3 = (
    <Menu
        style={{
            background: "black",
        }}

        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Get in touch
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Career
                    </a>
                ),

            },

        ]}
    />
);




function Ctechheader() {
    return (
        <div className="main-container">
            <div className="canara-tech-lab">CanaraTechLabs</div>

            <div className="header">
            <div className="create-ac">CREATE ACCOUNT</div>
            <div className="login">LOG IN</div>
                


                <Dropdown overlay={menu3}>
                    <a onClick={(e) => e.preventDefault()}>
                        <div className="header-link">CONTACT US</div>
                    </a>
                </Dropdown>


                <Dropdown overlay={menu2}>
                    <a onClick={(e) => e.preventDefault()}>
                        <div className="header-link">PRODUCT</div>
                    </a>
                </Dropdown>


                <Dropdown overlay={menu1}>
                    <a onClick={(e) => e.preventDefault()}>
                        <div className="header-link">SERVICES</div>
                    </a>
                </Dropdown>



                <div className="header-link">BLOG</div>


                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <div className="header-link">ABOUT US</div>
                    </a>
                </Dropdown>
            </div>

            <div className="About-tagline">About Us</div>
            <div className="sub-tagline">Home/About us</div>
        </div>

    );
}
export default Ctechheader;