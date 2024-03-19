// Question:

// What wrong with this code? It crashes when I run it

// function question_1() {
//   const elements = ['one', 'two', 'three'];

//   return (
//     <div>
//       {elements.map((value) => (<span>{value}</span>))}
//     </div>
//   )
// }

//Answer
export default function App() {
  const elements = ["one", "two", "three"];

  return (
    <div>
      {elements.map((value) => (
        <span>{value}</span>
      ))}
    </div>
  );
}

//This question is an interview question i took when i was noob. The code is correct so no other solution
