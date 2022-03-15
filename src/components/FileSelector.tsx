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
import {log4TSProvider} from "../config/LogConfig";

const log = log4TSProvider.getLogger("fileSelector")
class FileSelector extends Component {
  state = {
    tgExport: null
  };

  fileReader = new FileReader();

  constructor(props: any) {
    super(props);

    this.fileReader.onload = (e) => {
      log.debug("File loaded");

      let buf = e.target?.result?.toString()
      let tgExport = this.getTGExport(buf ? buf : "");
      this.setState({tgExport: tgExport})
    }


  }

  render() {
    log.trace("Render fileSelector");

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
    log.debug("File selected");

    this.fileReader.readAsText(event.target.files[0]);
  }

  getTGExport = (input: string): any => {
    let obj = null;
    if (!input) {
      log.debug("Empty string provided")
      return obj;
    }

    try {
      obj = JSON.parse(input)
    } catch (ex) {
      log.warn("Unparseable input provided")
    }
    return obj
  }

}

export default FileSelector;
