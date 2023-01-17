import React from 'react';

const Clearance = () => {
  return (
    <>
      <section className="my-3 ">
        <div>
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
                <h6> Application For Clearance </h6>
                <hr className="h-line" />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-10 mx-10">
              <div className="form-group row">
                <label
                  for="staticEmail"
                  className="pt-3 col-sm-2 col-form-label "
                  style={{ fontWeight: 'bold', color: 'black' }}
                >
                  1. Name :
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="border-btm"
                    id="staticEmail"
                    placeholder="student's name "
                  />
                </div>
              </div>

              <div className="mt-2 row">
                <div className=" col-6 form-group row">
                  <label
                    for="staticEmail"
                    className="pt-3 col-sm-4 col-form-label "
                    style={{ fontWeight: 'bold', color: 'black' }}
                  >
                    2. Registration :
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className=" ml-2 border-btm"
                      id="staticEmail"
                      placeholder="student's name "
                    />
                  </div>
                </div>
                <div className=" col-6 form-group row">
                  <label
                    for="staticEmail"
                    className="pt-3 col-sm-4 col-form-label "
                    style={{ fontWeight: 'bold', color: 'black' }}
                  >
                    3. Department :
                  </label>
                  <div className="col-sm-6">
                    <select className=" ml-2 border-btm">
                      <option disabled>your Department</option>
                      <option>CSE</option>
                      <option>EEE</option>
                      <option>SWE</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-2 row">
                <div className=" col-6 form-group row">
                  <label
                    for="staticEmail"
                    className="pt-3 col-sm-4 col-form-label "
                    style={{ fontWeight: 'bold', color: 'black' }}
                  >
                    4. Degree :
                  </label>
                  <div className="col-sm-8">
                    <select className=" ml-2 border-btm">
                      <option>Which degree did you get?</option>
                      <option>BSc</option>
                      <option>MBBS</option>
                      <option>BA</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-div ">
            <div className="table-headline">
              <>The details of the debt owed are given below :</>
            </div>
            <div className="">
              <table className="table-form">
                <tr>
                  <th className="table-th-form" style={{ width: '5%' }}>
                    #
                  </th>
                  <th className="table-th-form" style={{ width: '30%' }}>
                    Office
                  </th>
                  <th className="table-th-form" style={{ width: '15%' }}>
                    not owed
                  </th>
                  <th className="table-th-form" style={{ width: '30%' }}>
                    Details if owed
                  </th>
                  <th className="table-th-form" style={{ width: '20%' }}>
                    Signature
                  </th>
                </tr>
                <tr>
                  <td className="table-td-form">01</td>
                  <td className="table-td-form">Librarian</td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                </tr>
                <tr>
                  <td className="table-td-form">02</td>
                  <td className="table-td-form">Proctor</td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                </tr>
                <tr>
                  <td className="table-td-form">03</td>
                  <td className="table-td-form">
                    Director of Student's advisor committee
                  </td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                </tr>
                <tr>
                  <td className="table-td-form">04</td>
                  <td className="table-td-form">Register</td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                </tr>
                <tr>
                  <td className="table-td-form">05</td>
                  <td className="table-td-form">Medical officer</td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                </tr>
                <tr>
                  <td className="table-td-form">06</td>
                  <td className="table-td-form">
                    Provost (for residencial student)
                  </td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                  <td className="table-td-form"></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="transcript-header-content">
            <button
              type="button"
              className=" py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Request To All
            </button>
          </div>
          <div className="table-div ">
            <div className="">
              <table className="table-form">
                <tr>
                  <td
                    className="table-td-form"
                    style={{ width: '35%', borderBottom: 'underline' }}
                  >
                    Department head
                  </td>
                  <td className="table-td-form" style={{ width: '15%' }}></td>
                  <td className="table-td-form" style={{ width: '30%' }}></td>
                  <td className="table-td-form" style={{ width: '20%' }}></td>
                </tr>
              </table>
            </div>
          </div>

          <div className="transcript-header-content">
            <button
              type="button"
              className="mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clearance;
