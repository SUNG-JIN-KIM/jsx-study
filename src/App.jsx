import "./App.css";
import UserCard from "./components/UserCard";

const userData =[
  {
    id: 1,
    name: "k02",
    job: "programmer",
    imageSrc: "인물 이미지.jpg"
  }, 
  {
    id: 2,
    name: "k02",
    job: "programmer",
    imageSrc: "avatar2.png"
  }, 
  {
    id: 3,
    name: "k02",
    job: "programmer",
    imageSrc: "avatar3.png"
  }
  
]

const App = () => {
  return (
    <>
    {userData.map((value, index) => (
        <UserCard 
        key={value.id}
        name={value.name} 
        job={value.job} 
        imageSrc={value.imageSrc} />
      ))}
    </>
  );
};

export default App;