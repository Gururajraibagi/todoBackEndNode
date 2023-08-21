import React,{useState,useEffect} from 'react'
import {  useParams,useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = ({match}) => {
const { id } = useParams();
const navigate =useNavigate();

let [note,setNote] =useState(null);

useEffect( () => {
  const getNote = async() =>{
    console.log("id: ",id)
    if(id==='new')
      return;
    let response= await fetch(`/api/notes/${id}`)
    let data=await response.json()
    setNote(data)
};

    getNote()
}, [id] );

const createNote = async() =>{
  await fetch(`/api/notes/create`,{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(note)
    
  });
}

const updateNote = async() =>{
  fetch(`/api/notes/${id}/update`,{
    method : 'PUT',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(note)
    
  });
}

const deletenote =async () => {
  fetch (`/api/notes/${id}/delete`,{
    method : 'DELETE',
    'headers' : {
      'Content-Type' : 'application/json'
    }
  })
  navigate('/')
}

let handleSUbmit = () =>{
  console.log('id: ',id);
  console.log('notebody : ',note.body);

  if(id !== 'new' && note.body ==='')
    deletenote();
  else if(id !=='new')
    updateNote();
  else if(id === 'new' && note !==null)
    createNote()

  navigate('/');
}


//let noteId = match.params.id
  return (
    <div className='note'>
        <div className='note-header'>
            <h3 >
               <ArrowLeft onClick={handleSUbmit}></ArrowLeft>
              

            </h3>
            {id !== 'new' ? (
               <button onClick={deletenote}> Delete</button>
            ):(
              <button onClick={handleSUbmit} > Done</button>
            )
            }
           
       
        </div>
        <textarea onChange={(e) =>
          {
           // console.log("onchange",e.target.value)
             setNote({...note,'body': e.target.value}
          )}
          }  value={note?.body}></textarea>
    
    </div>

  )
}

export default NotePage