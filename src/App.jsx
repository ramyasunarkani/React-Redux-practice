import { useSelector } from "react-redux"
import Counter from "./components/counter"
import Header from "./components/Header"
import Login from "./components/Login"
import MyProfilePage from "./components/MyProfilePage"


function App() {
  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated)

  return (
    <>
      <Header/>
      {isAuthenticated?<MyProfilePage/>: <Login/>}
      <Counter/>
    </>
  )
}

export default App
