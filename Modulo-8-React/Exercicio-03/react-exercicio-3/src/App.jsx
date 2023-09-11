import Profile from "./components"


function App() {
  return(
    <div className="app">
      <Profile
        avatar= "https://randomuser.me/api/portraits/men/75.jpg"
        name= "John Doe"
        bio="Full-stack javascript developer"
        email="john.doe@email.com"
        phone="+551195457869"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}

export default App
