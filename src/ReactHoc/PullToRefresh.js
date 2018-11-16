import React from 'react'
import pullToRefresh from '../pullToReferesh'
import { RefreshIcon, RefreshSpinner } from './svgIcon'
import ptrAnimatesMaterial2 from '../assets/js/animates'
import '../assets/styles/pull_to_referesh.css'

const PullToRefreshWrapper = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        focusIndex: 0,
      }
      this.containerRef = React.createRef()
      this.controlRef = React.createRef()
    }
    componentDidMount() {
      const { handleRefresh } = this.props
      if (element) {
        pullToRefresh({
          container: this.containerRef.current,
          elControl: this.controlRef,
          animates: ptrAnimatesMaterial2,
          onRefresh: () => handleRefresh
        })
      }
    }

    render() {
      return (
        <div className={}>
          <div className={}>
            <RefreshIcon />
            <RefreshSpinner />
          </div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default PullToRefreshWrapper
