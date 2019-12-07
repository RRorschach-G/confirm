import React from 'react';
import "./style.css";

class Confirm extends React.Component {
  constructor(props) {
    super(props)
    this.onCancel = () => {
      this.props.onCancel()
    }
    this.onConfirm = () => {
      this.props.onConfirm()
    }
  }
  render() {

    return (
      <div className="mask">
      <div className="dialog">
        <div className="title">对话框</div>
        <div className="context">{this.props.context}</div>
        <div className="bottom">
          <input type='button' value="取消" onClick={this.onCancel} />
          <input type='button' value="确定" onClick={this.onConfirm} />
        </div>

      </div>
      </div>
    )
  }
}

export default Confirm