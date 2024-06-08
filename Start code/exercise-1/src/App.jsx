import React,  {useState} from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
    
    const [rainColor, setRainColor] = useState('blue');
  function onSunClick() {
    // Complete this code when we click on Sunny Time
    const [sunColor, setSunColor] = useState('yellow');

  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time

  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
   
  }

  return (
    <main>
      <h1>TODO</h1>
      <button value={sunColor} onChange={handleSunChange}>Sunny Time</button>
      <button value={rainColor} onChange={handleRainChange}>Rain Time</button>
    </main>
  );
}

export default App;

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }
