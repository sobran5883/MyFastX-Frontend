import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import icon1 from '../../assets/ChatWithCoustomer/Icon.png'
import icon2 from  '../../assets/ChatWithCoustomer/Layer 2 1.png'
import icon3 from '../../assets/ChatWithCoustomer/Vector.png'
import icon4 from '../../assets/ChatWithCoustomer/Icon (1).png'
import icon5 from '../../assets/ChatWithCoustomer/Icon (3).png'
import icon6 from '../../assets/ChatWithCoustomer/Icon (4).png'
import icon7 from '../../assets/ChatWithCoustomer/Icon (5).png'
import icon8 from '../../assets/ChatWithCoustomer/Rectangle 136.png'
import icon9 from '../../assets/ChatWithCoustomer/Vector(1).png'
import icon10 from '../../assets/ChatWithCoustomer/Icon (6).png'
import icon11 from '../../assets/ChatWithCoustomer/Icon (7).png'
import icon12 from '../../assets/ChatSupport/search 2.png'
import icon13 from '../../assets/ChatSupport/icListView.png'
import icon14 from '../../assets/ChatSupport/icGridview.png'
import icon15 from '../../assets/ChatSupport/Ellipse 498.png'
import icon16 from '../../assets/ChatSupport/Ellipse 499.png'
import icon17 from '../../assets/ChatSupport/Ellipse 499 (1).png'
import icon18 from '../../assets/ChatSupport/Ellipse 499 (2).png'
import icon19 from '../../assets/ChatSupport/avatar.jpg'
// Import other icons...

// Example starting state for openTickets
const initialTickets = [
  // {
  //   name: "John Doe",
  //   phone: "+91 123456789",
  //   function: "Customer",
  //   supportId: "12345",
  //   dateTime: "03/11/2023 15:55",
  //   profilePic: icon15, // Example of assigning an icon
  // },
  // Add more ticket objects as needed...
];

const ChatSupport = () => {
  const [openTickets, setOpenTickets] = useState(initialTickets);
  const navigate = useNavigate();

  // Placeholder for the refresh method
  const refresh = async () => {
    const getResponse = await fetch("https://emonoid.com/api/v1/notification/support/openTickets");

      if (!getResponse.ok) {
        throw new Error('GET request failed');
      }

      const updatedTicketsData = await getResponse.json();
    // Here you would fetch the latest tickets data from your backend or another source
    // For demonstration, let's assume the fetch operation is simulated with a static update
     setOpenTickets(updatedTicketsData.openTickets);

    console.log('Refreshing tickets...'); // For demonstration purposes
    // Assuming this is where you would update the state with new data
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refresh();
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
       <div className="flex flex-row gap-10 font-Barlow">
        {/* 2nd row */}
        <div className=" font-Cairo w-[90%] mt-5 pl-10">
          <div className="flex flex-row  items-center gap-[323px] ">
            <p className="font-[700] text-[34px]">Chat Support</p>
            <div className="flex flex-row  items-center gap-10">
              <div className=" flex flex-row gap-4 bg-white rounded-[14px] w-[400px] h-fit p-3">
                <img
                  className="w-[28px] h-[28px] "
                  src={icon12}
                  alt=""
                />
                <input
                  type="text"
                  className="w-full"
                  placeholder="Search here"
                />
              </div>
              <img className="w-[68px] h-[68px]" src={icon13} alt="" />
              <img className="w-[68px] h-[68px]" src={icon14} alt="" />
            </div>
          </div>
          <p className=" font-Barlow font-[500] text-[25px]  mb-5">
            Active Requests
          </p>
          <table className="w-full table-auto">
            <thead className="text-gray-400  font-Cairo text-[15px] font-[700]">
              <tr className="" >
                  <th>
                    <div className="w-full flex">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                      NAME
                      </p>
                    </div>
                  </th>
                  
                  <th>
                    <div className="w-full flex ">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Ticket ID
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex ">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        DATE/TIME
                      </p>
                    </div>
                  </th>
                </tr>
            </thead>
            <tbody>
              {openTickets.map((ticket, index) => (
                <tr key={index}>
                  <td className="pt-6">
                    <div className="flex w-full ">
                      <div className="flex flex-row items-center gap-1">
                        <img className="w-[60px] h-[60px]" src={icon19} alt="" />
                        <div className="flex flex-col">
                          <p className="font-Barlow font-[600] text-[18px]">{ticket.userName}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="pt-6">
                    <p className="font-Barlow font-[600] text-[18px] text-[#243B53]">
                      {ticket.ticketId}
                    </p>
                  </td>
                  <td className="pt-6">
                    <p>{ticket.timestamp}</p>
                  </td>
                  <td className="pt-6">
                    <button onClick={() => navigate(`/fastx/admin/open_chat/${ticket.ticketId}`)} className="underline">
                      Start Chat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ChatSupport;
