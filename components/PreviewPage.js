/* eslint-disable react/no-unknown-property */
import React from 'react';

import {connect} from 'react-redux'



function PreviewPage() {






  return (
   // <form  action="/api/checkout_sessions" method="POST">
  
      <div>
        <button form="myform"  type="submit"  role="link" >
        PAGA
        </button>
        
  
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button:hover{
            box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
            transform: translate3d(0, 2px, 0);
          }
          
          button:focus{
            box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
          }
          button {
            align-self: center;
            background-color: #3ED1E7;
            background-image: none;
            background-position: 0 90%;
            background-repeat: repeat no-repeat;
            background-size: 4px 3px;
            border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
            border-style: solid;
            border-width: 2px;
            box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
            box-sizing: border-box;
            color: black;
            cursor: pointer;
            display: inline-block;
            font-family: Neucha, sans-serif;
            font-size: 1rem;
            line-height: 23px;
            outline: none;
            padding: .75rem;
            text-decoration: none;
            transition: all 235ms ease-in-out;
            border-bottom-left-radius: 15px 255px;
            border-bottom-right-radius: 225px 15px;
            border-top-left-radius: 255px 15px;
            border-top-right-radius: 15px 225px;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
      </div>
   // </form>
  );
}




export default connect(null,null)(PreviewPage)