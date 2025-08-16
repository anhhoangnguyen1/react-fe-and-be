import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from './../logo.svg';

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log("call me render")

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert("You deleted")
            }
            console.log("useEffect")
        }, [listUsers]
    );

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {
                        listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                    <div>
                                        <button onClick={
                                            () => {
                                                props.handleDeleteUser(user.id);
                                            }
                                        }>Delete</button>
                                    </div>
                                </div>
                            )

                            /*
                                className={+user.age > 18 ? "green" : "red"}
                                - className có thể dùng linh hoạt, giúp phối hợp js và html
                            */

                            //+user.age: dùng để biến đổi từ chuỗi sang số, giống như Integer.parseInt()
                            // if (+user.age > 18) {
                            //     return (
                            //         <div key={user.id} className="green">
                            //             <div>My name's {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className="red">
                            //             <div>My name's {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //         </div>
                            //     )
                            // }
                        })
                    }

                </>
            }

        </div>
    )

}


export default DisplayInfo;