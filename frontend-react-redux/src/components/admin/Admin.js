import SideBar from "./SideBar";
import './Admin.scss'

const Admin = (props) => {
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar></SideBar>
            </div>
            <div className="admin-content">
                hehe
            </div>
        </div>
    )
}

export default Admin;