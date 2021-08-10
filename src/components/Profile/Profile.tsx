import React from 'react';
import './Profile.scss';

const Profile: React.FC = () => (
  <div className="vh-100">
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card bg-dark">
            <div className="card-body p-5">
              <form className="d-flex justify-content-center align-items-center mb-4">
                <div className="form-outline flex-fill">
                  <label className="form-label col-12" htmlFor="form1">
                    <input
                      className="form-control"
                      id="form1"
                      placeholder="New task..."
                      type="text"
                    />
                  </label>
                </div>
                <button className="btn btn-info ms-2" type="button">Add</button>
              </form>

              <div className="tab-content" id="ex1-content">
                <div
                  aria-labelledby="ex1-tab-1"
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                >
                  <ul className="list-group mb-0">
                    <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
                      <input
                        aria-label="..."
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                      />
                      <s>Cras justo odio</s>
                      <div className="btn-item" id="edit" />
                      <div className="btn-item" id="delete"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
