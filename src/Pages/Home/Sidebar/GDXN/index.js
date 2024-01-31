import {  faCircle, faDownload, faEye, faFileLines, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../Button";
import Next from "../NextPage";
import { Input,DatePicker, Select, Space, Table,Upload } from "antd";

const {Option} = Select

function GDXN() {

    const [modavisible, setModavisible] = useState(false)
    const [modalType, setModalType] = useState(null);
    const handleFunctionClick = (type) => {
      setModalType(type);
      setModavisible(true)
    }
    const [selectTitleDelete, setSelectTitleDelete] = useState(false)
    const [selectedTitle, setSelectedTitle] = useState(true);
    const handleClick = (title) => {
      if(title === 'Thêm'){
        setSelectedTitle(true)
        setSelectTitleDelete(false)
      }else if(title === 'xoá'){
        setSelectedTitle(false)
        setSelectTitleDelete(true)
      }
      
       

}

    const props = {
        beforeUpload: (file) => {
          // Do something with the file, like validate its type or size
          console.log(file);
          return false;
        },}

    const columns = [
        {
          title: 'Số chứng từ',
          dataIndex: 'soChungTu',
          key: 'soChungTu',
        },
        {
          title: 'Ngày import',
          dataIndex: 'ngayImport',
          key: 'ngayImport',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'trangThai',
          key: 'trangThai',
          render: (text) => (
            <Space className='icon-lookup wait'>
                <FontAwesomeIcon icon={faCircle}/>
              {text}
            </Space>
          ),
        },
        {
          title: 'Chức năng',
          dataIndex: 'chucNang',
          key: 'chucNang',
          width: '10%',
          render: () => (
            <div className='icon-funtion'>
              <FontAwesomeIcon icon={faEye} onClick={() => {handleFunctionClick('Chi tiết'); handleClick('Thêm')}} />
              <FontAwesomeIcon icon={faTrashCan} onClick={() => {handleFunctionClick('Xoá');handleClick('xoá')}} className='icon-funtion delete'/>
            </div>
          ),
          className: 'lookup-res',

        },
      ];
    
      const data = [
        {
          key: '1',
          soChungTu: '1758',
          ngayImport: '13/12/2023',
          trangThai: 'Chờ duyệt',
          chucNang: '',
        },
      ];
      const columnsModal = [
        {
          title: 'Mã CTCX đặ lệnh',
          dataIndex: 'maCTCX',
          key: 'maCTCX',
          width: '8%',
        },
        {
          title: 'Loại lệnh',
          dataIndex: 'loaiLenh',
          key: 'loaiLenh',
          width: '8%',
        },
        {
          title: 'Tài khoản lưu ký chứng khoán',
          dataIndex: 'taiKhoan',
          key: 'taiKhoan',
          width: '8%',
        },
        {
          title: 'Mã CK',
          dataIndex: 'maCK',
          key: 'maCK',
          width: '8%',
        },
        {
          title: 'Ngày giao dịch',
          dataIndex: 'ngayGiaoDich',
          key: 'ngayGiaoDich',
          width: '8%',
        },
        {
          title: 'Ngày thanh toán',
          dataIndex: 'ngayThanhToan',
          key: 'ngayThanhToan',
          width: '8%',
        },
        {
          title: 'Số lượng',
          dataIndex: 'soLuong',
          key: 'soLuong',
          width: '8%',
        },
        {
          title: 'Giá',
          dataIndex: 'gia',
          key: 'gia',
          width: '8%',
        },
        {
          title: 'Tổng giá trị',
          dataIndex: 'tongGiaTri',
          key: 'tongGiaTri',
          width: '8%',
        },
        {
          title: 'Ngày import',
          dataIndex: 'ngayImport',
          key: 'ngayImport',
          width: '8%',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'trangThai',
          key: 'trangThai',
          width: '8%',
        },
        {
          title: 'Chức năng',
          dataIndex: 'chucNang',
          key: 'chucNang',
          width: '8%',
        },
      ];
    
      const dataModal = [
        // Điền dữ liệu của bạn tại đây
        {
          key: '1',
          maCTCX: '...',
          loaiLenh: '...',
          taiKhoan: '...',
          maCK: '...',
          ngayGiaoDich: '...',
          ngayThanhToan: '...',
          soLuong: '...',
          gia: '...',
          tongGiaTri: '...',
          ngayImport: '...',
          trangThai: '...',
          chucNang: '...',
        },
      ];
    
  
    return (
      <div >
        
          
        
        <div className='search'>
      <div className='data-search'>
        <b>Số chứng từ</b>
        <div className='input-search'>
          <Input placeholder="Nhập số chứng từ" />
        </div>
      </div>

      <div className='data-search'>
        <b>Ngày import</b>
        <DatePicker />
      </div>

      <div className='data-search'>
        <b>Trạng thái</b>
        <div className='input-search'>
        <Select placeholder="Chọn trạng thái">
      {/* Thêm các Option khác nếu cần */}
      <Option value="1">Tài khoản 1</Option>
      <Option value="2">Tài khoản 2</Option>
    </Select>
           
        </div>
      </div>

      <Button />
    </div>


       
          <div className="a">
            <div className='result'>
            <div className='result-plus'>
                <div>
                    <FontAwesomeIcon icon={faCircle} className="icon-result"/>
                    <b className='result-number'>28 kết quả</b>
                </div>
                <button
                onClick={() => {handleFunctionClick('Thêm mới');handleClick('Thêm')}}
                > <FontAwesomeIcon icon={faPlus} className='icon-add'/>Thêm mới</button>
            </div>
            <Table
                  className='lookup-container'
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
                    </div>
          </div>
        <Next/>

        {modavisible && (
                    <div className='modal-overlay'>
                        <div className='inner-modal'>
                            <div className='result-modal'>
                                <h1>{modalType}</h1>

                                <div>
                                    <div className='wrap-modal'>
                                    <div className='data-search'>
                                        <b>Tài khoản lưu ký chứng khoán</b>
                                        <div className='input-search'>
                                        <Select placeholder="Chọn tài khoản">
                                            {/* Thêm các Option khác nếu cần */}
                                            <Option value="1">Tài khoản 1</Option>
                                            <Option value="2">Tài khoản 2</Option>
                                            </Select>
                                                    
                                        </div>
                                    </div>
                                    <div className='file-modal'>
                                        <div className='file-btn'>
                                        <button className="dow-btn" >
                                            <FontAwesomeIcon icon={faFileLines}/>
                                            Tải file mẫu
                                        </button>
                                        <b>File</b>

                                        <Space>
                                            <Upload {...props}>
                                                <button className='select-btn' >
                                                    <FontAwesomeIcon icon={faDownload}/>
                                                Chọn file
                                                </button>
                                            </Upload>
                                        </Space>
                                        </div>
                                    </div>

                                    <h3 className='infor'>I. Thông tin file</h3>

                                    
                                        <div  className="result">
                                            <Table columns={columnsModal} dataSource={dataModal} pagination={false} />
                                        </div>
                                    
                                    </div></div>

                                    {selectedTitle && <div className={'modal-btn'}><button className='confirm-modal'
                                onClick={() => setModavisible(false)}
                                >Xác nhận</button></div>}
                                {selectTitleDelete && <div className={'modal-btn'}><button className='confirm-modall'
                                onClick={() => setModavisible(false)}
                                >Xác nhận xoá</button></div>}

                            </div>

                        </div>
                
                </div>
            )}


      </div>

               
    );
  }
    
  


export default GDXN;