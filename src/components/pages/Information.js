import React, { Component } from 'react'
import Propposal from '../information/Propposal'
import Schedule from '../information/Schedule'
import Evolution from '../information/Evolution'
import Sources from '../information/Sources'

class Information extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (FB) {
      FB.AppEvents.logEvent('informationViewed')
    }
  }

  render() {
    return (
      <main>
        <div className="flex">
          <div className="w-100 w-50-l ph2">
            <Propposal />
            <Evolution />
          </div>
          <div className="w-100 w-50-l ph2">
            <Schedule />
            <Sources />
          </div>
        </div>
      </main>
    )
  }
}

export default Information
