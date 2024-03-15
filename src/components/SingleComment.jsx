/* eslint-disable react/prop-types */
import { IoArrowUndoSharp } from "react-icons/io5"

const SingleComment = ({ item }) => {
    return (
        <div className="bg-second p-5 flex gap-5 rounded-xl">
            <div className="flex flex-col gap-2 items-center justify-center bg-fourth w-14 h-32 rounded-xl">
                <span className="text-sixth-100 text-2xl font-bold">+</span>
                <span className="text-xl font-bold text-third">{item?.count}</span>
                <span className="text-sixth-100 text-3xl font-bold">-</span>
            </div>
            <div className="w-full space-y-5">
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                        <img src={item?.image} alt="" className="h-10 w-10 rounded-full" />
                        <h3 className="text-xl font-bold">{item?.name}</h3>
                        <p className="text-xl text-sixth-200 font-medium">{item?.time}</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <IoArrowUndoSharp className="text-third text-xl" />
                        <p className="text-xl text-third font-bold">Reply</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl text-sixth-200 font-medium">
                        {item?.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleComment