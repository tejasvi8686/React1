import './App.css';
import Item from './Components/Item.js';
import ItemDate from './Components/ItemDate.js';
import SideBar from './Components/SideBar.js';
function App (){
  const response =[
    {
      Name : 'app',
      Surname :'lalu',
      Tittle :'monu',
      Nickname : 'Honey'
    },
    {
      Name : 'app2',
      Surname :'lalu2',
      Tittle :'monu2',
      Nickname : 'Honey2'
    },
    {
      Name : 'app3',
      Surname :'lalu3',
      Tittle :'monu3',
      Nickname : 'Honey3'
    },
  
    
  
  ]
  return(

    <SideBar>
    <div className='App'> 
       <Item Name = {response[0].Name}>
        hello jee kase ho
       </Item>
       <ItemDate Surname = {response[0].Surname }Tittle ={response[0].Tittle} Nickname={response[0].Nickname}></ItemDate>

       <Item Name = {response[1].Name}></Item>
       <ItemDate Surname = {response[1].Surname }Tittle ={response[1].Tittle} Nickname={response[1].Nickname}></ItemDate>
      

       <Item Name = {response[2].Name}></Item>
       <ItemDate Surname = {response[2].Surname }Tittle ={response[2].Tittle} Nickname={response[2].Nickname}></ItemDate>

       <div className='hey'>
       heyy tejasvi how are you
       </div>
    </div>

    </SideBar>
    
     
  )

}
export default App;
