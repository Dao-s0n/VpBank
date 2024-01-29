
import React, { useState } from 'react';
import { Select, Pagination } from 'antd';
import classNames from 'classnames/bind';
import styles from './NextPage.scss';

const cx = classNames.bind(styles);
const { Option } = Select;

function Next() {
  const [selected, setSelected] = useState('1');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectChange = (value) => {
    setSelected(value);
    setCurrentPage(parseInt(value, 10));
  };

  const handlePaginationChange = (page) => {
    setSelected(page.toString());
    setCurrentPage(page);
  };

  const renderSelectOptions = () => {
    return [1, 5, 10, 20, 50].map((value) => (
      <Option key={value} value={value.toString()}>
        {value}
      </Option>
    ));
  };

  return (
    <div className={cx('next-page')}>
      <p>Hiển thị:</p>
      <Select value={selected} onChange={handleSelectChange} className='page'>
        {renderSelectOptions()}
      </Select>
      <div>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          total={50}
          onChange={handlePaginationChange}
        />
      </div>
      <p>Tổng: </p>
    </div>
  );
}

export default Next;
