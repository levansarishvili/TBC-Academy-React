import Button from "../../../components/buttons/Button";

function Contact() {
  return (
    <section className="contact-wrapper  flex flex-col items-center gap-20">
      {/* Contact Form */}
      <h1 className="section-header text-4xl font-semibold">Contact</h1>
      <div className="contact-content dark:bg-[#313131] grid grid-cols-2 h-full border rounded-2xl hover:shadow-lg bg-[#f1f3f5] transition-all duration-300">
        <div className="contact-form-wrapper flex flex-col items-center justify-center gap-16 p-16">
          <h2 className="contact-form__title text-[2.2rem] font-semibold">
            Get in touch
          </h2>
          <form
            action=""
            className="contact-form flex flex-col gap-6 items-center justify-center flex-wrap"
          >
            <input
              type="text"
              name=""
              id=""
              className="contact-input dark:bg-[#4a4a4a] w-[35rem] h-12 rounded-md border outline-none border-gray-300 px-4 py-6 text-[1.4rem] transition-all duration-300 focus:border-[#ec5e2a]"
              placeholder="Name"
            />
            <input
              type="text"
              name=""
              id=""
              className="contact-input dark:bg-[#4a4a4a] w-[35rem] h-12 rounded-md border outline-none border-gray-300 px-4 py-6 text-[1.4rem] transition-all duration-300 focus:border-[#ec5e2a]"
              placeholder="Email"
            />
            <input
              type="text"
              name=""
              id=""
              className="contact-input dark:bg-[#4a4a4a] outlined-none w-[35rem] h-12 rounded-md border outline-none border-gray-300 px-4 py-6 text-[1.4rem] transition-all duration-300 focus:border-[#ec5e2a]"
              placeholder="Phone"
            />
            <textarea
              id=""
              className="contact-input dark:bg-[#4a4a4a] w-[35rem] outline-none rounded-md border border-gray-300 px-4 py-6 text-[1.4rem] text-input h-40 transition-all duration-300 focus:border-[#ec5e2a]"
              placeholder="Write text"
            />
            <Button className="btn" name="Send" />
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info flex flex-col items-center justify-start gap-16 p-16 h-full">
          <h2 className="contact-info__title text-[2.2rem] font-semibold">
            Contact info
          </h2>

          <ul className="contact__list flex flex-col gap-20">
            <li className="contact__list__item flex items-center gap-8 text-[1.6rem]">
              <span className="contact__icon-wrapper flex justify-center items-center w-12 h-12 rounded-full bg-[#ec5e2a]">
                <svg
                  className="contact__icon w-8 h-8 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M414.39 97.74A224 224 0 1097.61 414.52 224 224 0 10414.39 97.74zM64 256.13a191.63 191.63 0 016.7-50.31c7.34 15.8 18 29.45 25.25 45.66 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.21-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.08 8.72 21.52 10.08 33.36a305.36 305.36 0 007.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 256.13zm192 192a193.12 193.12 0 01-32-2.68c.11-2.71.16-5.24.43-7 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.68 34.11-33 8.78-13 11.41-30.5 7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35 1.36-16.88 12.42-28 10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.68 5.78 2.14 8.51 7.8 13.7 10.66 9.73 5.34 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.21 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.06 10-21.46 1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 008 3c6.69.44 13-3.18 18.84 1.38 6.48 5 11.15 11.32 19.75 12.88 8.32 1.51 17.13-3.34 19.19-11.86 1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 01105 32.21c-2-.76-4.39-.67-7.34.7-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22 8.5 0 17.11-3.8 14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27 193.27 0 0118 14.14c-.09.09-.18.17-.27.27-5.76 6-12.45 10.75-16.39 18.05-2.78 5.14-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.4 3.74 23.51 8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54 1.43 8.74 9.14 4 13.83-.41a192.12 192.12 0 019.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55 1.47-9.15 1.59-20 2.29-26.94 9.22-6.71 6.68-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.81 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 004.74 30.07A191.75 191.75 0 01256 448.13z" />
                </svg>
              </span>

              <p>Tbilisi 0179, Chavchavadze street #12</p>
            </li>
            <li className="contact__list__item flex items-center gap-8 text-[1.6rem]">
              <span className="contact__icon-wrapper flex justify-center items-center w-12 h-12 rounded-full bg-[#ec5e2a]">
                <svg
                  className="contact__icon w-8 h-8 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z" />
                </svg>
              </span>
              <p>032 227 26 40</p>
            </li>
            <li className="contact__list__item flex items-center gap-8 text-[1.6rem]">
              <span className="contact__icon-wrapper flex justify-center items-center w-12 h-12 rounded-full bg-[#ec5e2a]">
                <svg
                  className="contact__icon w-8 h-8 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
                </svg>
              </span>
              <p>contact@e-shop.ge</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
