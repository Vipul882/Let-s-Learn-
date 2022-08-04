import React from 'react'

const Letslearnitems = ({letm}) => {
  return (
    <div> 
      <h4>{letm.title}</h4>
      <p>{letm.Description}</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-warning me-md-2" type="button">Description</button>
  <button class="btn btn-danger" type="button">Skills</button>
</div>
    </div>
  )
}

export default Letslearnitems
