/* @flow strict-local */
import React from 'react';
import { View } from 'react-native';

import { RawLabel, Touchable } from '.';
import { BRAND_COLOR, createStyleSheet } from '../styles';
import { IconDone } from './Icons';

const styles = createStyleSheet({
  languageWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 13,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

type Props<TItemKey: string | number> = $ReadOnly<{|
  itemKey: TItemKey,
  subtitle: string,
  nativeName: string,
  selected: boolean,
  onValueChange: (itemKey: TItemKey) => void,
|}>;

// Not ready to use.
export default function LanguagePickerItem<TItemKey: string | number>(props: Props<TItemKey>) {
  const { itemKey, subtitle, nativeName, selected, onValueChange } = props;

  return (
    <Touchable onPress={() => onValueChange(itemKey)}>
      <View style={styles.listItem}>
        <View style={styles.languageWrapper}>
          <RawLabel text={nativeName} />
          <RawLabel text={subtitle} style={styles.subtitle} />
        </View>
        <View>{selected && <IconDone size={16} color={BRAND_COLOR} />}</View>
      </View>
    </Touchable>
  );
}