import classNames from 'classnames';
import { noop } from 'lodash';
import React, { FunctionComponent, memo, ReactNode } from 'react';

import { preventDefault } from '@bigcommerce/checkout/dom-utils';
import { TranslatedString } from '@bigcommerce/checkout/locale';

import { Button, ButtonSize, ButtonVariant } from '../ui/button';
import { IconCheck } from '../ui/icon';

import CheckoutStepType from './CheckoutStepType';

export interface CheckoutStepHeaderProps {
  heading: ReactNode;
  isActive?: boolean;
  isComplete?: boolean;
  isEditable?: boolean;
  summary?: ReactNode;
  type: CheckoutStepType;
  onEdit?(type: CheckoutStepType): void;
}

const CheckoutStepHeader: FunctionComponent<CheckoutStepHeaderProps> = ({
  heading,
  isActive,
  isComplete,
  isEditable,
  onEdit,
  summary,
  type,
}) => {
  // [mwa] - init -  Mappa il tipo di step al numero corrispondente e lo visualizza con padding a destra
  // Mappa il tipo di step al numero corrispondente
  const stepNumbers: Record<string, number> = {
    customer: 1,
    shipping: 2,
    billing: 3,
    payment: 4,
  };

  // Stile per il cerchio numerato
  const circleStyle: React.CSSProperties = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#000000', // blu elegante, personalizzabile
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '14px',
    marginRight: '8px',
  };

  const stepNo = stepNumbers[type] ? <span style={circleStyle}>{stepNumbers[type]}</span> : null;

  // [mwa] - end

  return (
    <div
      className={classNames('stepHeader', {
        'is-readonly': !isEditable,
        'is-clickable': isEditable && !isActive,
      })}
      onClick={preventDefault(isEditable && onEdit ? () => onEdit(type) : noop)}
    >
      <div className="stepHeader-figure stepHeader-column">
        <IconCheck
          additionalClassName={classNames('stepHeader-counter', 'optimizedCheckout-step', {
            'stepHeader-counter--complete': isComplete,
          })}
        />

        <h2 className="stepHeader-title optimizedCheckout-headingPrimary">
          {stepNo}
          {heading}
        </h2>
      </div>

      <div
        className="stepHeader-body stepHeader-column optimizedCheckout-contentPrimary"
        data-test="step-info"
      >
        {!isActive && isComplete && summary}
      </div>

      {isEditable && !isActive && (
        <div className="stepHeader-actions stepHeader-column">
          <Button
            aria-expanded={isActive}
            size={ButtonSize.Tiny}
            testId="step-edit-button"
            variant={ButtonVariant.Secondary}
          >
            <TranslatedString id="common.edit_action" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(CheckoutStepHeader);
