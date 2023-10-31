import { useAuthContext } from "../../hooks/useAuthContext";



const DeleteModal = (props) => {

  const { user } = useAuthContext();
  const config = {
    headers: { 'Authorization': 'Bearer ' + user.token }
  }
  return (
    <section>
      <div className="modal is-active is-centered">
        <div className="modal-background">
          <div className="container py-5 px-5">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title" style={{ "color": "red" }}>Deletion</p>
                <button
                  className="delete is-danger"
                  aria-label="close"
                  onClick={props.close}
                ></button>
              </header>
              <section className="modal-card-body">
                <h1 className="title is-2" style={{ "color": "red" }}> Warning !!</h1>
                <hr />
                <p>
                  {" "}
                  The following actions will delete the corresponding blog. Are
                  you sure you want to remove the blog??
                </p>
              </section>
              <footer className="modal-card-foot">
                <button
                  className="button is-danger"
                  onClick={() => props.delete(props.data, config)}
                >
                  DELETE
                </button>
                <button className="button" onClick={props.close}>
                  Cancel
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DeleteModal;
