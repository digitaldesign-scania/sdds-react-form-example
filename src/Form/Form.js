import React, { Component } from "react";

class Form extends Component {
  cities = ["Stockholm", "Paris", "Tokyo", "Bangkok", "Bandung"];

  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: "Mary",
        lastName: "Jane",
        city: "Stockholm",
        transport: "car"
      },
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  setValues(name, newValue, errorMessage) {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [name]: newValue
      },
      errors: {
        ...this.state.errors,
        [name]: errorMessage
      }
    });
  }

  handleChange = (evt) => {
    const name = evt.target.name || evt.target.attributes.name.value;
    const newValue = evt.target.value + "";
    const errorMessage = this.nameValidation(name, newValue);

    this.setValues(name, newValue, errorMessage);
  };

  componentDidMount() {
    this.sddsDropdown.addEventListener("selectOption", (evt) => {
      const newValue = evt.detail.label;
      const name = "city";
      // Input validation
      const errorMessage = this.cityValidation(newValue);

      this.setValues(name, newValue, errorMessage);
    });
  }

  nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  cityValidation(selected) {
    if (selected.trim() === "") return "City is required";
    if (selected === "Tokyo") return "Sorry, you cannot live in Tokyo";
    return null;
  }

  render() {
    return (
      <form className="sdds-row sdds-on-white-bg">
        <sdds-theme></sdds-theme>
        <div className="no-padding sdds-col-sm-4 sdds-col-md-8 sdds-col-lg-8 sdds-col-xlg-8 sdds-demo-form-field">
          <sdds-textfield
            type="text"
            placeholder="Enter first name"
            value={this.state.values.firstName}
            onInput={this.handleChange}
            name="firstName"
            state={this.state.errors.firstName && "error"}
          >
            <span slot="sdds-label">Label text</span>
            {this.state.errors.firstName && (
              <span slot="sdds-helper">{this.state.errors.firstName}</span>
            )}
          </sdds-textfield>
        </div>

        <div className="no-padding sdds-col-sm-4 sdds-col-md-8 sdds-col-lg-8 sdds-col-xlg-8 sdds-demo-form-field">
          <sdds-textfield
            type="text"
            placeholder="Enter last name"
            value={this.state.values.lastName}
            onInput={this.handleChange}
            name="lastName"
            state={this.state.errors.lastName && "error"}
          >
            <span slot="sdds-label">Last name</span>
            {this.state.errors.lastName && (
              <span slot="sdds-helper">{this.state.errors.lastName}</span>
            )}
          </sdds-textfield>
        </div>

        <div className="no-padding sdds-col-sm-4 sdds-col-md-8 sdds-col-lg-8 sdds-col-xlg-8 sdds-demo-form-field">
          <sdds-dropdown
            name="city"
            placeholder="Select city"
            label="City"
            label-position="outside"
            default-option={this.state.values.city}
            ref={(elem) => (this.sddsDropdown = elem)}
            state={this.state.errors.city && "error"}
            helper={this.state.errors.city || "Please select a city"}
          >
            {this.cities.map((city) => (
              <sdds-dropdown-option key={"id-" + city} value={city}>
                {city}
              </sdds-dropdown-option>
            ))}
          </sdds-dropdown>
        </div>

        <div className="no-padding sdds-col-sm-4 sdds-col-md-8 sdds-col-lg-8 sdds-col-xlg-8">
          <div className="sdds-dropdown">
            <span className="sdds-dropdown-label-outside">Native select</span>
            <select
              name="transport"
              id="nativeSelect"
              value={this.state.values.transport}
              onChange={(e) => this.setValues("transport", e.target.value, "")}
            >
              <option value="">Select one</option>
              <option value="truck">Truck</option>
              <option value="bus">Bus</option>
              <option value="car">Car</option>
            </select>
            <span className="sdds-dropdown-helper">Select transportation</span>
          </div>
        </div>

        <div className="no-padding sdds-col-sm-4 sdds-col-md-8 sdds-col-lg-8 sdds-col-xlg-8">
          <h5>Debug</h5>
          <p>{JSON.stringify(this.state.values)}</p>
          <p>{this.state.values.firstName}</p>
          <p>Validation:</p>
          <p>{JSON.stringify(this.state.errors)}</p>
        </div>
      </form>
    );
  }
}

export default Form;
