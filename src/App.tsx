// const name: string = 'Jaime'
// const age: number = 29
// const isStudent: boolean = false
// const favoriteAnimals: string[] = ['snake', 'panda', 'buffalo']

// type User = {
  //   username: string,
  //   password: string,
  //   age?: number,
  //   isAdmin: boolean,
  //   favoriteNumber?: any
  // }
  
  // const newUser: User = {
    //   username: 'jaimejacobo',
    //   password: 'malaga',
    //   isAdmin: true
    // }
    
    // const getPassword = function(user: User): string {
      //   return ''
      // }

import './App.css';
import Bruno from './Bruno';
import Serafin from './Serafin';
import Greeting1 from './Greeting1';

const App: React.FC = () => {

  const gift = 'delfín'
  const myName = 'Bruno';
  const myGreeting = 'me das cita en tu pelu?'
  const myJoke = 'toma lacasito'

  return (
    <div className="App">
      <p>Main Page</p>
      <Bruno thing={gift} greet={"Qué pasa"} />
      <Serafin name={myName} greet={myGreeting}/>
      <Greeting1 joke={myJoke} greet1={"Hola"} />

    </div>
  );
}

export default App;
