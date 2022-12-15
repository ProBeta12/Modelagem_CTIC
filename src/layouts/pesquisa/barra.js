/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components

// import DataTable from "examples/Tables/DataTable";

import "./index.css";
import MDButton from "components/MDButton";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// var Hello = React.createElement('button', {type: 'submit'}, 'Hello')

function Pesquisa() {
  return (
    <DashboardLayout>
      <div className="#">
        <form className="forms row">
          <select className="col SemBorda mx-2" name="info">
            <option>Prédio</option>
            <option>predio 1</option>
          </select>
          <select className="col SemBorda mx-2" name="info">
            <option>Dia</option>
            <option>1</option>
          </select>
          <select className="col SemBorda mx-2" name="info">
            <option>Horário</option>
            <option>ola mundo</option>
          </select>
          <select className="col SemBorda mx-2" name="info">
            <option>Status</option>
            <option>ola mundo</option>
          </select>
          {/* <input className="col SemBorda mx-2" placeholder="id" type="text" id="pf" /> */}
          <MDButton className="col">Confirmar</MDButton>
        </form>
        {/* <button>aaaa</button> */}
      </div>
    </DashboardLayout>
  );
}

export default Pesquisa;
