/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { TimePicker } from '@vaadin/time-picker';

export * from '@vaadin/time-picker/src/vaadin-time-picker.js';

/**
 * @deprecated Import `TimePicker` from `@vaadin/time-picker` instead.
 */
export const TimePickerElement = TimePicker;

console.warn(
  'WARNING: Since Vaadin 23.2, "@vaadin/vaadin-time-picker" is deprecated. Use "@vaadin/time-picker" instead.',
);
