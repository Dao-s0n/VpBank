import { faCircle, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../Button";
import Next from "../NextPage";
import { Content, Header } from "antd/lib/layout/layout";
import { Input, DatePicker, Select, Table, Space } from 'antd';

const { Option } = Select;



function Tracuusolenh() {

  const columns = [
    {
      title: 'Tài khoản lưu ký chứng khoán',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Số hiệu lệnh',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'Ngày giao dịch',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <Space className={`icon-lookup ${text === 'Chờ duyệt' ? 'wait' : ''} ${text === 'Từ chối' ? 'refuse' : ''}`}        >
          <FontAwesomeIcon icon={faCircle} />
          {text}
        </Space>
      ),

    },
    {
      title: 'Mã CK',
      dataIndex: 'stockCode',
      key: 'stockCode',
    },
    {
      title: 'Loại lệnh',
      dataIndex: 'orderType',
      key: 'orderType',
    },
    {
      title: 'Chu kỳ TT',
      dataIndex: 'tradingCycle',
      key: 'tradingCycle',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Giá trị',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Phi MG',
      dataIndex: 'managementFee',
      key: 'managementFee',
    },
    {
      title: 'Phí giao dịch',
      dataIndex: 'transactionFee',
      key: 'transactionFee',
    },
    {
      title: 'Thuế',
      dataIndex: 'tax',
      key: 'tax',
    },
    {
      title: 'Tiền phải trả/mang về',
      dataIndex: 'amountToPayOrReceive',
      key: 'amountToPayOrReceive',
    },
  ];
  
  const data = [
    {
      key: '1',
      account: 'MSBB000000001',
      orderNumber: '1758',
      transactionDate: '12/11/2020',
      status: 'Đã duyệt',
      stockCode: 'TPCP2020',
      orderType: 'Mua',
      tradingCycle: '1',
      quantity: '100',
      value: '10,000,000',
      managementFee: '200,000',
      transactionFee: '0',
      tax: '0',
      amountToPayOrReceive: '10,020,000',
    },
    {
      key: '2',
      account: 'VSSB000018',
      orderNumber: 'ASA',
      transactionDate: '0',
      status: 'Chờ duyệt',
      stockCode: '0',
      orderType: '0',
      tradingCycle: '0',
      quantity: '0',
      value: '0',
      managementFee: '0',
      transactionFee: '0',
      tax: '0',
      amountToPayOrReceive: '2,000,000,000',
    },
    {
      key: '2',
      account: 'VSSB000018',
      orderNumber: 'ASA',
      transactionDate: '0',
      status: 'Từ chối',
      stockCode: '0',
      orderType: '0',
      tradingCycle: '0',
      quantity: '0',
      value: '0',
      managementFee: '0',
      transactionFee: '0',
      tax: '0',
      amountToPayOrReceive: '2,000,000,000',
    },
  ];
    
  
    return (
      <Content >
        <Header className='title'>
          <FontAwesomeIcon icon={faFileLines} className='icon-title'/>
          <h2>Tra cứu sổ lệnh</h2>
        </Header>
        
          <div className='search'>
          <div className='data-search'>
              <b>Tài khoản lưu ký chứng khoán</b>
              <div className='input-search'>
                <Select
                  className="input-search"
                  showSearch
                  placeholder="Chọn tài khoản"
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

                  <div className='data-search'>
                    <b>Mã CK</b>
                    <div className='input-search'>
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

                  <div className='data-search'>
                    <b>Số hiệu lệnh</b>
                    <div className='input-search'>
                      <Input placeholder="Chọn tài khoản"  className="border-input"/>
                    </div>
                  </div>

                  <div className='data-search'>
                    <b>Ngày giao dịch</b>
                    <DatePicker />
                  </div>

                  <div className='data-search'>
                    <b>Trạng thái</b>
                    <div className='input-search'>
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

                  <div className='data-search'>
                    <b>Loại lệnh</b>
                    <div className='input-search'>
                    <Select
                  className="input-search"
                  showSearch
                  placeholder="Chọn loại lệnh"
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

                  <div className='data-search'>
                    <b>Mã CTCK đặt lệnh</b>
                    <div className='input-search'>
                      <Input placeholder="Chọn tài khoản" className="border-input"/>
                    </div>
</div>

            <Button/>
            


          </div>


       
          <div className="a">
            <div className='result'>
            <FontAwesomeIcon icon={faCircle} className="icon-result"/>
            <b className='result-number'>28 kết quả</b>
            <Table columns={columns} dataSource={data} pagination={false}/>
                    </div>
          </div>
        <Next/>

      </Content>
    );
  }
    
  


export default Tracuusolenh;