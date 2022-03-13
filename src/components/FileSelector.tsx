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
    tgExport: null
  };

  render() {

    return (
      <div>
        <input
          type="file"
          onChange={this.onFileChange}
          accept="application/json"
          data-testid="json-input"
        />
        {JSON.stringify(this.state.tgExport)}
      </div>
    );
  }

  onFileChange = (event: any) => {
    let fr = new FileReader();

    fr.onload = (e) => {
      let buf = e.target?.result?.toString()
      let tgExport = this.getTGExport(buf ? buf : "");
      this.setState({tgExport: tgExport})
    }

    fr.readAsText(event.target.files[0]);
  }

  getTGExport = (input: string): any => {
    let obj = null;
    if (!input) {
      return obj;
    }

    try {
      obj = JSON.parse(input)
    } catch (ex) {
    }
    return obj
  }


}

export default FileSelector;
