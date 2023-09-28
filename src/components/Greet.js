

// function Greet() {
//     return <h1>Hello Vishwas</h1>
// }

 export const Greet =(props)=>{
 console.log(props);
 const { name ,section }= props
 return <h1>Hello {name} {section} </h1>

 }
// export default Greet;