import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { LinkContainer, useLocation, Link } from "react-router-bootstrap";


export function Paginate(pages, isAdmin = false) {
    let new_keyword
    let total
  
  if(pages.keyword){
    new_keyword = pages.keyword.split('?keyword=')[1].split('&')[0]
  }
  console.log([...Array(pages.pages).keys()].map((x)=>(console.log(x))))
  total = pages.pages

  const paginationBasic = (
    pages > 1 && (
        <Pagination>
          {[...Array(pages.pages).keys()].map((x) => (
          
            <Link key={x + 1} to={`/?keyword=${new_keyword}&page=${x + 1}`}>
              <Pagination.Item active={x + 1 === pages.page} key={x+1}>
                  {x + 1}
              </Pagination.Item>
            </Link>
          ))}
        </Pagination>
      ))


  return (paginationBasic)
    
}
