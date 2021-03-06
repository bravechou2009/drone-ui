import React from 'react';

import Avatar from './avatar';
import Status from './status';
import BuildMeta from './build_meta';

import './build_card.less';

export default
class BuildCard extends React.Component {
  render() {
    const {build} = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <Avatar src={build.get('author_avatar')}/>
        </div>
        <div className="card-block">
          <div>
            <h3>{build.get('message')}</h3>
          </div>
          <BuildMeta build={build}/>
        </div>
        <div className="card-footer">
          <div>{build.get('number')}</div>
          <Status state={build.get('status')}/>
        </div>
      </div>
    );
  }
}
