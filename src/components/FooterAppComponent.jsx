const FooterAppComponent = () => {
  const getDateNow = new Date().getFullYear();

  return (
    <footer className="bg-[#fb923c] text-white pt-2">
      <div className="container grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
          <div className="text-base font-bold uppercase">About ITM College</div>
          <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
          <div>
            ITM College is dedicated to providing quality education and
            fostering innovation in technology.
          </div>
          <div className="my-2">
            <a
              href="/StudentRegistration"
              className="bg-blue-800 text-center no-underline text-white text-base py-2 px-4"
            >
              Register now
            </a>
            <a
              className=" text-xl font-bold py-2 px-4  hover:bg-blue-900 text-center"
              style={{ textDecoration: "none" }}
            ></a>
          </div>
        </div>
        <div className="flex flex-col flex-1 max-w-xs text-sm px-2">
          <div className="text-base font-bold uppercase">Quick link</div>
          <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
          <a className="text-white pb-2" href="/">
            Home
          </a>
          <a className="text-white pb-2" href="/Courses">
            Courses
          </a>
          <a className="text-white pb-2" href="/StudentRegistration">
            Student registration
          </a>
          <a className="text-white pb-2" href="/Department">
            Department
          </a>
          <a className="text-white pb-2" href="/Faculty">
            Faculty
          </a>
          <a className="text-white pb-2" href="/Contact">
            Contact
          </a>
          <a className="text-white pb-2" href="/Feedback">
            Feedback
          </a>
        </div>
        <div className="flex flex-col flex-1 max-w-xs text-sm px-2">
          <div className="text-base font-bold uppercase">CONTACT</div>
          <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
          <p>+01 123 456 789</p>
          <p>Support@domain.com - Contact@domain.com</p>
          <p>107, Broklyn Golden Road Street. New York, USA.</p>
        </div>
      </div>
      <div className="text-center py-3 border-t border-white">
        <span>&copy; {getDateNow} ITM College. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default FooterAppComponent;
