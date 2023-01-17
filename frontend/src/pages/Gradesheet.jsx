import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Gradesheet = () => {
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
              <h6> Application for Gradesheet </h6>
              <hr className="h-line" />
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="flex mt-100">
            <div className="text-align-center">
              <div className="semester">
                <Form.Select size="lg" name="role" placeholder="Role">
                  <option value="" disabled selected>
                    Which semester's gradesheet do you want?
                  </option>
                  <option>1st semester</option>
                  <option>2nd semester</option>
                  <option>3rd semester</option>
                  <option>4th semester</option>
                  <option>5th semester</option>
                  <option>6th semester</option>
                  <option>7th semester</option>
                  <option>8th semester</option>
                  <option>9th semester</option>
                  <option>10th semester</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <div className="relative px-3 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Full Name :
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="student's full name"
              />
            </div>

            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Full Name (in Bangla) :
              </label>
              <input
                onChange={(e) => setRoll(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Student's name in Bangla"
              />
            </div>
            <div className="relative px-3 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Father's Name:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Father's full name in english"
              />
            </div>
            <div className="relative px-3 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Father's Name (in bangla):
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Father's full name in Bangla"
              />
            </div>
            <div className="relative px-3 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Father's Name:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-element"
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
                onChange={(e) => setStdID(e.target.value)}
                type="text"
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
                onChange={(e) => setStdID(e.target.value)}
                type="text"
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
                onChange={(e) => setAge(e.target.value)}
                type="text"
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
                onChange={(e) => setClass(e.target.value)}
                type="text"
                className="form-element"
                placeholder="student's school name"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Name of Exam & year:
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Exam's name and year"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                CGPA 
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Which semeste's gradesheet do you want?"
              />
            </div>
            
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                letter Grade
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Which semeste's gradesheet do you want?"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Permanent Address
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Student's permanent Address"
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
                onChange={(e) => setHallName(e.target.value)}
                type="text"
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
                className="form-element"
                placeholder="Student's mobile number"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Nationality
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
                type="text"
                className="form-element"
                placeholder="Student's nationality"
              />
            </div>
            <div className="relative px-2 w-1/2">
              <label
                for="name"
                className="block text-md py-3 font-medium text-gray-700"
              >
                Bank payment receipt
              </label>
              <input
                onChange={(e) => setHallName(e.target.value)}
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

export default Gradesheet;
