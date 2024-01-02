const DepartmentComponent = () => {
  const ListDepartment = [
    {
      thumbnail:
        "https://daihoc.fpt.edu.vn/wp-content/uploads/2016/11/cntt-1-373x206.jpg",
      name: "Department of Computer Science",
      information: "Information about the Computer Science department",
    },
    {
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1GvskRSKJwbpHc5fzJr1VNXgMEAPe-X_tcy_GaJ_q4B_M-OyLezGvh9lP_uSkzc5CLc&usqp=CAU",
      name: "Department of Physics",
      information: "Information about the Physics department",
    },
    {
      thumbnail:
        "https://media.istockphoto.com/id/886636648/photo/young-man-is-taking-pictures-with-an-old-camera.jpg?s=612x612&w=0&k=20&c=xhNzBup3llLNBJjj4wU6kO8gmK8xiXIbxKX6cpveUhI=",
      name: "Department of Literature",
      information: "Information about the Literature department",
    },
    {
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4y7zVmHqMDDZPFYCAtIvlWWGYofVYEwNg4AyzbXsRg&s",
      name: "Mathematics Professor",
      information: "Information about the Mathematics Professor",
    },
  ];
  return (
    <>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-3 cursor-pointer">
        {ListDepartment.map((item, index) => {
          return (
            <div className="flex flex-col overflow-hidden rounded-lg border">
              <div className="h-[15rem] hoverScale">
                <img src={item.thumbnail} className="h-full object-cover"></img>
              </div>
              <div className="h-[6rem] p-2">
                <div className="text-center text-base font-bold pb-2">
                  {item.name}
                </div>
                <div className="text-sm line-clamp-3 overflow-ellipsis">
                  {item.information}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default DepartmentComponent;