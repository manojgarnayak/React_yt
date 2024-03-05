import { useDispatch } from "react-redux"
const Home = () => {
  const dispatch = useDispatch()
  const handler = () => {
    dispatch({
      type:"firstCase",
      //payload:"fds"
    })
  };
  return (
    <div>
      Home
      <button onClick={handler}>Click</button>
    </div>
  )
}

export default Home