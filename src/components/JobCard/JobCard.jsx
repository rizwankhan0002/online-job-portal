import dayjs from 'dayjs';
import React from 'react';

function JobCard(props) {
  const date1 = dayjs();
  const postedDate = dayjs(props.postedOn);
  const diffInDays = date1.diff(postedDate, 'day');
  const skills = props.skills || []; // Ensure skills is an array

  return (
    <div className='mx-40 mb-4'>
      <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
          <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
          <div className='flex items-center gap-2'>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <p key={index} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
              ))
            ) : (
              <p className='text-gray-500 py-1'>No skills listed</p>
            )}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <p className='text-gray-500'>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
          <a href={props.job_link}>
            <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md' aria-label={`Apply for ${props.title} at ${props.company}`}>
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Default props to prevent undefined errors
JobCard.defaultProps = {
  skills: [], // Default to an empty array if not provided
};

export default JobCard;
