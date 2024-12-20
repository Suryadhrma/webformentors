import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';
import SidebarAdmin from './components/admin/navigation/SidebarAdmin';
import TopNavigationAdmin from './components/admin/navigation/TopNavigationAdmin';


import DashboardAdmin from './pages/admin/dashboard/DashboardAdmin';
import ValidationMentor from './pages/admin/dashboard/ValidationMentorAdmin';
import CourseValidation from './pages/admin/course-validation/CourseValidationAdmin';
import ValidationMentorCourse from './pages/admin/course-validation/CourseDetailAdmin';
import ChatPage from './pages/admin/chat/ChatAdmin';
import VoucherGenerator from './pages/admin/voucher/VoucherAdmin';
import NotificationsGenerator from './pages/admin/notification/NotificationAdmin';



    const App = () => {
        return (
          <BrowserRouter>
          <div className='flex'>
            <div className='w-64 bg-blue-500 min-h-screen fixed'>
              <SidebarAdmin/>
            </div>
            <div className="flex-1 min-h-screen ml-64">
              <div className='flex-1 overflow-hidden'>
              <TopNavigationAdmin />
              </div>
              <div className=' p-2 bg-gray-100'>
              <Routes>
                  <Route path="/admin/dashboard" element={<DashboardAdmin />} />
                  <Route path="/admin/validation-mentor" element={<ValidationMentor/>} />
                  <Route path="/admin/validation-course" element={<CourseValidation/>} />
                  <Route path="/admin/validation-course/detail" element={<ValidationMentorCourse/>} />
                  <Route path="/admin/chat" element={<ChatPage/>} />
                  <Route path="/admin/voucher-generator" element={<VoucherGenerator/>} />
                  <Route path="/admin/notification-generator" element={<NotificationsGenerator/>} />
              </Routes>
              </div>
            </div>
          </div>
          
          </BrowserRouter>
        );
      }
      


export default App;