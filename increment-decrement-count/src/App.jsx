import Employee from "./Employee";
import Greeting from "./Greeting";



function App()
{

  const empdata = {id:111,name:'ratan',salary:45000.45};
  
  return(
    <>
      <h1>Welcome</h1>
      <Greeting />
      <Greeting name="pavan" />
      <Greeting name="ratan" />
      <Employee employeedata = {empdata} />
    </>
  )
}
export default App;