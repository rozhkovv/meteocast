import React from 'react'

const onChangeMode = (event) => {
  this.props.updateTheMode(event.target.value)
}

export function Settings () {
  return (
    <div className="cwa-settings">
      <div className="cwa-settings__wrapper">
        <h2>Settings</h2>
        <div onChange={onChangeMode}>
          <input type="radio" value="c" name="mode" />
          Celsius
          <input type="radio" value="f" name="mode" />
          Fahrenheit
        </div>
      </div>
    </div>
  )
}

export default Settings
