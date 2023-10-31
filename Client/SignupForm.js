import React from 'react'

export default function SignupForm({ setEmail, setPassword, save, error, isLoading }) {

    /**
     * Handles the email
     * @param {*} e 
     */
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    return (
        <section>
            <div className="hero is-medium has-text-centered">
                <h6 className="title is-2" style={{ fontStyle: "italic" }}>
                    Sign Up
                </h6>
                <hr />
            </div>
            <div className="field">
                <label className="label" style={{ fontFamily: "cursive" }}>
                    Email
                </label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter your Email"
                        onChange={handleEmail}
                        style={{ borderRadius: "3rem" }}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label" style={{ fontFamily: "cursive" }}>
                    Password
                </label>
                <div className="control centered">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter your Password"
                        onChange={handlePassword}
                        style={{ borderRadius: "3rem" }}
                    />
                </div>
            </div>
            <div className="field">
                <div className="field-label"></div>
                <div className="field-body">
                    <div className="field">

                        <div className="control">
                            <button
                                className="button is-link"
                                onClick={() => save()}
                                type="submit"
                                disabled={isLoading}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {error && (
                <section className='section is-small'>
                    <div className="notification is-danger is-light" style={{ fontFamily: "cursive" }}>
                        {error}
                    </div>
                </section>
            )}
        </section>
    )
}
