import React from "react";

const Reply = ({ reply }) => (
  <div className="ml-4">
    <div className="flex items-center space-x-2">
      <img
        src={reply.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
      <p className="font-semibold">
        {reply.snippet.topLevelComment.snippet.authorDisplayName}
      </p>
    </div>
    <p className="mt-2">{reply.snippet.topLevelComment.snippet.textDisplay}</p>
  </div>
);

const Comment = ({ comment }) => (
  <div className="mb-4">
    <div className="flex items-center space-x-2">
      <img
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
      <p className="font-semibold">
        {comment.snippet.topLevelComment.snippet.authorDisplayName}
      </p>
    </div>
    <p className="mt-2">
      {comment.snippet.topLevelComment.snippet.textDisplay}
    </p>
    {/* <div className="mt-2 ml-4">
      {comments.replies &&
        comments.replies.comments.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
    </div> */}
  </div>
);

const CommentSection = ({ comments }) => {
  console.log(comments);
  return (
    <div className="mt-8 bg-black">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {comments?.items.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
