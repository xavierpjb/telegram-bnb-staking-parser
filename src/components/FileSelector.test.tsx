import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import FileSelector from './FileSelector';

describe('File Selection', () => {

  test('renders upload button', () => {
    render(<FileSelector />);
    const linkElement = screen.getByTestId('json-input');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("type", "file")
    expect(linkElement).toHaveAttribute("accept", "application/json")
  });

  describe('Json validation', () => {
    test('valid Json', async () => {
      let validJson = '{"valid":"json"}'
      let file = new File([validJson], "valid.json", {type: "application/json"});
      render(<FileSelector />)

      let uploader = screen.getByTestId('json-input')
      await waitFor(() =>
        fireEvent.change(uploader, {
          target: {files: [file]},
        })
      )

      await waitFor(() =>
        expect(screen.getByText(validJson)).toBeInTheDocument()
      )

    });
    test('empty Json', async () => {
      let file = new File([''], "empty.json", {type: "application/json"});
      render(<FileSelector />)

      let uploader = screen.getByTestId('json-input')
      await waitFor(() =>
        fireEvent.change(uploader, {
          target: {files: [file]},
        })
      )

      await waitFor(() =>
        expect(screen.getByText('null')).toBeInTheDocument()
      )

    })

    test('invalid Json', async () => {
      let invalidJson = 'invalid json'
      let file = new File([invalidJson], "valid.json", {type: "application/json"});
      render(<FileSelector />)

      let uploader = screen.getByTestId('json-input')
      await waitFor(() =>
        fireEvent.change(uploader, {
          target: {files: [file]},
        })
      )

      await waitFor(() =>
        expect(screen.getByText('null')).toBeInTheDocument()
      )

    })
  });


});
