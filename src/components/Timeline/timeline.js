import React from "react"
import SwipeableViews from "react-swipeable-views"
import HorizontalTimeline from "react-horizontal-timeline"

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      previous: 0,
    }
  }

  componentWillMount() {
    this.dates = this.props.content.map(entry => entry.date)
  }

  componentWillReceiveProps(nextProps) {
    this.dates = nextProps.content.map(entry => entry.date)
  }

  render() {
    const state = this.state
    const views = this.props.content.map((entry, index) => {
      return (
        <div className="container" key={index}>
          {entry.component}
        </div>
      )
    })
    return (
      <>
        <div style={{ height: "100px" }}>
          <HorizontalTimeline
            styles={{
              background: "#121615",
              foreground: "#4ADEB5",
              outline: "#fff",
            }}
            index={this.state.value}
            indexClick={index => {
              this.setState({ value: index, previous: this.state.value })
            }}
            values={this.dates}
          />
        </div>
        <div>
          <SwipeableViews
            index={this.state.value}
            onChangeIndex={(value, previous) => {
              this.setState({ value: value, previous: previous })
            }}
            resistance
          >
            {views}
          </SwipeableViews>
        </div>
      </>
    )
  }
}
