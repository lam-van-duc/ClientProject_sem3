const SuccessEnrollmentRegistration = () => {
  return (
    <>
      <div className="container mx-auto my-5">
        <div className="text-center text-green-500 text-[4rem] font-bold">
          <i class="far fa-check-circle text-[8rem]"></i>
          <div>Thank you !</div>
        </div>
        <div className="text-xl text-center">
          <p>
            You have successfully submitted your enrollment information, we will
            send you an email. Please check your mailbox regularly.
          </p>
        </div>
        <div className="text-center">
          <a href="/" className="button-app">
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
};

export default SuccessEnrollmentRegistration;
