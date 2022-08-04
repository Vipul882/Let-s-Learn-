import './App.css';
import Header from "./mycomponents/Header";
import Lets from "./mycomponents/Lets";
import Footer from "./mycomponents/Footer";


function App() {
  let lets=[
    {
      sno: 1,
      title:"Vipul Singh ",
      Description : "Expert in bb "
    },
    {
      sno: 2,
      title:"Go to the Hell ",
      Description : "jao "
    },
  ]
  return (
    <>
    <Header title = "Let's Learn " searchBar={true}/>
    <Lets lets={lets}/>
    <Footer/>

    </>
  );
}

export default App;
