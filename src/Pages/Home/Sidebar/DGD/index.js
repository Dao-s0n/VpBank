import {  faCheck, faCircle, faCircleCheck, faEye,  faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";
import classNames from "classnames/bind";
import Button from "../Button";
import Next from "../NextPage";
import styles from './DGD.scss'
import { Header } from "antd/lib/layout/layout";
import {Select,DatePicker,Input, Table, Space} from 'antd'
import { useState } from "react";


const cx = classNames.bind(styles)
const {Option} = Select



function DGD() {
    const [modavisible, setModaVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalType, setModalType] = useState(null);



const handleFunctionClick = (type) => {
  setModalType(type);
  setModaVisible(true);
  
};
const handleClick = (title) => {
      if(title==='Duyệt'){
        setSelectedTitle(false)
        setSelectTitle(true)
      }else if(title='Xem'){
        setSelectTitle(false)
        setSelectedTitle(true)
      }

}

const [selectedTitle, setSelectedTitle] = useState(true);
const [selectTitle, setSelectTitle] = useState(false)




              
const columns = [
    {
      title: 'Loại giao dịch',
      dataIndex: 'transactionType',
      key: 'transactionType',
    },
    {
      title: 'Tài khoản lưu kí chứng khoán',
      dataIndex: 'securitiesAccount',
      key: 'securitiesAccount',
    },
    {
      title: 'Người tạo',
      dataIndex: 'creator',
      key: 'creator',
    },
    {
      title: 'Ngày giao dịch',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
    },
    {
      title: 'Mã CK',
      dataIndex: 'stockCode',
      key: 'stockCode',
    },
    {
      title: 'Chức năng',
      dataIndex: 'function',
      key: 'function',
      render: () => (
        <Space size="middle" className="check-btn" onClick={() => {handleFunctionClick('Xem');handleClick('Xem')}}
        >
          <FontAwesomeIcon  icon={faEye} />
        </Space>
      ),
    },
    {
      title: 'Duyệt/Từ chối',
      dataIndex: 'approveOrReject',
      key: 'approveOrReject',
      render: () => (
       <Space size='middle' className="check-btn" onClick={() => {handleFunctionClick('Duyệt/Từ chối'); handleClick('Duyệt')}}>

           <FontAwesomeIcon  icon={faCheck}   />
           <FontAwesomeIcon  icon={faX} />
       </Space>
        
      ),
    },
  ];

  const data = [
    {
      key: '1',
      transactionType: 'Yêu cầu rút chứng khoán',
      securitiesAccount: 'VPBF8522222',
      creator: 'vietkq@vpb.com.vn',
      transactionDate: '12/02/2023',
      stockCode: 'AAAAa',
      function: '',
      approveOrReject:'',
    },
    // Thêm các dòng dữ liệu khác nếu cần
  ];

  
    return (
      <div >
        <Header className={cx('title')}>
          <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-title')}/>
          <h2>Duyệt giao dịch</h2>
        </Header>
          
        
        <div className={cx('search')}>
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
                    <b>Tài khoản lưu ký CK</b>
                    <div className={cx('input-search')}>
                    <Select
                  className="input-search"
                  showSearch
                  placeholder="Chọn TK CK"
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
                    <b>Người tạo</b>
                    <div className={cx('input-search')}>
                      <Input placeholder="Nhập tên người tạo" className="border-input" />
                    </div>
                  </div>

                  <div className={cx('data-search')}>
                    <b>Ngày giao dịch</b>
                    <DatePicker />
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

            
            <Button/>
            


          </div>


       <div className="a">
         
            <div className={cx('result')}>
            <div className={cx('result-plus')}>
                <div>
                    <FontAwesomeIcon icon={faCircle} className="icon-result"/>
                    <b className={cx('result-number')}>28 kết quả</b>
                </div>
         
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
                                >Xác nhận</button></div> }
                               {selectTitle && <div className={'modal-btnn'}><button className={cx('confirm-modall')}
                                onClick={() => setModaVisible(false)}
                                > <FontAwesomeIcon icon={faX}/>Từ chối </button>
                                <button className="confir-modall"><FontAwesomeIcon icon={faCheck}/>Duyệt</button>
                                </div> }
                                </div></div></div>)}



      </div>

               
    );
  }
    
  


export default DGD;