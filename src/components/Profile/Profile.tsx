/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [mode, setMode] = useState<string>("add");
  const [error, setError] = useState<string>("");

  const submitHandlerAdd = () => {
    if (contact.name && contact.phone) {
      setContactsList([...contactsList, {...contact, id: Math.trunc(Math.random() * 100000)}]);
      setContact({name: "", phone: "", id: 0});
      setError("");
    }
    else setError("Name or phone shouldn't be empty");
  };

  const submitHandlerUpdate = () => {
    if (contact.name && contact.phone) {
      contactsList.forEach((el) => {
        if (el.id === contact.id) {
          el.name = contact.name;
          el.phone = contact.phone;
        }
      });
      setContact({...contact, name: "", phone: ""});
      setError("");
      setMode("add");
    }
    else setError("Name or phone shouldn't be empty");
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    setContactsList(contactsList.filter((contactItem) => contactItem.id !== id));
  };

  const handleEdit = (e: React.MouseEvent<HTMLDivElement>, contactItem: ContactData) => {
    setMode("update");
    setContact(contactItem);
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
                <form className="d-flex justify-content-center align-items-center mb-4 form-contact">
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
                  {mode === "add" ? (<button
                    className="btn btn-info ms-2"
                    onClick={submitHandlerAdd}
                    type="button">Add</button>
                    ) : (
                    <button
                    className="btn btn-info ms-2"
                    onClick={submitHandlerUpdate}
                    type="button">Update</button>
                    )}
                </form>
                <input
                  className="form-control search"
                  id="form3"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchTerm(e.target.value);
                  }}
                  placeholder="Search by name..."
                  type="text"
                  value={searchTerm}/>
                <div className="tab-content" id="ex1-content">
                  <div
                    aria-labelledby="ex1-tab-1"
                    className="tab-pane fade show active"
                    id="ex1-tabs-1"
                  >
                    <ul className="list-group mb-0">
                      {contactsList.filter((val) => {
                        if (searchTerm === "") return val;
                        if (searchTerm && val.name.toLowerCase().includes(searchTerm.toLowerCase())) return val;
                      }).map((contactItem) => (
                        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                          id={String(contactItem.id)} key={String(contactItem.id)}>
                          <div className="info">
                            <p>{contactItem.name}</p>
                            <p>{contactItem.phone}</p>
                          </div>
                          <div
                            aria-hidden="true"
                            className="btn-item"
                            id="edit"
                            onClick={(e) => handleEdit(e, contactItem)}/>
                          <div
                            aria-hidden="true"
                            className="btn-item"
                            id="delete"
                            onClick={(e) => handleDelete(e, contactItem.id)}/>
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
