import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddStudent from './AddStudent';
import DistributionForm from './DistributionForm';
import StudentList from './StudentList';
import DashboardHome from './DashboardHome';
import AccountInfo from './AccountInfo';
import Transcript from './Transcript';
import Gradesheet from './Gradesheet';
import Certificate from './Certificate';
import TranscriptCopy from './TranscriptCopy';
import Clearance from './Clearance';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <>
      <div className="main-content">
        <Header />
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="transcript-form" element={<Transcript />} />
            <Route path="transcript-copy" element={<TranscriptCopy />} />
            <Route path="certificate-form" element={<Certificate />} />
            <Route path="clearance-form" element={<Clearance />} />
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="gradesheet-form" element={<Gradesheet />} />
            <Route path="studentlist" element={<StudentList />} />
            <Route path="distributionform" element={<DistributionForm />} />
            <Route path="accountinformation" element={<AccountInfo />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
