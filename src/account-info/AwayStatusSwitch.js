/* @flow strict-local */
import React from 'react';

import { useSelector, useDispatch } from '../react-redux';
import { OptionRow } from '../common';
import { getSelfUserAwayStatus } from '../selectors';
import { updateUserAwayStatus } from '../user-status/userStatusActions';

type Props = $ReadOnly<{||}>;

/**
 * This is a stand-alone component that:
 *  * retrieves the current user's `user status` data and presents it
 *  * allows by switching it to control the `away` status
 */
export default function AwayStatusSwitch(props: Props) {
  const awayStatus = useSelector(getSelfUserAwayStatus);
  const dispatch = useDispatch();

  return (
    <OptionRow
      label="Set yourself to away"
      value={awayStatus}
      onValueChange={(away: boolean) => {
        dispatch(updateUserAwayStatus(away));
      }}
    />
  );
}
