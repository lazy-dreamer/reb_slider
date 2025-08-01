import React from "react";
import s from "./rate_list.module.scss";

interface Props {
  className?: string,
  rate:number
}

export const RateList:React.FC<Props> = ({className='', rate}) => {
  const roundedRating = Math.floor(rate);
  return <ul className={`${className} ${s.list}`}>
    {Array.from({ length: 5 }, (_, i) => (
      <li key={i} className={`${i < roundedRating ? "active" : ""} ${s.list_item}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <path fill="#EBECEE"
                d="m14.927 8.89-1.44-5.358a2.16 2.16 0 0 0-1.519-1.52L6.61.572c-.74-.2-1.52.02-2.059.56L.633 5.053a2.122 2.122 0 0 0-.56 2.058l1.44 5.358c.2.74.779 1.32 1.519 1.52l5.358 1.44c.74.2 1.52-.02 2.059-.56l3.918-3.92c.54-.539.76-1.319.56-2.058Zm-3.119-1.52L10.29 8.85c-.16.16-.22.38-.2.58l.36 2.099c.1.54-.48.96-.96.7l-1.879-.98c-.2-.1-.42-.1-.62 0l-1.88.98a.661.661 0 0 1-.959-.7l.36-2.1a.623.623 0 0 0-.2-.58L2.791 7.37a.652.652 0 0 1 .36-1.12l2.1-.3c.22-.04.4-.16.5-.36l.94-1.898a.65.65 0 0 1 1.179 0l.94 1.899c.1.2.28.34.5.36l2.098.3c.56.08.78.74.4 1.12Z"/>
        </svg>
      </li>
    ))}
  </ul>;
}