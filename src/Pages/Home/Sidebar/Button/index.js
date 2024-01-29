  import classNames from "classnames/bind";
  import styles from './Button.scss'
  const cx = classNames.bind(styles)
  
  
  function Button() {
    return <div className={cx('btns')}>

        <button className={cx('btn search-btn')}><b>Tìm kiếm</b></button>
                <button className={cx('btn reset-btn')}><b>Đặt lại</b></button>
    </div>
}

export default Button;