import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const EditModal = (props) => {
  //HOOKS
  let [title, setTitle] = useState(props.blog.title);
  let [body, setBody] = useState(props.blog.body);
  const { user } = useAuthContext();

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };

  const update = () => {
    const config = {
      headers: { 'Authorization': 'Bearer ' + user.token }
    }
    let editedBlog = {
      title: title,
      body: body,
      description: props.blog.description,
    };
    //console.log("IN MODAL",editedBlog);
    props.edit(props.blog._id, editedBlog, config);
  };

  return (
    <section>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="container py-5 px-5">
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title" style={{ color: "blue" }}>
                Update
              </p>
              <button
                className="delete is-danger"
                aria-label="close"
                onClick={props.close}
              />
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label" style={{ fontFamily: "cursive" }}>
                  Title
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Update your Blog's title"
                    style={{ borderRadius: "3rem" }}
                    onChange={handleChangeTitle}
                    value={title}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" style={{ fontFamily: "sans-serif" }}>
                  Body
                </label>

                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Enter your Blog here"
                    rows={15}
                    style={{ borderRadius: "1.8rem" }}
                    onChange={handleChangeBody}
                    value={body}
                  ></textarea>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-link" onClick={update}>
                Update
              </button>
              <button className="button" onClick={() => props.close()}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EditModal;
