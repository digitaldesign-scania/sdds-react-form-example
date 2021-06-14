import Form from "./Form/Form";
import "./styles.css";

export default function App() {
  return (
    <div className="App sdds-container">
      <div className="sdds-row">
        <div className="no-padding sdds-col-md-8 sdds-col-sm-4 sdds-col-xlg-16">
          <h2>Example React Form with SDDS components</h2>
          <p>In this example, for the form to be valid:</p>
          <ul>
            <li>Name contains more than 3 characters</li>
            <li>Name contains only characters A-Z a-z.</li>
            <li>City can be anything but Tokyo</li>
          </ul>
        </div>
      </div>
      <Form></Form>
    </div>
  );
}
