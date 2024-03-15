import user1 from "../assets/images/user1.jpg"
import user2 from "../assets/images/user2.jpg"
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";

const Comments = () => {
    return (
        <section className="max-w-[800px] mx-auto px-5 py-20">
            <div className="space-y-10">
                {
                    comments.map(item =>
                        <div key={item?.id}>
                            <SingleComment item={item}/>
                            <div className="mt-10">
                                <div className="w-full pl-20 relative space-y-10">
                                    <p className="absolute w-[1px] h-[calc(100%-20px)] top-0 left-10 bg-sixth-100"></p>
                                    {
                                        item.reply.map(reply =>
                                           <ReplyComment key={reply?.id} reply={reply}/>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>

            <div className="bg-second p-5 flex gap-5 rounded-xl mt-10">
                <div className="flex gap-x-5 w-full">
                    <div className="w-20">
                        <img src={user2} alt="" className="h-12 w-12 rounded-full" />
                    </div>
                    <div className="w-full">
                        <textarea type="text" placeholder="Add a comment..." className="border min-w-full h-32 py-4 px-5 text-lg font-medium focus:ring-0 focus:outline-none rounded-lg" />
                    </div>
                    <div className="w-32">
                        <button className="bg-third text-second w-32 h-12 text-xl font-medium rounded-lg">SEND</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments

const comments = [
    {
        id: 1,
        image: user1,
        name: "amyrobson",
        time: "1 month ago",
        comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, temporibus labore qui ea quidem veritatis enim voluptates magnam, excepturi vitae vero fuga quam placeat nam. Quo, eligendi. Aliquid rerum facere blanditiis, ex.",
        count: "12",
        user: null,
        reply: []
    },
    {
        id: 2,
        image: user2,
        name: "maxblagun",
        time: "1 month ago",
        comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, temporibus labore qui ea quidem veritatis enim voluptates magnam, excepturi vitae vero fuga quam placeat nam. Quo, eligendi. Aliquid rerum facere blanditiis, ex.",
        count: "5",
        user: null,
        reply: [
            {
                id: 1,
                image: user1,
                name: "ramsesmiron",
                time: "1 week ago",
                comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, temporibus labore qui ea quidem veritatis enim voluptates magnam, excepturi vitae vero fuga quam placeat nam. Quo, eligendi. Aliquid rerum facere blanditiis, ex.",
                count: "4",
                user: null,
            },
            {
                id: 2,
                image: user2,
                name: "juliusomo",
                time: "2 days ago",
                comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, temporibus labore qui ea quidem veritatis enim voluptates magnam, excepturi vitae vero fuga quam placeat nam. Quo, eligendi. Aliquid rerum facere blanditiis, ex.",
                count: "2",
                user: "user"
            }
        ]
    }
]