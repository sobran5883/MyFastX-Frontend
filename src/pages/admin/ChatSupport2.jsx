import React, { useState, useEffect } from 'react';
import icon12 from '../../assets/ChatSupport2/ep_back.png';
import icon13 from '../../assets/ChatSupport2/Ellipse 498.png';
import icon14 from '../../assets/ChatSupport2/Ellipse 499.png';
import icon15 from '../../assets/ChatSupport2/Plus.png';
import icon16 from '../../assets/ChatSupport2/Plus (1).png';
import { useNavigate,useParams } from 'react-router-dom';

const ChatSupport2 = () => {
  const navigate = useNavigate();

  const { ticketId } = useParams();

  const [message, setMessage] = useState('');

  const handleKeyDown = (e) => {
    // Check if the key pressed is the Enter key
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action to avoid form submission or other unwanted behaviors
      sendMessage();
    }
  };

  const sendMessage = async () => {
    console.log('Sending message:', message);
    const postResponse = await fetch('https://emonoid.com/api/v1/notification/chat/executive-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Include other headers as needed
          },
          body: JSON.stringify({ticketId,message
            // Your POST body here
          }),
        });
    setMessage("");
    // Implement your message sending logic here.
    // This could include calling an API, updating a state, etc.
  };

  // Initialize chatMessages state
  const [chatMessages, setChatMessages] = useState([]);
  
  useEffect(() => {
    const getMessages = async () =>{
      // const fetchedMessages = [
      //   { id: 1, sender: 'customer', text: 'Hey!' },
      //   { id: 2, sender: 'support', text: 'How Can I Help You?' },
      //   { id: 3, sender: 'support', text: 'Feel free to ask any help or queries' },
      //   { id: 4, sender: 'customer', text: 'Where to check My orders?' },
      //   { id: 5, sender: 'customer', text: 'Thank You for helping' },
      //   { id: 6, sender: 'support', text: 'Feel free to ask any help or queries' },
      //   { id: 7, sender: 'customer', text: 'Thanks.!' },
      // ];
      // GET request to fetch messages
      const getResponse = await fetch(`https://emonoid.com/api/v1/notification/support/getMessages/${ticketId}`);

      if (!getResponse.ok) {
        throw new Error('GET request failed');
      }

      const messagesResult = await getResponse.json();

      // Assuming the response contains an array of messages
      setChatMessages(messagesResult.chatMessages);
    }
    
    const postAndFetchMessages = async () => {

      try {
        // POST request to accept endpoint
        const postResponse = await fetch('https://emonoid.com/api/v1/notification/support/accept', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Include other headers as needed
          },
          body: JSON.stringify({
            executiveId:JSON.parse(localStorage.getItem("adminDetails")).email,
            ticketId
          }),
        });

        if (!postResponse.ok) {
          throw new Error('POST request failed');
        }

        const postResult = await postResponse.json();

        // Check if the POST request was successful
        if (postResult.success) {
          const interval = setInterval(() => {
            getMessages();
          }, 1000);
      
          // Cleanup on component unmount
          return () => clearInterval(interval);
        }
      } catch (error) {
        console.error('Failed to fetch chat messages:', error);
      }
    };

    postAndFetchMessages();
  }, [ticketId]); // Re-run this effect if the ticketId changes

  
  return (
    <>
      <div className="flex flex-row gap-10 font-Barlow">
        {/* 2nd row  */}
        {/* <div className="flex w-1/5 flex-col  mt-10 items-center ">
          <div className="flex gap-7 justify-between mb-5">
            <button onClick={()=>navigate(-1)}><img src={icon12} alt="" /></button>
            <span className="font-[400]">
              {" "}
              <span className="font-[600] text-[18px]">Support ID :</span>12345
            </span>
          </div>

          <img
            className="w-[140px] h-[140px]"
            src={icon13}
            alt=""
          />
          <p className="font-[600]">Jhon Doe</p>
          <p className="font-[400]">+91 1234567890</p>
          <p className="font-[400]">Customer</p>
          <span className="font-[400] my-5">
            
            <span className="font-[600]">Customer ID :</span>59013456
          </span>
          <span className="font-[400]">
            
            <span className="font-[600]">Email :</span>johndoe@somethigh.com
          </span>
          <button
            type="submit"
            class="bg-[#62b179]  hover:bg-[#29693b] mb-10 text-white font-semibold  rounded-xl py-2 px-  mt-3 lg:w-3/5 w-fit h-fit "
          >
            RESOLVE
          </button>
        </div> */}
        {/* 3rd row  */}
        <div className="chat-messages-width mt-10 pr-10" >
          <p className=" text-center">Today 10:27pm</p>
          <div className="chat-messages-container flex mt-10 flex-col gap-10">
            {chatMessages.map((message,index) => (
              <div key={index} className={`flex flex-row ${message.sender === 'Support' ? 'flex-row-reverse' : ''} items-center rounded-3xl gap-6`}>
                {message.sender === 'customer' && <img className="w-[60px] h-[60px]" src={icon14} alt="" />}
                <div className={`text-[#F6F6F6] rounded-xl ${message.sender === 'Support' ? 'bg-[#D9E2EC] text-black' : 'bg-[#2186EB]'} p-3`}>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input field section */}
          <div className="flex flex-row w-full h-fit my-10 gap-4">
            <img src={icon15} alt="" />
            <input
              type="text"
              className="w-full"
              placeholder="Message"
              onKeyDown={handleKeyDown}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <img src={icon16} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSupport2;
