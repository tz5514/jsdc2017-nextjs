export default (props) => {
  return (
    <div>
      <h2>about page</h2>
      <p>Hi, I'm {props.url.query.name}.</p>
    </div>
  )
}