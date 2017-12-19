import Button from '../common/Button.js';
import React, { PropTypes } from 'react';

const CallControl = ({
  status,
  mute,
  hangup,
  call,
  hold,
  record,
  isMuted,
  isHeld,
  isRecording,
  recordingCallSid,
  callSid,
  confSid,
  reservation
}) => {
  let buttons
  // if status is open then we are on a call
  if (status == "open") {
    buttons =
      <div>
        <Button onClick={e => hangup(reservation, confSid)} classes={["hangup"]} buttonText="Hangup" />
        <Button onClick={mute} classes={["mute"]} buttonText={isMuted ? 'Unmute' : 'Mute' } />
        <Button onClick={e => hold(confSid, callSid)} classes={["hold"]} buttonText={isHeld ? 'UnHold' : 'Hold' } />
        <Button onClick={e => record(confSid, recordingCallSid)} classes={["hold"]} buttonText={isRecording ? "Pause" : "Record"} />
        <Button onClick={e => hold(confSid, callSid)} classes={["hold"]} buttonText="Transfer" />
      </div>
  } else {
    buttons = <Button onClick={e => call()} classes={["call"]} buttonText="Call" />
  }
  return (
    <div id="action-button-container">
      <div id="action-buttons">
        {buttons}
      </div>
    </div>
  )
}

CallControl.propTypes = {
  
}

export default CallControl;
