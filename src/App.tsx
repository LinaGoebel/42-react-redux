import { BrowserRouter, Route, Routes } from "react-router-dom"


//lessons
// import Lessons16 from "./lessons/Lessons16/Lessons16"
import Layout from "./pages/UserApp/Layout/Layout"
import Home from "./pages/UserApp/Home/Home"
import Users from "./pages/UserApp/Users/Users"

//homeworks

//consultation
// import Consultation08 from "./consultation/Consultation08/Consultation08"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lessons16 /> */}
      {/*UserApp - Practice - Lesson16 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element='Page not found' />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
