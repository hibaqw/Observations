import React from 'react';
import files_folder from '../docs/files_folder.png';

function EmptySheet(){
  return(
    <div className='d-flex flex-column align-items-center mt-3'>
      <div className='mt-3'>
        <img className="files-folder" src={files_folder} alt="file inside a folder" />
      </div>
      <h2>No Society Sheet.</h2>
      <p>Fill out questionnaire to generate the society sheet.</p>
    </div>
  );



}

export default EmptySheet;