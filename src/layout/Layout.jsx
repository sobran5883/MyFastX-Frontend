import Header from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import MayBeShow from '../components/may_be_show/MayBeShow'

function Layout (){
    return(
        <>
        <MayBeShow>
            <div>
            <Header/>
            </div>
        </MayBeShow>
        <div className=''>
            <Outlet />
        </div>    
        <MayBeShow>
            <Footer />
        </MayBeShow>    
        </>
    )
}
export default Layout
