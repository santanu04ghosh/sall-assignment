import React from "react";

const Pagination = ({usersPerPage, totalUsers, paginateHandler, activeBtn}) => {
    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        pageNumbers.push(i)
    }
console.log(activeBtn)
    return(
        <div className="pagination_Section">
            {pageNumbers.map((number )=> (
                <div className="page_items" key={number}>
                    <div className={activeBtn === number ? "activeClass" : " " }  onClick={() => paginateHandler(number)} >{number}</div>
                </div> 
            ))}
        </div>
    )
}

export default Pagination;