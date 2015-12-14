import React, {Component, PropTypes} from 'react'
import Channel from './Channel'

class ChannelList extends Component {
  render() {
    return <ul>
      {this.props.channels.map(ch => {
        return <Channel
          channel={ch}
          key={ch.id}
          {...this.props}
        />
      })}
    </ul>
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default ChannelList
