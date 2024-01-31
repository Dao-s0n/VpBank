import HeaderComponent from "./Header";

function Home( {children}) {
    return <div>
        <HeaderComponent/>
        <div className='container'> {children}</div>
    </div>
}

export default Home;