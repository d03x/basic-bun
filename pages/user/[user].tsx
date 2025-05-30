
export default function User(route : any){
  return (
    <div style={{
      color:'gray'
    }}>
      <div>
        <input/>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quo maiores omnis asperiores itaque dicta necessitatibus suscipit delectus culpa ad accusamus adipisci quisquam dolorum nostrum modi nesciunt illum qui tempore!
      Natus maiores, magni perspiciatis possimus officia sit veritatis maxime ducimus, pariatur rem numquam aperiam, corporis quae mollitia? At laborum quos repudiandae porro, mollitia sequi quasi, ex hic dignissimos eveniet sapiente!
      Ipsam rem cupiditate ratione magnam facere quia assumenda suscipit commodi minima error quaerat amet, qui molestiae, non iure, omnis est numquam nulla nemo dolor. Facere neque quisquam quis enim vel!
      <h1 style={{fontWeight:700}}>{route?.route?.params?.user}</h1>
    </div>
  )
}