import './Profilee.css';
function Profile()
{
    return(
        <>
        <div class="card-group">
  <div class="card first_card">
    <div class="card-body">
      <h5 class="card-title">welcome back</h5>
      <p>Nice to see you</p>
    </div>
    <div class="card-footer">
    <p>tap to record</p>
    </div>
  </div>
  <div class="card sec_card">
    <div class="card-body">
      <h5 class="card-title"> Cars Information</h5>
      <p class="card-text">ready to use</p>
      <div class="row row-cols-1 row-cols-md-3 g-4">



<div style={{'display':'flex'}}>

  <div class="col">
    <div class="card">
      <div class="card-body">
       
        <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
</svg></p>
<h5 class="card-title">68%</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Battery Health</h5>
        <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
</svg></p>
<h4>76%</h4>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Efficienty</h5>
        <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
</svg></p>
<h5>163W/KM</h5>
      </div>
    </div>
  </div>
  </div>
</div>
    </div>
   
  </div>
  <div class="card">
    
    <div class="card-body third_card">
    <h5 class="card-title"> Personal Information</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to </p>
      <p>Mobile NO: 1234567890</p>
      <p>Email: aara@gmail.com</p>
      <p>location : Lucknow ,Noida</p>
    </div>
  </div>
</div>







<div class="row row-cols-1 row-cols-md-3 g-4 seconds_card">
  <div class="col">
    <div class="card h-100">
      
      <div class="card-body">
        <h5 class="card-title">Platform Settings</h5>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Email me</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Not email me when someone follow</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">never email me </label>
</div>
      </div>
      <div class="card-footer">
       <p>tap to record</p>
      </div>
    </div>
  </div>
   <div class="cardss" >
    <div>
        <h5 style={{'color':'white'}}>PROJECTS</h5>
    </div>
    <div style={{'display':'flex'}} className="cards">
        <div class="card1">
            <img width="200px" height="165px" src="../image1.jpg"/>
        </div>
        <div className="card2">
            <img  width="200px" height="165px" src='../image2.jpg'/>
    </div>
        <div className="voll" >
            <img width="200px" height="165px" src='../images3.jpg'/>
    </div >
    </div>
   </div >
</div>
        </>
    )
}

export default Profile;