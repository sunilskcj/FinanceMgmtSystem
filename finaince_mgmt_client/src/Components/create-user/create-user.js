import './create-user';
function Create_User(){
return (

<div class="container">
    <h1 class="h3 mb-5">Create Account</h1>
    <div class="accordion-body">
    <form>
        <div id="Title_io" class="form-group">
        <label for="title">Title : </label> <span />
        <select id="title" name="title" >
        <option value="Mr.">Mr.</option>
        <option value="Ms.">Ms.</option>
        <option value="Mrs.">Mrs.</option>
        </select>
        </div><br />
        <div class="form-group">
            <div class="row">
                <div class="col-lg-3">    
                <div class="mb-3">
                 <label class="form-label">First Name</label>
                 <input type="text" class="form-control" id="firstName" />
                </div>
            
                </div>
                <div class="col-lg-3"> 
                <div class="mb-3">
                 <label class="form-label">Middle Name</label>
                 <input type="text" class="form-control" placeholder=""  />
                </div>
                </div>
                <div class="col-lg-3"> 
              <div class="mb-3">
                 <label class="form-label">Last Name</label>
                 <input type="text" class="form-control" id="lastName"  />
               </div>
               
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-3">
               <div class="mb-3">
                 <label class="form-label">Date of Birth</label>
                 <input type="date" class="form-control" placeholder=""  formControlName="dob" />
              </div>
                </div>
                <div class="col-lg-3">
             <div class="mb-3">
                 <label class="form-label">Mobile Number</label>
                 <input type="number" class="form-control" formControlName="mobileno" />
             </div>
              
              
                </div>
                <div class="col-lg-3">
                <div class="mb-3">
                <label class="form-label">EmailID</label>
                <input type="email" class="form-control" formControlName="emailId" />
                </div>
                </div>
               
           </div>
         </div>
        <div class="form-group">
         <div class="col-lg-3">
            <div class="mb-3">
                <label class="form-label">AadharCard Number</label>
                <input type="number" class="form-control" formControlName="aadhaarCardNumber" />
            </div>
            </div>
        </div>
        </div>
        <h6>ResidentialAddress</h6>
        <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">AddressLine1</label>
                    <input type="text" class="form-control" formControlName="residentialAddressLine1" />
                </div>
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">AddressLine2</label>
                    <input type="text" class="form-control" formControlName="residentialAddressLine2" /><br />
                </div>
            </div>
         </div>
         </div>
         <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Landmark</label>
                    <input type="text" class="form-control" formControlName="residentialLandmark" />
                </div>
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">City</label>
                    <input type="text" class="form-control" formControlName="residentialCity" /><br />
                </div>
               
            </div>
         </div>
         </div>
         <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">State</label>
                    <input type="text" class="form-control" formControlName="residentialState" />
                </div>
                
               </div>
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Pincode</label>
                    <input type="number" class="form-control" formControlName="residentialPincode" /><br />
                </div>
                
            </div>
         </div>
         
         <div class="form-group">
         <div class="col-lg-3">
            <p>
            <input type="checkbox" name="Residential Address" value="Residential Address" />&nbsp; Same as Residential Address
            </p>
          </div>
         </div>
          <br />
         <h6>Permanent Address</h6>
         <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">AddressLine1</label>
                    <input type="text" class="form-control" formControlName="permanentAddressLine1" />
                </div>
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">AddressLine2</label>
                    <input type="text" class="form-control" formControlName="permanentAddressLine2" /><br />
                </div>
            </div>
         </div>
         </div>
         <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Landmark</label>
                    <input type="text" class="form-control" formControlName="permanentLandmark" />
                </div>
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">City</label>
                    <input type="text" class="form-control" formControlName="permanentCity" /><br />
                </div>
            </div>
         </div>
         </div>
         <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">State</label>
                    <input type="text" class="form-control" formControlName="permanentState" />
                </div>
                
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Pincode</label>
                    <input type="number" class="form-control" formControlName="permanentPincode" /><br />
                </div>
            </div>
         </div>
         </div>
         <h6>Occupation</h6>
         <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Occupation Details</label>
                    <input type="text" class="form-control" formControlName="occupationdetails" />
                </div>
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Occupation Type</label>
                    <input type="text" class="form-control" formControlName="occupationType" /><br />
                </div>
            </div>
         </div>
         </div>
         <div class="form-group">
         <div class="row">
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Source of Income</label>
                    <input type="text" class="form-control" formControlName="sourceofincome" />
                </div>
            </div>
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label">Gross Annual Income</label>
                    <input type="number" class="form-control" formControlName="grossAnnualIncome" /><br />
                </div>
            </div>
         </div>
    
            <p>
                <input type="checkbox"  formControlName="Netcheckbox" />&nbsp; Do you want NetBanking???
            </p>
        
         <div>
            <button class="btn btn-primary w-20 mt-2"  type="submit" >Submit</button>
         </div>
        </div>
    </form>
    </div>
</div>

);
}
export default Create_User;
