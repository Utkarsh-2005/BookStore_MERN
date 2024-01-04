import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({books}) => {
  return (
    <table className='w-full border-seperate border-space-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 md'>No</th>
        <th className='border border-slate-600 md'>Title</th>
        <th className='border border-slate-600 md max-md:hidden'>
          Author
        </th>
        <th className='border border-slate-600 md max-md:hidden'>
          Publish Year
        </th>
        <th className='border border-slate-600 md'>Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index)=> (
        <tr key={book._id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center'>
            {index+1}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {book.title}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {book.author}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {book.publishYear}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            <div className='flex justify-center gap-x-4'>
              <Link to={`/book/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800'/>
              </Link>
              <Link to={`/book/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600'/>
              </Link>
              <Link to={`/book/delete/${book._id}`}>
                  <AiOutlineDelete className='text-2xl text-red-800'/>
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default BooksTable