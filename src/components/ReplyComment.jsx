/* eslint-disable react/prop-types */
import { IoArrowUndoSharp } from "react-icons/io5"
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const ReplyComment = ({ reply }) => {
    return (
        <div key={reply?.id} className="bg-second p-5 flex gap-5 rounded-xl">
            <div className="flex flex-col gap-2 items-center justify-center bg-fourth w-14 h-32 rounded-xl">
                <span className="text-sixth-100 text-2xl font-bold">+</span>
                <span className="text-xl font-bold text-third">{reply?.count}</span>
                <span className="text-sixth-100 text-3xl font-bold">-</span>
            </div>
            <div className="w-full space-y-5">
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                        <img src={reply?.image} alt="" className="h-10 w-10 rounded-full" />
                        <h3 className="text-xl font-bold">{reply?.name}</h3>
                        <p className="text-xl text-sixth-200 font-medium">{reply?.time}</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        {reply?.user ?
                            <div className="flex items-center gap-x-5">
                                <div  className="flex items-center gap-x-1 text-fifth">
                                    <MdDelete className="text-xl" />
                                    <p className="text-xl font-bold">Delete</p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <MdModeEdit className="text-third text-xl" />
                                    <p className="text-xl text-third font-bold">Edit</p>
                                </div>
                            </div>
                            :
                            <div className="flex items-center gap-x-3">
                                <IoArrowUndoSharp className="text-third text-xl" />
                                <p className="text-xl text-third font-bold">Reply</p>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <p className="text-xl text-sixth-200 font-medium">
                        {reply?.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReplyComment