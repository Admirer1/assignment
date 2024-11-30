
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/Landing'
import OnboardingPage from './pages/Onboarding'
import JobListing from './pages/joblisting'
import MyJob from './pages/MyJob'
import PostJob from './pages/PostJob'
import SavedJob from './pages/SavedJob'
import JobPage from './pages/JobPage'
// import { Button } from './components/ui/button'

 

  const router=createBrowserRouter([
    {
      element:<AppLayout/>,
    children:[
      {
        path:'/',
        element : <LandingPage/>
      },
      {
        path:'/onboarding',
        element : <OnboardingPage/>
      },
      {
        path:'/job/:id',
        element : <JobPage/>
      },
      {
        path:'/joblisting',
        element : <JobListing/>
      },
      {
        path:'/Myjob',
        element : <MyJob/>
      },
      {
        path:'/postjob',
        element : <PostJob/>
      },
      {
        path:'/savedjob',
        element : <SavedJob/>
      },



    ]
    }
  ]);

  function App() {

    return <RouterProvider router={router}/>;
}

export default App
