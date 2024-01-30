import {  faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames/bind";
import Button from "../Button";
import Next from "../NextPage";
import styles from './TCTTTHQ.scss'
import { Select, DatePicker, Table } from "antd";

const {Option} = Select
const cx = classNames.bind(styles)


const data = [
  {
    key: '1',
    maDotTHQ: '111222652123',
    loaiTHQ: 'Quyền mua CP phát hành thêm',
    maCK: 'AAT',
    ngayDKCC: '13/03/2024',
    ngayTHQ: '13/03/2024',
    tyLeQuyDoiCK: '1:1',
    tyLeQuyDoiQuyenThanhCK: '5:7',
    tyLeQuyDoiQuyenThanhTien: '0',
    tyLeLaiSuatTraiPhieu: '0',
    soTienSauThue: '0',
    slCKMoi: '0',
    tienQuyDoiLe: '0',
  },
  // Thêm dữ liệu cho các hàng khác nếu cần
];

const columns = [
  {
    title: 'Mã đợt THQ',
    dataIndex: 'maDotTHQ',
    key: 'maDotTHQ',
    className: cx('lookup'),
  },
  {
    title: 'Loại THQ',
    dataIndex: 'loaiTHQ',
    key: 'loaiTHQ',
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
    title: 'Ngày THQ',
    dataIndex: 'ngayTHQ',
    key: 'ngayTHQ',
    className: cx('lookup'),
  },
  {
    title: 'T.lệ quy đổi CK thành quyền',
    dataIndex: 'tyLeQuyDoiCK',
    key: 'tyLeQuyDoiCK',
    className: cx('lookup'),
  },
  {
    title: 'T.lệ quy đổi quyền thành CK',
    dataIndex: 'tyLeQuyDoiQuyenThanhCK',
    key: 'tyLeQuyDoiQuyenThanhCK',
    className: cx('lookup'),
  },
  {
    title: 'T.lệ quy đổi quyền thành tiền',
    dataIndex: 'tyLeQuyDoiQuyenThanhTien',
    key: 'tyLeQuyDoiQuyenThanhTien',
    className: cx('lookup'),
  },
  {
    title: 'T.lệ lãi suất trái phiếu',
    dataIndex: 'tyLeLaiSuatTraiPhieu',
    key: 'tyLeLaiSuatTraiPhieu',
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


function THQ() {

    
  
    return (
      <div>
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

       
        <div className="a">
          <div className={cx('result')}>
            <FontAwesomeIcon icon={faCircle} className="icon-result"/>
            <b className={cx('result-number')}>28 kết quả</b>
            <Table columns={columns} dataSource={data}  pagination={false} />
          </div>
        </div>
        <Next/>

      </div>
    );
  }
    
  


export default THQ;