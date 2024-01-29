import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css'; // Import Ant Design CSS
import styles from './Sidebar.scss';

const { Item } = Menu;

function Sidebar() {
  return (
    <Menu mode="horizontal" theme="light" className={styles.sidebar} defaultSelectedKeys={['1']}>
      <Item key="1">
        <NavLink to={'/TracuuSoDu'} activeClassName={styles.selected}>
          Tra cứu số dư
        </NavLink>
      </Item>
      <Item key="2">
        <NavLink to={'/TraCuuSoLenh'} activeClassName={styles.selected}>
          Tra cứu sổ lệnh
        </NavLink>
      </Item>
      <Item key="3">
        <NavLink to={'/TraCuuQuyen'} activeClassName={styles.selected}>
          Tra cứu quyền
        </NavLink>
      </Item>
      <Item key="4">
        <NavLink to={'/QuanLy'} activeClassName={styles.selected}>
          Quản lý
        </NavLink>
      </Item>
      <Item key="5">
        <NavLink to={'/DuyetGiaoDich'} activeClassName={styles.selected}>
          Duyệt giao dịch
        </NavLink>
      </Item>
      <Item key="6">
        <NavLink to={'/GiaoDich'} activeClassName={styles.selected}>
          Giao dịch
        </NavLink>
      </Item>
    </Menu>
  );
}

export default Sidebar;
