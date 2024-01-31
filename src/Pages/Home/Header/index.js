
 import Sidebar from "../Sidebar";
 import TippyAdmin from "@tippyjs/react";
 import {  Layout} from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import {  forwardRef } from "react";
import 'antd/dist/antd.css'

 function HeaderComponent() {
        
    const SelectAdmin = forwardRef((props,ref) => (
        <div className='modul-admin' tabIndex='-1' ref={ref}{...props}>
            <div className='tile-modul'>
                <FontAwesomeIcon icon={faUser}/>
                <p>Thông tin</p>
            </div>
            <div className='tile-modul'>
            <FontAwesomeIcon icon={faQrcode}/>
                <p>Nhận Active code</p>
            </div>
            <div className='tile-modul'>
                <FontAwesomeIcon icon={faRightFromBracket}/>
                <p>Đăng xuất</p>
            </div>
       
    </div>
      ));
      const { Header,} = Layout;
    return <Layout>

        <Header>
        <div className="logo-header" >
            <img src='logo2-02.jpg' alt=""/>
            </div>
        <Sidebar />
        <div className="infor">
            <div className="language">
            <img src="Flag_of_Vietnam.svg.png" alt=""/>
            <p>Việt Nam</p>
            </div>
            

        </div>
        <TippyAdmin 
                interactive
                trigger="click"
                    content={<SelectAdmin/>}>
                        <div className="list-modul">
                            <div className='admin-name'>
                                <p>Quản trị viên</p>
                                <h5>Admin</h5>
                            </div>
                            <div className='avatar'>
                                <img src="chuM-1463649095_1463649113.jpg" alt=""/>
                            </div>
                        </div>
                    </TippyAdmin>
      </Header>
                    
           
           
    
        
    
    </Layout>
 }
export default HeaderComponent;