import {  faCircle, faEye, faPen, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classNames from "classnames/bind";
import Button from "../Button";
import Next from "../NextPage";
import styles from './GDR.scss'
import { Input, DatePicker, Select ,Space, Table } from "antd";

const {Option} = Select
const cx = classNames.bind(styles)


function GDR() {

    const [modavisible, setModaVisible] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleFunctionClick = (type) => {
        setModalType(type);
        setModaVisible(true)
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
          title: 'Mã CK',
          dataIndex: 'stockCode',
          key: 'stockCode',
          className: 'lookup-res',
        }, {
            title: 'Loại giao dịch',
            dataIndex: 'amountToPay',
            key: 'amountToPay',
            className: 'lookup-res',
          },
        {
          title: 'Ngày giao dịch',
          dataIndex: 'transactionDate',
          key: 'transactionDate',
          className: 'lookup-res',
        },
        {
          title: 'Số chứng từ',
          dataIndex: 'ownershipQuantity',
          key: 'ownershipQuantity',
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
          stockCode: 'Nhập kho CK OTC',
          transactionDate: '13/12/2023',
          ownershipQuantity: '304',
          registeredQuantity: '10',
          amountToPay: 'Yêu cầu rút chứng khoán',
          status: 'Đã duyệt',
        },
        {
            key: '2',
            account: 'VPBF8522222',
            stockCode: 'Nhập kho CK OTC',
            transactionDate: '13/12/2023',
            ownershipQuantity: '304',
            registeredQuantity: '10',
            amountToPay: 'Yêu cầu rút chứng khoán',
            status: 'Chờ duyệt',
          },
          {
            key: '3',
            account: 'VPBF8522222',
            stockCode: 'Nhập kho CK OTC',
            transactionDate: '13/12/2023',
            ownershipQuantity: '304',
            registeredQuantity: '10',
            amountToPay: 'Yêu cầu rút chứng khoán',
            status: 'Từ chối',
          },
        
      ];
      
    

  
  
    return (
      <div>
        
          
        
        <div className={cx('search')}>
        <div className={cx('data-search')}>
        <b>Tài khoản lưu ký chứng khoán</b>
        <div className={cx('input-search')}>
        <Select
                  className="input-search"
                  showSearch
                  placeholder="Chọn TK"
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
        <b>Loại giao dịch</b>
        <div className={cx('input-search')}>
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
        <b>Ngày giao dịch</b>
        <DatePicker />
      </div>

      <div className={cx('data-search')}>
        <b>Số chứng từ</b>
        <div className={cx('input-search')}>
          <Input placeholder="Nhập số chứng từ" />
        </div>
      </div>

      <div className={cx('data-search')}>
        <b>Trạng thái</b>
        <div className={cx('input-search')}>
        <Select
                  className="input-search"
                  showSearch
                  placeholder="Chọn trạng thái"
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
                                <h1>{modalType}</h1>
                                <div>
                                    
                                <div className={cx('data-search')}>
                                        <b>Nơi yêu cầu ký gửi</b>
                                        <div className={cx('input-search')}>
                                        <Select
                                         className="input-search"
                                            showSearch
                                            placeholder="Chọn tài khoản"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                            onChange={(value,option) => setSelectedOption(option.children)}

                                            >
                                            
                                                <Option value="1"  onChange = {() => setSelectedTitle(true)}>VSD</Option>
                                                <Option value="2">VPB</Option>
                                                {/* Thêm các tùy chọn khác nếu cần */}                                            </Select>

                                                </div></div>
                                                <div>
      {selectedOption && ( <div><h3 className="infor">I. Yêu cầu ký gửi chứng khoán tại {selectedOption}</h3>
      <div className="wrap-modal">
        <div className="data-search">
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

        <div className="data-search">
          <b>Tên khách hàng</b>
          <div className="input-search">
            <Input placeholder="Nhập tên KH" className="border-input"/>
          </div>
        </div>

        <div className="data-search">
          <b>Ngày giao dịch</b>
          <DatePicker />
        </div>

        <div className="data-search">
          <b>Mã CK</b>
          <div >
          <Select
            className="input-search"
            showSearch
            placeholder="Chọn mã CK"
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

        <div className="data-search">
          <b>Loại CK</b>
          <div >
          <Select
            className="input-search"
            showSearch
            placeholder="Chọn loại CK"
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

        <div className="data-search">
          <b>Mã đợt phát hành</b>
          <div >
          <Select
            className="input-search"
            showSearch
            placeholder="Nhập mã đợt phát hành"
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

        <div className="data-search">
          <b>SL TDCN</b>
          <div className="input-search">
            <Input  placeholder="0"  className="border-input"/>
          </div>
        </div>

        <div className="data-search">
          <b>SL HCCN</b>
          <div className="input-search">
            <Input  placeholder="0"  className="border-input"/>
          </div>
        </div>

        <div className="data-search">
          <b>Giá vốn</b>
          <div className="input-search">
            <Input placeholder="Ghi chú"  className="border-input"/>
          </div>
        </div>
      </div> </div>
      )
      }
    </div>
                                </div> 
                                {selectedTitle && <div className={'modal-btn'}><button className={cx('confirm-modal')}
                                onClick={() => setModaVisible(false)}
                                >Xác nhận</button></div>}
                                {selectTitle && <div className={'modal-btn'}><button className={cx('confirm-modal')}
                                onClick={() => setModaVisible(false)}
                                >Lưu</button></div>}
                                {selectTitleDelete && <div className={'modal-btn'}><button className={cx('confirm-modall')}
                                onClick={() => setModaVisible(false)}
                                >Xác nhận xoá</button></div>}
                                </div></div></div>)}



      </div>

               
    );
  }
    
  
  


export default GDR;