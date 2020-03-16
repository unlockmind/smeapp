import React from 'react'
import { connect } from 'react-redux'

 const MIndex = (props)=> {
    console(props)
    console("props")

    return (
        <div>
            Antonios
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      counter: state
    }
  }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
  export default connect(mapStateToProps)(MIndex)
