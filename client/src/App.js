import ListHeader from "./components/ListHeader";
const App = () => {
  const geData =()=>{
    try{
 const resonse = await fetch(`http://localhost:8080/todos/${userEmail}`)
 const json = await response.json()
 console.log(json)
    }catch(err){
      console.error(err)
    }
  }
  return (
    <div className="app">
      <ListHeader listName={"🏝️ Holiday tick list"} />
    </div>
  );
};

export default App;
