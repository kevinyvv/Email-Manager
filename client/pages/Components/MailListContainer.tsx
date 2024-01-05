import React, {useEffect, useState} from 'react'


const MailListItem = ({sender, date, subject, content} : {sender:string, date:string, subject:string, content:string}) => {

    return(
        <div className='max-w-1/2'>
           <div className='w-full grid grid-cols-4 gap-12 outline outline-1 outline-white rounded-md px-1 py-2'
           >
            <h2 className='text-xs truncate'> {date} </h2>
            <h1 className='text-xs truncate'> {sender} </h1>
            <h2 className='text-xs truncate'> {subject} </h2>
            <p className='text-xs truncate'> {content} </p>
            </div>
        </div>
    )
}



const MailListContainer = (props:any) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [ssender, setSsender] = useState("")
  const [ddate, setDdate] = useState("")
  const [ssubject, setSsubject] = useState("")
  const [ccontent, setCcontent] = useState("")


  async function get_emails() {
    fetch("http://127.0.0.1:8080/emails", {method: 'POST'}).then(() => 
    fetch("http://127.0.0.1:8080/emails").then(response => response.json()).then(data => {
      setLoading(false)
      setData(data.emails)}))
  }

  useEffect(() => {
      setLoading(true)
      get_emails()
      /*
      console.log(data)
      console.log(loading)
      console.log("this line was reached")
      */
    },[])

    //fix rem/width to fit all screensize

  return (
    <div className="space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96"> 
      <h1 className='text-sm'> Mail List </h1>
      <button className='btn btn-sm' onClick={()=> get_emails()}> Refresh </button>
          <div className='my-4 mx-4 px-2 py-2 h-4/6 overflow-y-auto w-full space-y-4 overflow-x-clip'>
            {loading && !data
            ? <div> Loading... </div> //if loading
            : data.map((d: { sender: string; dt: string; subject: string; content: string; id:number}) => (
              <button onClick={() => props.handleCallback(d)}  key={d.id} className='active:scale-95'>
                <MailListItem sender = {d.sender} date = {d.dt} subject = {d.subject} content = {d.content}/>
              </button>
            )) //done loading
            }
         </div>
    </div>
  )
}

export default MailListContainer