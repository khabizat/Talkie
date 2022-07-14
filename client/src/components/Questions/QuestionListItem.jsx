import React from "react";

export default function QuestionListItem(props) {
  const { id, setQuestionId, name, date, user, tag } = props;

  return (

    <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto bg-blue-50 rounded-lg border p-5 shadow-lg dark:bg-gray-800 transition hover:bg-blue-100 hover:border-blue-100 hover:scale-105">
      {/* Header of the container */}
      <div className="flex items-center justify-between">
      <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg')]"></div>
      <span className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{user}</span> 
      <a className="text-xs text-neutral-500">{date}</a>
    </div> 
    {/* Body of the container */}
    <div className="mt-2">
      <a className="text-2xl font-bold text-gray-600 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">{name}</a> 
    </div> 
    {/* Footer of the container */}
    <div className="flex items-center justify-between mt-4">
      <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold  text-neutral-500">{tag} tag here</button>
      <div className="flex items-center">
      <button onClick={() => setQuestionId(id)} class="text-blue-600 dark:text-blue-400 hover:underline hover:cursor-pointer ">Listen to the answers ⟶</button>
    </div>
    </div>
  </div>

  );
}
