import HeaderComponent from "./Header";
import classNames from "classnames/bind";
import styles from './Home.scss'

    const cx = classNames.bind(styles)
function Home( {children}) {
    return <div>
        <HeaderComponent/>
        <div className={cx('container')}> {children}</div>
    </div>
}

export default Home;