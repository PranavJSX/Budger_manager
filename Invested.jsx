import React, { lazy, useEffect } from 'react'
import '../src/Styles/Invested_base_style.css'
import { Piechart } from './Piechart'
import { Stocks_of_interest } from './Stocks_of_interest'
import { Important_links } from './Important_links'

import data from './sample_api.json'

var user_ob={}

export const Invested=()=>{
  useEffect(()=>{
    console.log(user_ob)
  },[])


  return(
    <>
    <div id="invested_body">
    <div id='investedflex'>
    <div className='invested_section1'><Piechart/> </div>
    <div className='invested_section1' id='stocks_of_interest_div' style={{minWidth:'100px'}}>Stocks of interest<Stocks_of_interest/></div>

    </div>
    <br/>
    <div id="invested_grid">
      <div className='Invested_grid_1'>grid2</div>
      <div className='Invested_grid_1'>grid3</div>
      <div className='Invested_grid_1'><Important_links/></div>
      {console.log(data[0].user_id)}
    </div></div>
    </>
    )
}
