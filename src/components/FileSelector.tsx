/*
 * Button used for uploading json files to browser for parsing
 * States transition are as follows
 *  |----------------------------+
 * No file -> Checking File -> Invalid Json
 *              +
 *              Valid Json -> Analysis -> Export Screen 
 *
 * 
 */
import React, {Component} from 'react';

class FileSelector extends Component {
  state = {
    selectedFile: null
  };


  onFileChange = (event: any) => {
    //Validate File selected
    this.setState({selectedFile: event.target.files[0]});

  }

  render() {

    return (
      <div>
        <input 
          type="file"
          onChange={this.onFileChange} 
          accept="application/json" 
          data-testid="json-input"
          />
      </div>
    );

  }

}

export default FileSelector;
