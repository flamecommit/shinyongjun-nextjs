'use client';

import { useContext, useState } from 'react';
import {
  AlertContext,
  ConfirmContext,
  PromptContext,
} from '@shinyongjun/react-dialog';
import '@shinyongjun/react-dialog/css';

const buttonStyle = {
  backgroundImage: 'linear-gradient(to bottom, #e4e4e4, #f7f7f7)',
  border: '1px solid #afafaf',
  padding: '0 12px',
  borderRadius: '3px',
};

function AlertExample() {
  const { alert } = useContext(AlertContext);
  const [state, setState] = useState('close');

  const handleAlert = async () => {
    setState('open');
    await alert('Alert message.');
    setState('close');
  };

  return (
    <>
      <button type="button" onClick={handleAlert} style={buttonStyle}>
        Alert
      </button>
      <span style={{ marginLeft: '20px' }}>
        state :
        <strong style={{ fontWeight: 700, color: 'red', marginLeft: '6px' }}>
          {state}
        </strong>
      </span>
    </>
  );
}

function ConfirmExample() {
  const { confirm } = useContext(ConfirmContext);
  const [result, setResult] = useState<string>('');

  const handleConfirm = async () => {
    setResult('');
    const r = await confirm('Confirm message.');
    setResult(r.toString());
  };

  return (
    <>
      <button type="button" onClick={handleConfirm} style={buttonStyle}>
        Confirm
      </button>
      <span style={{ marginLeft: '20px' }}>
        result :
        <strong style={{ fontWeight: 700, color: 'red', marginLeft: '6px' }}>
          {result}
        </strong>
      </span>
    </>
  );
}

function PromptExample() {
  const { prompt } = useContext(PromptContext);
  const [result, setResult] = useState<string | null>(null);

  const handlePrompt = async () => {
    setResult(null);
    const r = await prompt('Prompt message.');
    setResult(r);
  };

  return (
    <>
      <button type="button" onClick={handlePrompt} style={buttonStyle}>
        Prompt
      </button>
      <span style={{ marginLeft: '20px' }}>
        result :
        <strong style={{ fontWeight: 700, color: 'red', marginLeft: '6px' }}>
          {result}
        </strong>
      </span>
    </>
  );
}

export { AlertExample, ConfirmExample, PromptExample };
