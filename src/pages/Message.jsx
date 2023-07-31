import { Link, useNavigate, useParams } from "react-router-dom";
import NewRequest from "../utils/NewRequest.js";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loading from "../components/Loading";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmile, BsMic } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import moment from "moment";
import { AiOutlineSearch } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";

const Index = () => {
  const User = JSON.parse(localStorage.getItem("currentUser"));
  const { id } = useParams();
  const [MESSAGE, setMESSAGE] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: messages,
    refetch: refetchMessages,
  } = useQuery({
    queryKey: "Messages",
    queryFn: () => NewRequest(`/messages/${id}`).then((res) => res.data),
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (message) => NewRequest.post("/createmessage", message),
    onSuccess: () => {
      queryClient.invalidateQueries("Messages");
      window.scrollTo(0, document.body.scrollHeight);
    },
  });
  const {
    isLoading: isLoadingConv,
    error: errorConv,
    data: Conv,
    refetch,
  } = useQuery({
    queryKey: "Conv",
    queryFn: () => NewRequest(`/getConversation/${id}`).then((res) => res.data),
  });

  const {
    isLoading: isLoadingAllConvs,
    error: errorAllConvs,
    data: AllConversations,
    refetch: refetchAllConvs,
  } = useQuery({
    queryKey: "Conversation",
    queryFn: () => NewRequest(`/getAllConversations`).then((res) => res.data),
  });
  useEffect(() => {
    // window.scrollTo(0, document.body.scrollHeight);
    refetch();
    refetchMessages();
  }, [id]);
  useEffect(() => {
    // window.scrollTo(0, document.body.scrollHeight);
    refetchAllConvs();
  }, [messages]);

  const handleConv = async (item) => {
    navigate(`/message/${item?.id}`);
  };
  const handleEmojie = (e) => {
    setMESSAGE(MESSAGE + e.native);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      desc: MESSAGE,
      conversationId: id,
    };
    // @ts-ignore
    mutation.mutate(newMessage);
    setMESSAGE("");
  };

  if (isLoading || isLoadingAllConvs || isLoadingConv) return <Loading />;
  if (error || errorAllConvs || errorConv) return <h1>error</h1>;
  return (
    <div className="flex w-full  h-[100vh] fixed top-0 bottom-0 left-0 right-0 ">
      <div className="w-[25%] bg-gray-100  border-r border-r-gray-300">
        <div className="flex justify-between h-[100px] items-center border-b border-gray-300 px-4 fixed right-[75%] top-0 left-0  ">
          <Link to={"/messages"} className="font-bold text-[35px]">Chats</Link>
          <div className="flex gap-3">
            <button className="text-[25px] bg-gray-300 rounded-full p-2">
              <AiOutlineSearch />
            </button>
            <button className="text-[25px] bg-gray-300 rounded-full p-2">
              <GiSettingsKnobs />
            </button>
          </div>
        </div>

    <div className="mt-[100px] ">
    {AllConversations?.map((item, index) => (
          <div
            onClick={() => {
              handleConv(item);
            }}
            key={index}
            className={`${id == item?.id && "bg-gray-300"} cursor-pointer  truncate flex justify-between h-[100px] items-center border-b border-gray-300 px-4`}
          >
            <div className="flex gap-3">
              <img
                src={
                  (User.isSeller ? item?.buyerImg : item?.sellerImg) ||
                  "/no_avatar.png"
                }
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover"
              />
              <div className="">
                <h1 className="font-bold text-[20px]">
                  {User.isSeller ? item?.buyerUsername : item?.sellerUsername}
                </h1>
                <h1  className="text-gray-500 text-[17px] max-w-[250px] truncate  ">
                  {item?.lastMessage || "..."}
                </h1>
                <p className="text-gray-500 text-[11px]">
                  {moment(item?.updatedAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
      </div>

      <div className="w-[75%] overflow-auto mb-[100px]">
        <div className="">
          <div
            className={`border-b border-gray-300 fixed left-[25%] top-0 right-0 h-[100px] bg-gray-50 px-[15px]  items-center flex gap-3`}
          >
            <div className="">
              <img
                src={
                  (User.isSeller ? Conv.buyerImg : Conv.sellerUserImg) ||
                  "/no_avatar.png"
                }
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover"
              />
            </div>
            <Link className="font-bold text-[25px]" to={""}>
              {(User.isSeller ? Conv.buyerUsername : Conv.sellerUsername) ||
                "user"}
            </Link>
          </div>
          <div className="mb-[50px] mt-[150px] px-[15px]">
            {messages?.map((message, index) => (
              <div
                dir={message?.userId === User?._id ? "rtl" : "ltr"}
                key={index}
                className="flex gap-3  flex-1 max-w-[100%]  my-[5px] "
              >
                {message?.userId !== User?._id && (
                  <div className="">
                    <img
                      src={"/no_avatar.png"}
                      alt=""
                      className="h-[40px] w-[40px] rounded-full object-cover"
                    />
                  </div>
                )}
                <div className="max-w-[50%]">
                  <div
                    style={{ wordWrap: "break-word" }}
                    className={` w-full rounded-3xl font-semibold p-4 text-gray-700 ${
                      message?.userId === User?._id
                        ? "bg-[#0084FF] text-white"
                        : "bg-[#e4e3e3]"
                    } `}
                  >
                    <p dir="ltr" className="w-full">
                      {message?.desc}
                    </p>
                  </div>
                  <p
                    dir="ltr"
                    className={`text-gray-500 text-[13px] px-2 py-1 ${
                      message?.userId === User?._id ? "text-end" : "text-start"
                    }`}
                  >
                    {moment(message.createdAt).format('LT')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex items-center justify-between fixed bottom-0 h-[100px] border-t border-gray-300 px-10 bg-gray-50 right-0 left-[25%] gap-5 "
        >
          {showEmoji && (
            <div className="absolute top-[-437px] left-[100px]">
              <Picker theme="light" data={data} onEmojiSelect={handleEmojie} />
            </div>
          )}
          <div className="flex gap-3 text-[25px] text-gray-600">
            <span className="hover:text-[--primaryColor] transition-all cursor-pointer hover:opacity-[0.90]">
              <BsMic />
            </span>
            <span className=" transition-all cursor-pointer hover:opacity-[0.90]">
              <MdOutlineAttachFile className="hover:text-[--primaryColor] rounded-full" />
            </span>
            <span
              onClick={() => setShowEmoji(!showEmoji)}
              className="hover:text-[--primaryColor] transition-all cursor-pointer hover:opacity-[0.90]"
            >
              <BsEmojiSmile />
            </span>
          </div>
          <input
            type="text"
            className=" p-4 outline-none w-full font-bold border-[2px] rounded-3xl"
            placeholder="send your message..."
            value={MESSAGE}
            onChange={(e) => setMESSAGE(e.target.value)}
          />
          <button
            className={`text-[25px]  text-white text-bold p-2  rounded-full outline-none ${
              MESSAGE ? "bg-[--primaryColor]" : "bg-gray-500"
            }`}
          >
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
