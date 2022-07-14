import React from "react";

export default function AnswerListItem(props) {
  const { answer_id, audio_url, date, user_name, setAnswerId } = props;

  return (
    <div>
      <div className="max-w-2xl w-9/12 px-8 py-4 mx-auto bg-blue-50 rounded-lg border p-5 shadow-lg transition hover:bg-blue-100 hover:border-blue-100">
        {/* Header of the container */}
        <div className="flex items-center justify-between">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg')]"></div>
              <span className="font-bold text-gray-700 cursor-pointer">
                {user_name}
              </span>
              <span className="text-xs text-neutral-500">{date}</span>
    
            </div>
            {/* Body of the container */}
            <div className="mt-2">
              <span className="text-xl font-bold text-gray-600 hover:text-gray-600">
                {audio_url}
              </span>
            </div>
            {/* Footer of the container */}
            {/* <div className="flex items-center justify-between mt-4"> */}
              <div className="grid justify-items-end">
                <button
                  onClick={() => setAnswerId(answer_id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </button>
              </div>
            {/* </div> */}


      </div>
    </div>
  );
}
