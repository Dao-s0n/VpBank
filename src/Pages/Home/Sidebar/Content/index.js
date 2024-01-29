import {faCircle, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Table} from 'antd'
import classNames from "classnames/bind";
import styles from './Content.scss'
import Next from "../NextPage";
import { Content, Header } from "antd/lib/layout/layout";
import { Select, DatePicker } from "antd";
import Button from "../Button";

const cx = classNames.bind(styles)

function Tracuusodu() {

  const {Option} = Select
  const dataSource = [
    {
      key: '1',
      stk: 'VSSB000018',
      maCK: 'ASA',
      giaThiTruong: 0,
      soDuKhaDung: 0,
      soDuHCCN: 0,
      soDuQuy: 0,
      soDuPToa: 0,
      soDuChoVe: 0,
      soDuChoToan: 0,
      soDuTHQ: 0,
      tongKLSOHOA: 2000000000,
    },
    {
      key: '2',
      stk: 'VSSB000018',
      maCK: 'ASA',
      giaThiTruong: 0,
      soDuKhaDung: 0,
      soDuHCCN: 0,
      soDuQuy: 0,
      soDuPToa: 0,
      soDuChoVe: 0,
      soDuChoToan: 0,
      soDuTHQ: 0,
      tongKLSOHOA: 2000000000,
    },
    // Thêm dữ liệu cho các hàng khác
  ];

  const columns = [
    {
      title: 'STK lưu ký',
      dataIndex: 'stk',
      key: 'stk',
      
    },
    {
      title: 'Mã CK',
      dataIndex: 'maCK',
      key: 'maCK',
      
    },
    {
      title: 'Giá thị trường',
      dataIndex: 'giaThiTruong',
      key: 'giaThiTruong',
      
    },
    {
      title: 'Số dư khả dụng',
      dataIndex: 'soDuKhaDung',
      key: 'soDuKhaDung',
      
    },
    // Thêm cột cho các trường khác
    {
      title: 'Tổng KL sở hữu',
      dataIndex: 'tongKLSOHOA',
      key: 'tongKLSOHOA',
      
    },
    
    {
      title: 'Số dư HCCN',
      dataIndex: 'soDuHCCN',
      key: 'soDuHCCN',
      
    },
    // Thêm cột cho các trường khác
    {
      title: 'Số dư kỳ quý',
      dataIndex: 'soDuQuy',
      key: 'soDuQuy',
      
    },
    
    {
      title: 'Số dư P.toả',
      dataIndex: 'soDuPToa',
      key: 'soDuPToa',
      
    },
    // Thêm cột cho các trường khác
    {
      title: 'Số dư chở về',
      dataIndex: 'soDuChoVe',
      key: 'soDuChoVe',
      
    },
    
    {
      title: 'Số dư chờ T.toán',
      dataIndex: 'soDuChoToan',
      key: 'soDuChoToan',
      
    },
    // Thêm cột cho các trường khác
    {
      title: 'Số dư chờ THQ',
      dataIndex: 'tongKLSOHOA',
      key: 'tongKLSOHOA',
      
    },
    
  ];
  
  
    return (
      <Content >
        <Header className={cx('title')}>
          <FontAwesomeIcon icon={faWallet} className={cx('icon-title')}/>
          <h2>Tra cứu số dư</h2>
        </Header>
        
          <div className={cx('search')}>
          <div className={cx('data-search')}>
        <b>Tài khoản lưu ký chứng khoán</b>
        <div >
          <Select
            className="input-search"
            showSearch
            placeholder="Chọn tài khoản"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="account1">Tài khoản 1</Option>
            <Option value="account2">Tài khoản 2</Option>
            {/* Thêm các Option khác tùy thuộc vào dữ liệu của bạn */}
          </Select>
        </div>
      </div>

      <div className={cx('data-search')}>
        <b>Ngày đăng ký</b>
        <DatePicker />
      </div>

            <Button/>
            


          </div>


          <div className={cx('result')}>
      <FontAwesomeIcon icon={faCircle} className={cx('icon-result')} />
      <b className={cx('result-number')}>28 kết quả</b>
      <Table dataSource={dataSource} columns={columns}
      pagination={false}
        />
    </div>
        <Next/>

      </Content>
    );
  }
    
  


export default Tracuusodu;