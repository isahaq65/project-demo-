import React, { useContext, useState } from 'react';
import { Store } from '../reducer/Store';

const Transcript = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  let sessionc =
    userInfo.regNo.slice(0, 4) + '-' + (+userInfo.regNo.slice(0, 4) + 1);
  // console.log("sessionc :", sessionc)

  const [applicationType, setAppllicationType] = useState('');

  const [trscptData, setTrscptData] = useState({
    name: userInfo.name,

    regNo: userInfo.regNo,
    dept: userInfo.dept,
    session: sessionc,
    dicipline: '',
    school: '',
    nameExam: '',
    recipientAddress: '',
    currentAddress: '',
  });

  let nm, value;

  const handleInputs = (e) => {
    //console.log(e);
    nm = e.target.name;
    value = e.target.value;

    setTrscptData({ ...trscptData, [nm]: value });

    // console.log(user);
  };
  const [stdId, setStdID] = useState('');
  const [name, setName] = useState('');
  const [roll, setRoll] = useState(null);
  const [age, setAge] = useState(null);
  const [Class, setClass] = useState('');
  const [HallName, setHallName] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState('');
  const [visible, setVisible] = useState(false);

  const data = {
    id: stdId,
    fullName: name,
    roll: roll,
    age: age,
    class: Class,
    hall: HallName,
    status: status,
  };
  const AddStudent = async () => {
    setLoading(true);
    // try {
    //   const res = await axios({
    //     method: 'post',
    //     url:
    //     data: data,
    //     headers: {
    //       token: JSON.parse(localStorage.getItem('token'))
    //     }
    //   });
    //   if (res) {
    //     setLoading(false);
    //     setStdID('');
    //     setName('');
    //     setRoll('');
    //     setAge('');
    //     setClass('');
    //     setHallName('');
    //     setStatus('');
    //   }
    // } catch (err) {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <section className="container mx-auto px-4 sm:px-8 max-w-100">
        <div className="transcript-header">
          <div className="transcript-header-content">
            <div className="logo"></div>
            <div className="transcript-header-item ">
              <h4 className="text-xxl font-bold text-green-600">
                Shahjalal University of Science and Technolgy{' '}
              </h4>
            </div>
            <div className="transcript-header-item ">
              <h4 className="text-xxl font-bold text-green-600">Sylhet </h4>
            </div>
            <div className="transcript-header-item my-10">
              <h6> Application for Transcript / equivalant Certificate </h6>
              <hr className="h-line" />
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="relative px-3 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Full Name :
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="name"
                className="form-element"
                value={trscptData.name}
                placeholder="student's full name"
              />
            </div>

            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Registration No:
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="regNo"
                value={trscptData.regNo}
                className="form-element"
                placeholder="student's registration No"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Session:
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="session"
                value={trscptData.session}
                className="form-element"
                placeholder="student's session"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Dicipline:
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="dicipline"
                value={trscptData.dicipline}
                className="form-element"
                placeholder="student's diciline"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                School
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="school"
                className="form-element"
                placeholder="student's school name"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Name of Exam:
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
                type="text"
                name="nameExam"
                className="form-element"
                placeholder="Exam's name and year"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="nameExam"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Year :
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="nameExamYear"
                className="form-element"
                placeholder="which year the exam was took place?"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Recipient's address
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="recipientAddress"
                className="form-element"
                placeholder="Address to which the transcript will be sent"
              />
            </div>

            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Current Address
              </label>
              <input
                onChange={handleInputs}
                type="text"
                name="currentAddress"
                className="form-element"
                placeholder="Student's Currrent Address"
              />
            </div>

            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
                type="text"
                name="mobile"
                className="form-element"
                placeholder="Student's mobile number"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Application For
              </label>
              <div className="form-element">
                <input
                  onClick={(e) => setAppllicationType(e.target.value)}
                  className=""
                  value="certificate"
                  checked={applicationType === 'certificate'}
                  type="checkbox"
                />
                <label className="mx-2"> Certificate</label>
                <input
                  onClick={(e) => setAppllicationType(e.target.value)}
                  className="mx-1"
                  value="transcript"
                  checked={applicationType === 'transcript'}
                  type="checkbox"
                />
                <label className="mx-2"> Transcript </label>
              </div>
            </div>
            <div className="relative px-2 w-1/2">
              {applicationType==="certificate"? (
                <>
              
                  <label
                    for="name"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Certificate
                  </label>
                  <input
                    onChange={handleInputs}
                    type="file"
                    className="form-element"
                    placeholder="Address to which the transcript will be sent"
                  />
                </>
              ) : (
                <>
                 
                  <label
                    for="name"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Gradesheet/marksheet and certificate
                  </label>
                  <input
                    onChange={handleInputs}
                    type="file"
                    multiple
                    className="form-element"
                    placeholder="Address to which the transcript will be sent"
                  />
                </>
              )}
            </div>

            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Bank payment receipt
              </label>
              <input
                onChange={handleInputs}
                type="file"
                className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Address to which the transcript will be sent"
              />
            </div>
          </div>

          <div className="transcript-header-content">
            <button
              onClick={() => AddStudent()}
              type="button"
              className="my-20 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transcript;
