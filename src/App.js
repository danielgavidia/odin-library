import { useState } from 'react';

let nextId = 0;

function App() {
     const [library, setLibrary] = useState([]);
     const [title, setTitle] = useState('');
     const [author, setAuthor] = useState('');
     const [numberPages, setNumberPages] = useState('');

     const addBook = () => {
          setLibrary([
               ...library,
               {
                    id: nextId++,
                    title: title,
                    author: author,
                    numberPages: numberPages,
               }
          ]);

          setTitle('');
          setAuthor('');
          setNumberPages('');
     };

     const removeBook = (book) => {
          setLibrary(
               (current) => current.filter((x) => x.id != book.id)
          );
     };

     return (
          <>
               <body className='sans-serif'>
                    <h1 className='text-4xl pb-8 bg-blue-900 text-white'>Personal Library</h1>

                    <div className='flex justify-center pt-6'>
                         <div className='flex flex-col justify-center w-80 p-1'>
                              <div className='flex justify-center font-bold'>Title</div>
                              <input
                                   value={title}
                                   onChange={e => setTitle(e.target.value)}
                                   type='text'
                                   className='border-2 border-black'
                              />
                         </div>
                         <div className='flex flex-col justify-center w-80 p-1'>
                              <div className='flex justify-center font-bold'>Author</div>
                              <input
                                   value={author}
                                   onChange={e => setAuthor(e.target.value)}
                                   type='text'
                                   className='border-2 border-black'
                              />
                         </div>
                         <div className='flex flex-col justify-center w-80 p-1'>
                              <div className='flex justify-center font-bold'>Number of Pages</div>
                              <input
                                   value={numberPages}
                                   onChange={e => setNumberPages(e.target.value)}
                                   type='number'
                                   className='border-2 border-black'
                              />
                         </div>
                         <div className='flex justify-center p-1 w-40'>
                              <button
                                   className='bg-blue-900 text-white rounded-lg w-20'
                                   onClick={() => addBook()}>
                                   Add Book
                              </button>
                         </div>
                    </div>

                    <ul>
                         {library.map(book => (
                              <li key={book.id}>
                                   <div className='flex justify-center'>
                                        <div className='flex justify-center w-80 p-1'>
                                             {book.title}
                                        </div>
                                        <div className='flex justify-center w-80 p-1'>
                                             {book.author}
                                        </div>
                                        <div className='flex justify-center w-80 p-1'>
                                             {book.numberPages}
                                        </div>
                                        <div className='flex justify-center p-1 w-40'>
                                             <button
                                                  className='w-20 border-2 border-black rounded-lg'
                                                  onClick={() => removeBook(book)}
                                             >Remove
                                             </button>
                                        </div>
                                   </div>
                              </li>
                         ))}
                    </ul>
               </body>
          </>
     );
}

export default App;
