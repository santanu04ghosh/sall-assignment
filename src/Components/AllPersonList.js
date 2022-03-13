import React, {Fragment, useState} from "react";
import Pagination from "./Pagination";
import Person from "./Person";

const AllPersonList = ({listPersons}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(3)
    const [searchTerm, setSearchTerm] = useState('')
    const[activeBtn, setActiveBtn] = useState('1')

    // define search functionalty check ta data is present on not 

    const eachPerson = listPersons.filter((val) => {
        if(searchTerm ===''){
            return val;
        }else if(val.login.username.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }
    }).map((data) => {
        return({
            id:Math.random(),
            name:data.name,
            username:data.login,
            gender:data.gender,
            email:data.email,
            dob:data.dob,
            address:data.location,
            phone:data.phone,
            image:data.picture
        });
    })
    console.log(eachPerson)

// Get Current User
    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = eachPerson.slice(indexOfFirstUser, indexOfLastUser);
    

// Change user pagination

    const paginateHandler = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActiveBtn(pageNumber)

    }

// Seacrh function




    return(
            <Fragment>
                <div className="search_header">
                    <input 
                        type="text" 
                        className="search_Custom" 
                        placeholder ="Search User" 
                        onChange={(e) => setSearchTerm(e.target.value)}
                    ></input>
                </div>
                <div className="user_list_container">
                    {currentUsers.length >0 ?  <Person eachPerson ={currentUsers}/> : "No Match Data Found"}
                   
                </div>                
                <Pagination  
                    usersPerPage = {userPerPage} 
                    totalUsers ={eachPerson.length} 
                    paginateHandler = {paginateHandler} 
                    activeBtn = {activeBtn}
                />
            </Fragment>
           
    )
}

export default AllPersonList;