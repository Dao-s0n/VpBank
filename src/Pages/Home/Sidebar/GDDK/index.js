import {  faCircle, faEye, faPen, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classNames from "classnames/bind";
import Button from "../Button";
import Next from "../NextPage";
import styles from './GDDK.scss'
import { Input, Select,DatePicker,Space,Table } from "antd";

const {Option} = Select
const cx = classNames.bind(styles)


  

function GDDK() {

    const [modavisible, setModavisible] = useState(false)

    const handleFunctionClick = (type) => {
        setModavisible(type);
      }
        const handleClick = (title) => {
            if(title==='Sửa'){
              setSelectedTitle(false)
              setSelectTitle(true)
              setSelectTitleDelete(false)
            }else if(title==='Thêm'){
                setSelectedTitle(true)
              setSelectTitle(false)
              setSelectTitleDelete(false)
            }else if (title==='Xoá'){
                setSelectedTitle(false)
                setSelectTitle(false)
                setSelectTitleDelete(true)
            }
      
      }
      
      const [selectedTitle, setSelectedTitle] = useState(true);
      const [selectTitle, setSelectTitle] = useState(false)
      const [selectTitleDelete, setSelectTitleDelete] = useState(false)
        
      
    const columns = [
        {
          title: 'Tài khoản lưu ký chứng khoán',
          dataIndex: 'account',
          key: 'account',
          className: 'lookup-res',
        },
        {
          title: 'Số chứng từ',
          dataIndex: 'documentNumber',
          key: 'documentNumber',
          className: 'lookup-res',
        },
        {
          title: 'Mã CK',
          dataIndex: 'stockCode',
          key: 'stockCode',
          className: 'lookup-res',
        },
        {
          title: 'Ngày giao dịch',
          dataIndex: 'transactionDate',
          key: 'transactionDate',
          className: 'lookup-res',
        },
        {
          title: 'SL quyền sở hữu',
          dataIndex: 'ownershipQuantity',
          key: 'ownershipQuantity',
          className: 'lookup-res',
        },
        {
          title: 'SL CK đăng kí mua',
          dataIndex: 'registeredQuantity',
          key: 'registeredQuantity',
          className: 'lookup-res',
        },
        {
          title: 'Số tiền phải nộp',
          dataIndex: 'amountToPay',
          key: 'amountToPay',
          className: 'lookup-res',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status',
          render: (text) => (
            <Space className={cx('icon-lookup', { 'wait': text === 'Chờ duyệt', 'refuse': text === 'Từ chối' })}>
              <FontAwesomeIcon icon={faCircle} />
              {text}
            </Space>
          ),
          className: 'lookup-res',
        },
        {
          title: 'Chức năng',
          dataIndex: 'functions',
          key: 'functions',
          render: () => (
            <div className={cx('icon-funtion')}>
                            <FontAwesomeIcon icon={faEye} 
              onClick={() => {handleFunctionClick('Chi tiết');handleClick('Thêm')}}
              />
                            <FontAwesomeIcon icon={faPen}
              onClick={() => {handleFunctionClick('Cập nhật');handleClick('Sửa')}}
              />
                            <FontAwesomeIcon icon={faTrashCan} className={cx('delete')}
              onClick={() => {handleFunctionClick('Xoá');handleClick('Xoá')}}
              />
    
                        </div>
          ),
          className: 'lookup-res',
        },
      ];
      
      const data = [
        {
          key: '1',
          account: 'VPBF8522222',
          documentNumber: '1758',
          stockCode: 'AAM',
          transactionDate: '13/12/2023',
          ownershipQuantity: '6,700',
          registeredQuantity: '100',
          amountToPay: '30,000',
          status: 'Đã duyệt',
        },
        {
            key: '2',
            account: 'VPBF8522222',
            documentNumber: '1758',
            stockCode: 'AAM',
            transactionDate: '13/12/2023',
            ownershipQuantity: '6,700',
            registeredQuantity: '100',
            amountToPay: '30,000',
            status: 'Chờ duyệt',
          },
          
        
      ];
      
  
    return (
      <div >
        
          
        
        <div className={cx('search')}>
        <div className={cx('data-search')}>
  <b>Tài khoản lưu ký chứng khoán</b>
  <div className={cx('input-search')}>
    <Select placeholder="Chọn tài khoản">
      {/* Thêm các Option khác nếu cần */}
      <Option value="1">Tài khoản 1</Option>
      <Option value="2">Tài khoản 2</Option>
    </Select>
  </div>
</div>

<div className={cx('data-search')}>
  <b>Số chứng từ</b>
  <div className={cx('input-search')}>
    <Input placeholder="Chọn tài khoản" className="border-input"/>
  </div>
</div>

<div className={cx('data-search')}>
  <b>Mã CK</b>
  <div className={cx('input-search')}>
    <Select placeholder="Chọn mã CK">
      {/* Thêm các Option khác nếu cần */}
      <Option value="code1">Mã CK 1</Option>
      <Option value="code2">Mã CK 2</Option>
    </Select>
  </div>
</div>

<div className={cx('data-search')}>
  <b>Ngày giao dịch</b>
  <DatePicker />
</div>

<div className={cx('data-search')}>
  <b>Trạng thái</b>
  <div className={cx('input-search')}>
  <Select placeholder="Chọn trạng thái">
      {/* Thêm các Option khác nếu cần */}
      <Option value="status1">Trạng thái 1</Option>
      <Option value="status2">Trạng thái 2</Option>
    </Select>
  </div>
</div>
            
            <Button/>
            


          </div>


       
          <div className="a">
            <div className={cx('result')}>
            <div className={cx('result-plus')}>
                <div>
                    <FontAwesomeIcon icon={faCircle} className="icon-result"/>
                    <b className={cx('result-number')}>28 kết quả</b>
                </div>
                <button
                onClick={() => {handleFunctionClick('Đăng kí mua CK phát hành thêm');}}
                > <FontAwesomeIcon icon={faPlus} className={cx('icon-add')}
                />Thêm mới</button>
            </div>
            <Table columns={columns} dataSource={data} pagination={false}/>
                    </div>
          </div>
        <Next/>

        {modavisible && (
                    <div className={cx('modal-overlay')}>
                        <div className={cx('inner-modal')}>
                            <div className={cx('result-modal')}>
                                <h1>{modavisible}</h1>

                                <div>
      <div>
        <h3 className={cx('infor')}>I. Thông tin người dùng</h3>
        <div className={cx('wrap-modal')}>
          <div className={cx('data-search')}>
            <b>Tài khoản lưu ký chứng khoán</b>
            <div >
            <Select
                  className="input-search"
                  showSearch
                  placeholder="Chọn loại giao dịch"
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
            <b>Tên khách hàng</b>
            <div className={cx('input-search')}>
              <Input placeholder="Nhập tên KH" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>Địa chỉ</b>
            <div className={cx('input-search')}>
              <Input placeholder="Nhập địa chỉ" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>Ngày giao dịch</b>
            <DatePicker />
          </div>
        </div>
      </div>
      <div>
        <h3 className={cx('infor')}>II. Thông tin đợt THQ</h3>
        <div className={cx('wrap-modal')}>
          <div className={cx('data-search')}>
            <b>Mã đợt THQ</b>
            <div className={cx('input-search')}>
            <Select
                  className="input-search"
                  showSearch
                  placeholder="Chọn mã đợt THQ"
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
            <b>Tên đợt THQ</b>
            <div className={cx('input-search')}>
              <Input placeholder="Nhập tên đợt THQ" className="border-input" />
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>Mã CK</b>
            <div className={cx('input-search')}>
              <Input placeholder="Nhập mã CK" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>Ngày DKCC</b>
            <DatePicker />
          </div>
          <div className={cx('data-search')}>
            <b>Ngày hết hạn đăng kí mua</b>
            <Input type="text" placeholder="Chọn ngày hết hạn" className="border-input"/>
          </div>
          <div className={cx('data-search')}>
            <b>Tỉ lệ </b>
            <Input type="text" placeholder="Nhập tỉ lệ" className="border-input"/>
          </div>
          <div className={cx('data-search')}>
            <b>Giá mua </b>
            <Input type="text" placeholder="0" className="border-input"/>
          </div>
        </div>
      </div>
      <div>
        <h3 className={cx('infor')}>III. Thông tin người dùng</h3>
        <div className={cx('wrap-modal')}>
          <div className={cx('data-search')}>
            <b>SL quyền sở hữu </b>
            <div className={cx('input-search')}>
              <Input type="text" placeholder="0" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>SL đã nộp tiền </b>
            <div className={cx('input-search')}>
              <Input type="text" placeholder="0" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>SL quyền đăng kí </b>
            <div className={cx('input-search')}>
              <Input type="text" placeholder="0" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>SL CK đăng kí mua </b>
            <div className={cx('input-search')}>
              <Input type="text" placeholder="0" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>Số tiền phải nộp </b>
            <div className={cx('input-search')}>
              <Input type="text" placeholder="0" className="border-input"/>
            </div>
          </div>
          <div className={cx('data-search')}>
            <b>Ghi chú </b>
            <div className={cx('input-search')}>
              <Input type="text" placeholder="Nhập ghi chú" className="border-input"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  

                                {selectedTitle && <div className={'modal-btn'}><button className={cx('confirm-modal')}
                                onClick={() => setModavisible(false)}
                                >Xác nhận</button></div>}
                                {selectTitle && <div className={'modal-btn'}><button className={cx('confirm-modal')}
                                onClick={() => setModavisible(false)}
                                >Lưu</button></div>}
                                {selectTitleDelete && <div className={'modal-btn'}><button className={cx('confirm-modall')}
                                onClick={() => setModavisible(false)}
                                >Xác nhận xoá</button></div>}

                            </div>

                        </div>
                
                </div>
            )}


      </div>

               
    );
  }
    
  


export default GDDK;