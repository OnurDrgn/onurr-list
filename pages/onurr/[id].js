export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    const paths = data.map(onur => {
      return {
        params: { id: onur.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { onur: data }
    }
  }
  
  const Details = ({ onur }) => {
    return (
      <div>
        <h1>{ onur.name }</h1>
        <p>{ onur.email }</p>
        <p>{ onur.website }</p>
        <p>{ onur.phone }</p>
        <p>{ onur.address.city }</p>
        <p>{ onur.address.geo.lat }</p>
        <p>{ onur.address.geo.lng }</p>
      </div>
    );
  }
  
  export default Details;