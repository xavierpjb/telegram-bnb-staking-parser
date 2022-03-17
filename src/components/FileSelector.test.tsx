import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import FileSelector from './FileSelector';

describe('File Selection', () => {

  test('renders upload button', () => {
    render(<FileSelector onValidTGExport={() => {}} onInvalidTGExport={() => {}} />);
    const linkElement = screen.getByTestId('json-input');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("type", "file")
    expect(linkElement).toHaveAttribute("accept", "application/json")
  });

  describe('Json validation', () => {
    let mockValidFunc = jest.fn(()=>{})
    let mockInvalidFunc= jest.fn(() => {});
    
    beforeEach(() => {
      mockValidFunc = jest.fn(()=>{})
      mockInvalidFunc = jest.fn(()=>{})
      render(<FileSelector onValidTGExport={mockValidFunc} onInvalidTGExport={mockInvalidFunc} />);
    })
    test('valid Json', async () => {
      let validJson = '{"valid":"json"}'
      let file = new File([validJson], "valid.json", {type: "application/json"});
      

      let uploader = screen.getByTestId('json-input')
      await waitFor(() =>
        fireEvent.change(uploader, {
          target: {files: [file]},
        })
      )

      await waitFor(() =>
        expect(mockValidFunc.mock.calls.length).toBe(1)
      )

    });
    test('empty Json', async () => {
      let file = new File([''], "empty.json", {type: "application/json"});

      let uploader = screen.getByTestId('json-input')
      await waitFor(() =>
        fireEvent.change(uploader, {
          target: {files: [file]},
        })
      )

      await waitFor(() =>
        expect(mockInvalidFunc.mock.calls.length).toBe(1)
      )

    })

    test('invalid Json', async () => {
      let invalidJson = 'invalid json'
      let file = new File([invalidJson], "valid.json", {type: "application/json"});

      let uploader = screen.getByTestId('json-input')
      await waitFor(() =>
        fireEvent.change(uploader, {
          target: {files: [file]},
        })
      )

      await waitFor(() =>
        expect(mockInvalidFunc.mock.calls.length).toBe(1)
      )

    })
  });


});
