import Firedoge from 'components/Firedoge'

export default () => (
  <div>
    <h1>Hello Firedoge</h1>
    <Firedoge/>
    <p>AP domain: {API_DOMAIN}</p>
    <div>
      <p className="text">some text.</p>
    </div>
    <style jsx>{`
      p.text {
        color: red;
      }
    `}</style>
  </div>
)