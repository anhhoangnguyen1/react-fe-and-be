import React, { useState } from "react";

// class AddUserInfo extends React.Component {

//     //cach react kiem soat component
//     state = {
//         name: "",
//         address: "hoidanit",
//         age: ''
//     }


//     handleOnchange = (event) => {
//         this.setState(
//             {
//                 name: event.target.value
//             }
//         )
//     }

//     handleOnchangeAge = (event) => {
//         // bad code
//         // this.state.age = event.target.value
//         this.setState(
//             {
//                 age: event.target.value
//             }
//         )
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser(
//             {
//                 id: Math.floor((Math.random() * 100) + 1) + "random",
//                 name: this.state.name,
//                 age: this.state.age
//             }
//         );
//     }

//     render() {
//         return (
//             <div>
//                 My name is: {this.state.name}
//                 <br />
//                 My address is: {this.state.age}


//                 <form onSubmit={
//                     (event) => {
//                         this.handleOnSubmit(event)
//                     }
//                 }>

//                     {/* Input your name */}
//                     <label htmlFor="">Your name:</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={
//                             (event) => {
//                                 this.handleOnchange(event)
//                             }
//                         }
//                     />

//                     {/* Input your age */}
//                     <label htmlFor="">Your age:</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={
//                             (event) => {
//                                 this.handleOnchangeAge(event)
//                             }
//                         }
//                     />


//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        address: "hoidanit",
        age: ''
    });

    const [name, setName] = useState('');
    const [address, setAddress] = useState('hoi dan it');
    const [age, setAge] = useState('');


    // handleOnchange = (event) => {
    //     this.setState(
    //         {
    //             name: event.target.value
    //         }
    //     )
    // }

    const handleOnchange = (event) => {
        setName(event.target.value);
    }

    //     handleOnchangeAge = (event) => {
    //         // bad code
    //         // this.state.age = event.target.value
    //         this.setState(
    //             {
    //                 age: event.target.value
    //             }
    //         )
    //     }

    const handleOnchangeAge = (event) => {
        setAge(event.target.value);
    }


    //     handleOnSubmit = (event) => {
    //         event.preventDefault();
    //         this.props.handleAddNewUser(
    //             {
    //                 id: Math.floor((Math.random() * 100) + 1) + "random",
    //                 name: this.state.name,
    //                 age: this.state.age
    //             }
    //         );
    //     }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + "random",
                name: name,
                age: age
            }
        )
    }

    return (
        <div>
            My name is: {name}
            <br />
            My address is: {age}


            <form onSubmit={
                (event) => {
                    handleOnSubmit(event)
                }
            }>

                {/* Input your name */}
                <label htmlFor="">Your name:</label>
                <input
                    value={name}
                    type="text"
                    onChange={
                        (event) => {
                            handleOnchange(event)
                        }
                    }
                />

                {/* Input your age */}
                <label htmlFor="">Your age:</label>
                <input
                    value={age}
                    type="text"
                    onChange={
                        (event) => {
                            handleOnchangeAge(event)
                        }
                    }
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;