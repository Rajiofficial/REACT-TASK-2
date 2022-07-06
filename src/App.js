// import './Newcardcomponent/Cardcomponent.css'
import Cardcomponent from './Newcardcomponent/Cardcomponent.js';

  const product=[
   {name:"watch",discription:"watch the time",picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-HCLpqNag7lZbc02N2eq5VnFfypYjrBnRZX0v5G7tw&s",price:"250"},
   {name:"laptop",discription:"watch movies && office works",picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIltnaUlRlf9tIGgJK9ufTDFNmbaDk_4WcD87ZzEg40g&s",price:"34999"},
  {name:"mobile",iscription:"multipurpose uses",picture:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fphone-vector-icon-lorem-ipsum-flat-design-eps-182887482.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphone-vector-icon-lorem-ipsum-flat-design-eps-image182887482&tbnid=yw4sVPVbfuJt4M&vet=12ahUKEwiTj6rd0bj4AhWRg2MGHfqCCAcQMygEegUIARDQAQ..i&docid=cYH55OxOti7TBM&w=800&h=800&itg=1&q=lorem%20ipsum%20mobile%20images&ved=2ahUKEwiTj6rd0bj4AhWRg2MGHfqCCAcQMygEegUIARDQAQ",price:"21999"},
  ]




function App() { 
  return (
    

    <div >
      { product.map(prod=><Cardcomponent{...prod}/>)}
      </div>
      
 


     
  
    
  );
}

export default App;
