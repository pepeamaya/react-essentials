import './App.css';
// import restaurant from "./restaurant.png";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most delicious food around</p>
      <img src="https://github.com/josedejesusamaya.png" height={200} alt="Pepe's profile" />
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id} >{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
      <p>Secret information for authorized users only</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Pizza",
  "Tacos"
];

const dishObjects = dishes.map((dish, i) => ( {id: i, title: dish} ));

function App(props) {
  console.log(props);
  if (props.authorized) {
    return <Footer year= {new Date().getFullYear()}/>
  }
  else {
    return (
      <div className="App">
        <Header name="Pepe" />
        <Main dishes={dishObjects}/>
      </div>
    );
  }
}

export default App;
