import React from 'react';

class PaymentZoneList extends React.Component {
    render() {
      return (
        <select className="form-control" id="input-payment-zone" name="zone_id">
          <option value=""> --- Please Select --- </option>
          <option selected="selected" value="3121">Al Hasakah</option>
          <option value="3122">Al Ladhiqiyah</option>
          <option value="3123">Al Qunaytirah</option>
          <option value="3124">Ar Raqqah</option>
          <option value="3125">As Suwayda</option>
          <option value="3126">Dara</option>
          <option value="3127">Dayr az Zawr</option>
          <option value="3128">Dimashq</option>
          <option value="3129">Halab</option>
          <option value="3130">Hamah</option>
          <option value="3131">Hims</option>
          <option value="3132">Idlib</option>
          <option value="3133">Rif Dimashq</option>
          <option value="3134">Tartus</option>
        </select>
      );
    }
}

export default PaymentZoneList;
