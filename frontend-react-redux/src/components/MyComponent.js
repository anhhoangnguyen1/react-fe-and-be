// class component
// func component
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//     //jsx
//     state = {
//         listUsers: [
//             { id: 1, name: "hoidanit", age: "16" },
//             { id: 2, name: "eric", age: "34" },
//             { id: 3, name: "Hary Pham Dev", age: "69" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState(
//             {
//                 listUsers: [userObj, ...this.state.listUsers]
//             }
//         )
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers]
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //DRY: don't repeat yourself
//     render() {

//         const test = {
//             name: "eric"
//         }
//         return (
//             <>
//                 {JSON.stringify(test)}
//                 <br />
//                 <div className="a">
//                     <AddUserInfo
//                         handleAddNewUser={this.handleAddNewUser}
//                     ></AddUserInfo>
//                     <br /><br />
//                     <DisplayInfo
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     ></DisplayInfo>
//                 </div>
//                 <div className="b"></div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "hoidanit", age: "16" },
            { id: 2, name: "eric", age: "34" },
            { id: 3, name: "Hary Pham Dev", age: "69" },
        ]
    );

    //     handleAddNewUser = (userObj) => {
    //         this.setState(
    //             {
    //                 listUsers: [userObj, ...this.state.listUsers]
    //             }
    //         )
    //     }

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };

    //     handleDeleteUser = (userId) => {
    //         let listUsersClone = [...this.state.listUsers]
    //         listUsersClone = listUsersClone.filter(item => item.id !== userId);
    //         this.setState({
    //             listUsers: listUsersClone
    //         })
    //     }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsers.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    };

    const test = {
        name: "eric"
    };

    return (
        <>
            {JSON.stringify(test)}
            <br />
            <div className="a">
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser}
                />
                <br /><br />
                <DisplayInfo
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b"></div>
        </>
    );
};

export default MyComponent;