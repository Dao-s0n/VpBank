import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import THQ from '../TCTTTHQ';
import TCQDH from '../TCQDH';
import 'antd/dist/antd.css'; // Import CSS của Ant Design
import styles from './Tracuuquyen.scss';
import classNames from 'classnames/bind';
import { Header } from 'antd/lib/layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const { Item } = Menu;
const cx = classNames.bind(styles)

function Tracuuquyen() {
  const [selectLink, setSelectLink] = useState('1');

  return (
    <div>
        <Header className={cx('title')}>
          <FontAwesomeIcon icon={faStar} className={cx('icon-title')}/>
        <h2>Tra cứu thông tin thực hiện quyền</h2>
      </Header>
      <div>
        <Menu mode="horizontal" theme="light" className={styles.sidebar} defaultSelectedKeys={['1']} selectedKeys={[selectLink]}>
          <Item key="1">
            <NavLink
              to={'/TraCuuThongTinThucHienQuyen'}
              activeclassName={styles.selected}
              onClick={() => setSelectLink('1')}
            >
              Tra cứu thông tin thực hiện quyền
            </NavLink>
          </Item>
          <Item key="2">
            <NavLink
              to={'/TraCuuQuyenDuocHuong'}
              activeclassName={styles.selected}
              onClick={() => setSelectLink('2')}
            >
              Tra cứu quyền được hưởng
            </NavLink>
          </Item>
        </Menu>
      </div>
      {selectLink === '1' ? <THQ /> : <TCQDH />}
    </div>
  );
}

export default Tracuuquyen;
