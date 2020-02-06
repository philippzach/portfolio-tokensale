import React, { Component } from "react"

class ActiveCampaignForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formSubmitted: false,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)

    fetch("https://eloop.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then(response => {
        this.setState({ formSubmitted: true })
        setTimeout(() => {
          this.setState({ formSubmitted: false })
        }, 5000)
        console.log("form success")
      })
      .catch(error => console.log("Request failed", error))
  }

  render() {
    const { formSubmitted } = this.state

    return (
      <div>
        {formSubmitted && (
          <p>
            <strong>THANK YOU</strong> for joining our pre-sale list!
            <br />
            We will contact you when the pre-sale starts
          </p>
        )}

        {!formSubmitted && (
          <form onSubmit={this.onSubmit} id="_form_2_" novalidate>
            <input type="hidden" name="u" value="2" />
            <input type="hidden" name="f" value="2" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input
              type="text"
              name="email"
              placeholder="youremail@gmail.com"
              required
            />
            <input type="submit" value="JOIN PRE SALE" />
          </form>
        )}
      </div>
    )
  }
}

export default ActiveCampaignForm
