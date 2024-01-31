import {  faArrowDownUpAcrossLine} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import GDDK from "../GDDK";
import GDXN from "../GDXN";
import GDG from "../GDG";
import GDR from "../GDR";
import { Header } from "antd/lib/layout/layout";
import { Menu } from 'antd';
import styles from 'src/components/GlobalStyle'

const { Item } = Menu;


function GiaoDich() {

  const [selectLink, setSelectLink] = useState('1');


    return (
      <div >
        <Header className='title'>
          <FontAwesomeIcon icon={faArrowDownUpAcrossLine} className='icon-title'/>
          <h2>ĐK đặt mua CK phát hành thêm</h2>
        </Header>
        <Menu mode="horizontal" theme="light" className={styles.sidebar} defaultSelectedKeys={['1']}>
      <Item key="1">
        <NavLink to={'/DKdatmuaCKthem'} activeclassname={styles.selected} onClick={() => setSelectLink('1')}>
          DK đặt mua CK phát hành
        </NavLink>
      </Item>
      <Item key="2">
        <NavLink to={'/Xacnhanlenh'} activeclassname={styles.selected} onClick={() => setSelectLink('2')}>
          Import Xác nhận lệnh
        </NavLink>
      </Item>
      <Item key="3">
        <NavLink to={'/Kiguichungkhoan'} activeclassname={styles.selected} onClick={() => setSelectLink('3')}>
          Yêu cầu ký gửi chứng khoán
        </NavLink>
      </Item>
      <Item key="4">
        <NavLink to={'/Rutchungkhoan'} activeclassname={styles.selected} onClick={() => setSelectLink('4')}>
          Yêu cầu rút chứng khoán
        </NavLink>
      </Item>
      
    </Menu>
            
    {selectLink === '1' ? <GDDK/> : selectLink === '2' ? <GDXN/> : selectLink === '3' ? <GDG/> : <GDR/>}

       
          

      </div>
    );
  }
    
  


export default GiaoDich;