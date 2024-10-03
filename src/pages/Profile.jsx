import "./Profile.css";

function Profile() {
  return (
    <main className="main">
      <section className="profile-wrapper">
        <h1 className="section-header">ჩემი პროფილი</h1>
        <div className="profile-content">
          {/* User Media */}
          <div className="profile-media-wrapper">
            <div className="profile__img-wrapper">
              <div className="profile__img-box">
                <img
                  className="profile__img"
                  src="../../assets/user-bold.svg"
                  alt="User"
                />
              </div>
              <div className="profile__img-edit">
                <svg
                  className="edit-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                </svg>
                <p>Edit</p>
              </div>
            </div>

            <p className="profile-txt">სახელი:</p>
            <p className="profile-txt">გვარი:</p>
            <p className="profile-txt">ტელეფონი:</p>
            <p className="profile-txt">ასაკი:</p>
            <p className="profile-txt">ელ.ფოსტა:</p>
          </div>

          {/* User Info */}
          <div className="profile__info">
            <h2 className="profile-info-header">პროფილის დეტალები</h2>
            <form action="" className="profile__form">
              <div className="input-box">
                <label className="input-label" htmlFor="fname">
                  სახელი:
                </label>
                <input className="profile__input" type="text" id="fname" />
              </div>
              <div className="input-box">
                <label className="input-label" htmlFor="lname">
                  გვარი:
                </label>
                <input className="profile__input" type="text" id="lname" />
              </div>
              <div className="input-box">
                <label className="input-label" htmlFor="age">
                  ასაკი
                </label>
                <input className="profile__input" type="text" id="age" />
              </div>
              <div className="input-box">
                <label className="input-label" htmlFor="phone">
                  ტელეფონი:
                </label>
                <input className="profile__input" type="text" id="phone" />
              </div>
              <div className="input-box">
                <label className="input-label" htmlFor="email">
                  ელ.ფოსტა
                </label>
                <input className="profile__input" type="text" id="email" />
              </div>
            </form>

            <Button />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;

function Button() {
  return <button className="btn">შენახვა</button>;
}