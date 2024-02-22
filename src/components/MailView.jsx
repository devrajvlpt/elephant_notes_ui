import React from 'react';
import styled from 'styled-components';
import Tiptap from './ListProducts';

// Styled components for Sidebar/Menu, Email List, and Email Detail
const Container = styled.div`
  display: flex;
  align-items:flex-start;
  height: 100vh;
  width: 100%
`;

const Sidebar = styled.div`  
  width: 15%; 
  height:100vh;
`;

const EmailListContainer = styled.div`
  border-bottom: 1px solid #ccc;
`;

const EmailList = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
`;

const InboxList = styled.div` 
  overflow-x: hidden;
  overflow-y: auto;
  width:25%;
  height:100vh;
  text-align:left;
  padding:4rem;
`;

const EmailDetail = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  width:65%
  height:100vh;
`;

const MailView = () => {
  return (
    <Container>
      
      <Sidebar className="text-black absolute -translate-x-full 3xl:w-80 z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-gray-900 2xl:w-72">
        {/* Your menu content goes here */}
        <h2 class="text-sm font-bold text-primary transform-gpu line-clamp-1 py-8">Bharathi Raja</h2>
        <ul>
          <li class="items-start space-x-3 px-2 py-1.5 text-sm font-medium  bg-black text-white hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Inbox</li>
          <li>Sent</li>
          {/* Add more menu items as needed */}
        </ul>
      </Sidebar>

       
        <InboxList className="border-r border-gray-150 bg-white dark:border-gray-800 dark:bg-gray-900 ">
          <div>
         
            <p>randoss</p>
          </div>
        </InboxList>
      
       
       
       <EmailDetail>
         <div>
         <Tiptap />
         </div>
       </EmailDetail>
     
    </Container>
  );
};

export default MailView;
