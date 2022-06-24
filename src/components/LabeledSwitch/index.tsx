import React from 'react';
import classNames from 'classnames';

import './style.scss';

type LabeledSwitchProps = {
  value: boolean;
  leftOption: string;
  rightOption: string;
  onToggle: (value: boolean) => void;
  className?: string;
  width?: number;
  leftSwitcherWidth?:number;
  rightSwitcherWidth?:number;
  height?: number;
  fontSize?: number;
  disabled?: boolean;
};

export default function LabeledSwitch({
  value,

  leftOption,
  rightOption,
  onToggle,
  className,
  width,
  height,
  fontSize,
  disabled,
  leftSwitcherWidth,
  rightSwitcherWidth,
}: LabeledSwitchProps) {
  const handleToggle = (toggleValue: boolean) => {
    if (!disabled) {
      if (value === toggleValue) return;

      onToggle(toggleValue);
    }
  };

  return (
    <div
      className={classNames('LabeledSwitch', className, {
        LabeledSwitchActive: value,
        LabeledSwitchDisabled: disabled,
      })}
      style={{ width: `${width}px`, minHeight: `${height}px` }}
    >
      <div className="LabeledSwitch__inner">
        <div
          className="LabeledSwitch__pointer"
          style={{ transform: `translateX(${value ? (width || 0) / 2 - 2 : 2}px)` }}
        >
          <span />
        </div>

        <button
          className={classNames({
            LabeledSwitch__buttonActive: !value,
          })}
          onClick={() => handleToggle(false)}
          type="button"
          style={{
            width:`${leftSwitcherWidth ? leftSwitcherWidth : width}px`,
            minHeight: `${(height || 0) - 2}px`,
            fontSize: `${fontSize}px`,
          }}
        >
          <p>
            <span>{leftOption}</span>
          </p>
        </button>
        <button
          className={classNames({
            LabeledSwitch__buttonActive: value,
          })}
          onClick={() => handleToggle(true)}
          type="button"
          style={{
            width:`${rightSwitcherWidth ? rightSwitcherWidth : width}px`,
            minHeight: `${(height || 0) - 2}px`,
            fontSize: `${fontSize}px`,
          }}
        >
          <p>
            <span>{rightOption}</span>
          </p>
        </button>
      </div>
    </div>
  );
}
