import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MaybeShowNavbar=({children})=>{
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(()=>{
        if(location.pathname==='/signup'
           ||location.pathname==='/login'
           ||location.pathname==='/forgot_password'
           ||location.pathname==='/ordersummery_card'
           ||location.pathname==='/tracking'
           ||location.pathname==='/admin'
           ||location.pathname==='/admin/dashboard'
           ||location.pathname==='/admin/order_list'
           ||location.pathname==='/admin/order_detail'
           ||location.pathname==='/admin/invoice'
           ||location.pathname==='/admin/customer'
           ||location.pathname==='/admin/vouchers'
           ||location.pathname==='/admin/add_coupon'
           ||location.pathname==='/admin/driver_list'
           ||location.pathname==='/admin/customer_details'
           ||location.pathname==='/admin/reviews'
           ||location.pathname==='/admin/setting'
           ||location.pathname==='/admin/setting/profile'
           ||location.pathname==='/admin/setting/change_password'
           ||location.pathname==='/admin/setting/notification'
           ||location.pathname==='/admin/setting/delete_account'
        ){
            setShowNavBar(false)
        }
        else{
            setShowNavBar(true)
        }
    },[location])

    return(
        <div>{showNavBar && children}</div>
    )
}

export default MaybeShowNavbar;