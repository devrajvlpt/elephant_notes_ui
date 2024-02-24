import React from 'react';
import styled from 'styled-components';
import Tiptap from './ListProducts';
import EditableText from './EditableText';
import  projects   from './ProjectSchema';
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
        <h2 class="text-sm font-bold text-primary transform-gpu line-clamp-1 py-4">Bharathi Raja</h2>
        <ul class="text-left py-6">
          <li 
            class="items-start space-x-3 px-2 py-1.5 text-sm  font-bold text-black hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
            All Notes
          </li>
          <li 
            class="items-start space-x-3 px-2 py-1.5 text-sm  font-bold text-black hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
            Favourites
          </li>
          <div className="flex flex-row px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="mt-[6px]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.83233V11.625C1.5 12.6605 2.33947 13.5 3.375 13.5H20.625C21.6605 13.5 22.5 12.6605 22.5 11.625V9.83233C22.5 9.11619 22.2438 8.42368 21.7778 7.87995L18.4929 4.04763C17.923 3.38269 17.0909 3 16.2151 3H7.78485C6.90908 3 6.07703 3.38269 5.50708 4.04763L2.22223 7.87995C1.75618 8.42368 1.5 9.1162 1.5 9.83233ZM7.78485 4.5C7.34697 4.5 6.93094 4.69134 6.64597 5.02381L3.88067 8.25H7.04584C8.0489 8.25 8.98559 8.7513 9.54199 9.5859L9.70609 9.83205C9.98429 10.2493 10.4526 10.5 10.9542 10.5H13.0458C13.5474 10.5 14.0157 10.2493 14.2939 9.83205L14.458 9.5859C15.0144 8.7513 15.9511 8.25 16.9542 8.25H20.1193L17.354 5.02381C17.0691 4.69134 16.653 4.5 16.2151 4.5H7.78485Z" fill="#0F172A"/>
            <path d="M2.8125 15C2.08763 15 1.5 15.5876 1.5 16.3125V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V16.3125C22.5 15.5876 21.9124 15 21.1875 15H16.9542C15.9511 15 15.0144 15.5013 14.458 16.3359L14.2939 16.5821C14.0157 16.9993 13.5474 17.25 13.0458 17.25H10.9542C10.4526 17.25 9.98429 16.9993 9.70609 16.5821L9.54199 16.3359C8.98559 15.5013 8.0489 15 7.04584 15H2.8125Z" fill="#0F172A"/>
          </svg>
          <li class="items-start space-x-3 px-2 py-1.5 text-sm  font-bold text-black hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"> 
          Inbox
          </li>
          </div>
          
          
        </ul>
        <ul class="text-left">    
          <li 
            class="items-start space-x-3 px-2 py-1.5 text-md font-bold  text-gray-600">
            Projects
          </li>
          <ul class="text-left px-4 py-2">
              {projects.notes.map((project) => (
                <li class="items-start space-x-3 px-2 py-1.5 text-md font-bold  text-gray-600" key={project.id}>
                  <EditableText value={project.title}/>          
                </li>
              ))}       
          </ul>
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
