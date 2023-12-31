import React from "react";
import useClasses from "../../componenets/useClasses";

const MyClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div>
      <div className="overflow-x-auto px-10 mt-20">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th></th>
              <th>Name</th>
              <th>Enroll Student</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((myClass, index) => (
              <tr key={myClass._id}>
                <th>{index + 1}</th>
                <td>{myClass.className}</td>
                <td>{myClass.enrolledStudents}</td>
                <td>{myClass.status}</td>
                <td>
                  <small>
                    {myClass.status === "denied" && myClass.feedback}
                  </small>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
