function ListGroup() {
    const items = ['New York', 'San Francisco', 'Tokyo', 'London'];
  return (
    
    <>
        <ul className="list-group">
            <h1>List</h1>
          {items.map((item)=>(
            <li>{item}</li>
          ))}
        </ul>
    </>
  );
}

export default ListGroup;
