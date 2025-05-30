const hello = <h1>Hello</h1>

console.log(hello);

function Ts({name}:{name:string}){
  return <h1>OOK { name }</h1>
}

console.log((<Ts name="priatno"/>).props);
export {
  Ts
}