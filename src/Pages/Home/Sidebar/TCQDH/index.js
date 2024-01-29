import {  faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames/bind";
import Button from "../Button";
import Next from "../NextPage";
import styles from './TCQDH.scss'
import { Select, DatePicker, Table } from "antd";

const {Option} = Select


const cx = classNames.bind(styles)

const data = [
  {
    key: '1',
    taiKhoan: 'VSSFCS5215',
    tenKhachHang: 'Quỹ Hoàng Anh',
    maCK: 'AAT',
    ngayDKCC: '13/03/2024',
    loaiTHQ: 'Quyền mua CP phát hành thêm',
    soTKTien: '24200000000',
    soTKChotQuyen: '0',
    soTien: '0',
    soTienSauThue: '0',
    slCKMoi: '0',
    tienQuyDoiLe: '0',
  },
  // Thêm dữ liệu cho các hàng khác nếu cần
];

const columns = [
  {
    title: 'Tài khoản lưu ký chứng khoán',
    dataIndex: 'taiKhoan',
    key: 'taiKhoan',
    className: cx('lookup'),
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'tenKhachHang',
    key: 'tenKhachHang',
    className: cx('lookup'),
  },
  {
    title: 'Mã CK',
    dataIndex: 'maCK',
    key: 'maCK',
    className: cx('lookup'),
  },
  {
    title: 'Ngày DKCC',
    dataIndex: 'ngayDKCC',
    key: 'ngayDKCC',
    className: cx('lookup'),
  },
  {
    title: 'Loại THQ',
    dataIndex: 'loaiTHQ',
    key: 'loaiTHQ',
    className: cx('lookup'),
  },
  {
    title: 'Số TK tiền',
    dataIndex: 'soTKTien',
    key: 'soTKTien',
    className: cx('lookup'),
  },
  {
    title: 'Số TK chốt quyền',
    dataIndex: 'soTKChotQuyen',
    key: 'soTKChotQuyen',
    className: cx('lookup'),
  },
  {
    title: 'Số tiền',
    dataIndex: 'soTien',
    key: 'soTien',
    className: cx('lookup'),
  },
  {
    title: 'Số tiền sau thuế',
    dataIndex: 'soTienSauThue',
    key: 'soTienSauThue',
    className: cx('lookup'),
  },
  {
    title: 'SL CK mới',
    dataIndex: 'slCKMoi',
    key: 'slCKMoi',
    className: cx('lookup'),
  },
  {
    title: 'Tiền quy đổi lẻ',
    dataIndex: 'tienQuyDoiLe',
    key: 'tienQuyDoiLe',
    className: cx('lookup'),
  },
];



function TCQDH() {

    
  
    return (
      <div >
        
          
        
        <div className={cx('search')}>
        
          
        
        <div className={cx('data-search')}>
        <b>Mã CK</b>
        <div className={cx('input-search')}>
          <Select
          className="input-search"
            showSearch
            placeholder="Chọn mã CK"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1">Tất cả</Option>
            <Option value="2">Tài khoản 2</Option>
            {/* Thêm các tùy chọn khác nếu cần */}
          </Select>
        </div>
      </div>

      <div className={cx('data-search')}>
        <b>Ngày DKCC</b>
        <DatePicker />
      </div>

      <div className={cx('data-search')}>
        <b>Loại THQ</b>
        <div className={cx('input-search')}>
          <Select
          className="input-search"
            showSearch
            placeholder="Chọn loại THQ"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1">Tất cả</Option>
            <Option value="2">Tài khoản 2</Option>
            {/* Thêm các tùy chọn khác nếu cần */}
          </Select>
        </div>
            
            


          </div>
          <Button/>
          </div>


       
        <div className={cx('result')}>
          <FontAwesomeIcon icon={faCircle} className="icon-result"/>
          <b className={cx('result-number')}>28 kết quả</b>
          <Table columns={columns} dataSource={data}  pagination={false}/>
        </div>
        <Next/>

      </div>
    );
  }
    
  


export default TCQDH;