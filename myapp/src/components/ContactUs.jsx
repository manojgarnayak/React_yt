
import { useState } from 'react'

const ContactUs = () => {
  const [name, setName] = useState("Hello")
   return (
    <div>
      <form>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder='Email Id'/>
        <button onClick={() => console.log(name)}>Click Me</button>
        <p>{name}</p>
      </form>
    </div>
  )
}

export default ContactUs