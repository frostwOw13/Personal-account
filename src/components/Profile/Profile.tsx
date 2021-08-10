/* eslint-disable react/jsx-sort-props */
import React, { useState } from 'react';
import './Profile.scss';

interface ContactData {
  name: string,
  phone: string,
  id: number
}

const Profile: React.FC = () => {
  const [contactsList, setContactsList] = useState<Array<ContactData>>([{name: "John", phone: "8-999-999-99-99", id: 0}]);
  const [contact, setContact] = useState<ContactData>({name: "", phone: "", id: 0});
  const [error, setError] = useState<string>("");

  const submitHandler = () => {
    if (contact.name && contact.phone) {
      setContactsList([...contactsList, contact]);
      setContact({name: "", phone: "", id: Math.ceil(Math.random() * 100000)});
      setError("");
    }
    else setError("Name or phone shouldn't be empty");
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    setContactsList(contactsList.filter((val) => val.id !== id));
  };

  const handleEdit = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    
  };

  return (
    <div className="vh-100">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card bg-dark">
              <div className="card-body p-5">
                {(error !== "") ? (
                  <div className="error">{error}</div>
                ) : ""}
                <form className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <label className="form-label col-6" htmlFor="form1">
                      <input
                        className="form-control col-6"
                        id="form1"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setContact({...contact, name: e.target.value});
                        }}
                        placeholder="Name"
                        type="text"
                        value={contact.name}
                      />
                      <input
                        className="form-control col-6"
                        id="form2"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setContact({...contact, phone: e.target.value});
                        }}
                        placeholder="Phone number"
                        type="text"
                        value={contact.phone}
                      />
                    </label>
                  </div>
                  <button
                    className="btn btn-info ms-2"
                    onClick={submitHandler}
                    type="button">Add</button>
                </form>

                <div className="tab-content" id="ex1-content">
                  <div
                    aria-labelledby="ex1-tab-1"
                    className="tab-pane fade show active"
                    id="ex1-tabs-1"
                  >
                    <ul className="list-group mb-0">
                      {contactsList.map((val) => (
                        <li id={String(val.id)} className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
                          <div className="info">
                            <p>{val.name}</p>
                            <p>{val.phone}</p>
                          </div>
                          <div
                            className="btn-item"
                            aria-hidden="true"
                            id="edit"
                            onClick={(e) => handleEdit(e, val.id)}/>
                          <div
                            className="btn-item"
                            aria-hidden="true"
                            id="delete"
                            onClick={(e) => handleDelete(e, val.id)}/>
                        </li>
                        )
                      )}
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
};

export default Profile;
