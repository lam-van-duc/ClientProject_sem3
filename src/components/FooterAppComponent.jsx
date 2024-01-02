const FooterAppComponent = () => {
  const getDateNow = new Date().getFullYear();

  return (
    <footer className="bg-[#fb923c] text-white">
      <div className="flex flex-row flex-wrap  justify-center items-start py-3">
        <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
          <div className="text-base font-bold uppercase">About ITM College</div>
          <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
          <div>
            ITM College is dedicated to providing quality education and
            fostering innovation in technology.
          </div>
        </div>
        <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
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
          <a className="text-white pb-2" href="/Facilities">
            Facilities
          </a>
          <a className="text-white pb-2" href="/Teachers">
            Teachers
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
          <p>024 7300 8855 - 0973 111 086</p>
          <p>
            aptech.fpt@fe.edu.vn Số 8, Tôn Thất Thuyết, Mỹ Đình, Từ Liêm, Hà Nội
          </p>
        </div>
      </div>
      <div className="text-center py-3 border-t border-white">
        <span>&copy; {getDateNow} ITM College. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default FooterAppComponent;
